import * as path from "node:path";
import * as crypto from "node:crypto";

import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(process.cwd(), "tmp"));
  },
  filename(req, file, cb) {
    // file.originalname = TrevorPhilips-GTAV.png
    const extname = path.extname(file.originalname); // .png
    const basename = path.basename(file.originalname, extname); // TrevorPhilips-GTAV
    const suffix = crypto.randomUUID();

    // const prefix =  crypto.randomUUID();

    // `${prefix}-${file.originalname}`

    cb(null, `${basename}-${suffix}${extname}`);
  },
});

export default multer({ storage });
