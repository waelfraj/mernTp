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
};

const calcul = (
  req: Request,
  res: Response,
) => {
 
  const op = req.query.op;
  const a = Number(req.query.n1);
  const b = Number(req.query.n2);


  switch (op) {
    case "add":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${a+b}`
      );
      break;
    case "min":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${a-b}`
      );  
    break;
    case "mult":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${a*b}`
      ); 
    break;
    case "div":
      if(b===0){
        res
      .status(200)
      .send(
        `Vous ne pouvez pas diviser sur 0`
      );
      }else
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${a/b}`
      );   
    break;
      default:
        break;
      }
    
};

app.get("/calcul",verif,calcul);
app.get("*",(req :Request,res:Response) =>
{
  res.status(200).send("Error 404");
})

app.listen(3000, () => {
  console.log(
    "Server listening on port 3000"
  );
});