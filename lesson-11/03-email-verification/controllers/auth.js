import crypto from "node:crypto";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import User from "../models/user.js";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

async function register(req, res, next) {
  const { name, email, password } = req.body;

  const normalizedEmail = email.toLowerCase();

  try {
    const user = await User.findOne({ email: normalizedEmail });

    if (user !== null) {
      return res.status(409).send({ message: "User already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomUUID();

    await transport.sendMail({
      to: email,
      from: "vmudrij0508@gmail.com",
      subject: "Welcome to BookShelf",
      html: `To confirm you registration please click on the <a href="http://localhost:8080/api/auth/verify/${verifyToken}">link</a>`,
      text: `To confirm you registration please open the link http://localhost:8080/api/auth/verify/${verifyToken}`,
    });

    await User.create({
      name,
      verifyToken,
      email: normalizedEmail,
      password: passwordHash,
    });

    res.status(201).send({ message: "Registration successfully" });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  const normalizedEmail = email.toLowerCase();

  try {
    const user = await User.findOne({ email: normalizedEmail });

    if (user === null) {
      console.log("Email");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      console.log("Password");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    if (user.verify === false) {
      return res.status(401).send({ message: "Your account is not verified" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: 60 * 60 }
    );

    await User.findByIdAndUpdate(user._id, { token });

    res.send({ token });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

async function verify(req, res, next) {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verifyToken: token });

    if (user === null) {
      return res.status(404).send({ message: "Not found" });
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null });

    res.send({ message: "Email confirm successfully" });
  } catch (error) {
    next(error);
  }
}

export default { register, login, logout, verify };
