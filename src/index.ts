const express = require("express");
const app = express();
const routerMathOp = require("./Controllers/MathControllers");

app.use("/calcul", routerMathOp);


app.listen(3000, () => {
  console.log(
    "Server listening on port 3000"
  );
});
