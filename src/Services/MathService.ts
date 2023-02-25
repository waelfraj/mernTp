import {
  Request,
  Response,
} from "express";

module.exports = {
  get: (
    req: Request,
    res: Response
  ) => {
    const op = req.query.op;
    const a = Number(req.query.n1);
    const b = Number(req.query.n2);
    var result;

    switch (op) {
      case "add":
        result = a + b;
        break;
      case "min":
        result = a - b;
        break;
      case "mult":
        result = a * b;
        break;
      case "div":
        if (b === 0) {
          res
            .status(200)
            .send(
              `Vous ne pouvez pas diviser sur 0`
            );
        } else result = a / b;
        break;
      default:
        break;
    }
    res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${result}`
      );
  },
};
