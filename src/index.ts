const express = require("express");
const app = express();
const routerMathOp = require("./Controllers/MathControllers");
const routerNotFound = require("./Controllers/NotFoundController");

app.use("/calcul", routerMathOp);

app.use("/", routerNotFound);

app.listen(3000, () => {
  console.log(
    "Server listening on port 3000"
  );
});
