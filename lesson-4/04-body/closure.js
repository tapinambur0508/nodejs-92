function json() {
  return (req, res, next) => {
    console.log("Hello");
  };
}

const jsonParser = json();

jsonParser();
