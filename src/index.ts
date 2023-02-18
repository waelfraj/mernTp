import express, {
  NextFunction,
  Request,
  Response,
} from "express";
const app = express();

const verif = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { op, a, b },
  } = req;
  var x: number = +a;
  var y: number = +b;

  if (
    !Number.isNaN(x) &&
    !Number.isNaN(y)
  ) {
    if (
      op === "sum" ||
      op === "sous" ||
      op === "mult" ||
      op === "div"
    )
      next();
    else {
      res.send(
        "Error: you must choose sum or sous or mult ou div"
      );
    }
  } else {
    res.send(
      "Error: a ou b not number"
    );
  }
};

const calcul = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { op, a, b },
  } = req;
  var x: number = +a;
  var y: number = +b;
  var s;

  switch (op) {
    case "sum":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x+y}`
      );
      break;
    case "sous":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x-y}`
      );  
    break;
    case "mult":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x*y}`
      ); 
    break;
    case "div":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x/y}`
      );   
    break;
      default:
        break;
      }
    
};

app.get("/:op/:a/:b",verif,calcul);

app.listen(3000, () => {
  console.log(
    "Server listening on port 3000"
  );
});

/*

   
    
  }
);
*/

/*


*/
