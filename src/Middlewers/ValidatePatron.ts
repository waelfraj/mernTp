import {
  Request,
  Response,
  NextFunction,
} from "express";

module.exports = {
  get: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const op = req.query.op;
    const a = Number(req.query.n1);
    const b = Number(req.query.n2);

    if (
      !Number.isNaN(a) &&
      !Number.isNaN(b)
    ) {
      if (
        op === "add" ||
        op === "min" ||
        op === "mult" ||
        op === "div"
      )
        next();
      else {
        res.send(
          "Error: you must choose add or min or mult ou div"
        );
      }
    } else {
      res.send(
        "Error: a ou b not number"
      );
    }
  },
};
