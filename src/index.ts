import express, {
  NextFunction,
  Request,
  Response,
 } from "express";
const app = express();



const verif  = (req : Request, res :Response, next: NextFunction) => {
  const {
    params: { op, a, b },
  } = req;
  var x :number = +a;
  var y :number = +b;

  if ((!Number.isNaN(x)) && (!Number.isNaN(y))){
    if (op === "sum"||op === "sous"||op === "mult"||op === "div")
    next()
    else{
    res.send("Error: you must choose sum or sous or mult ou div")
    }
  }else{
    res.send("Error: a ou b not number")
  }
  


}


app.get("/:op/:a/:b",verif,(req,res)=> {
  res.status(200).send(`la resultat de l'operation est egale a`);
});


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
switch (op) {
      case "somme":
        res
          .status(200)
          .send(
            `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${sum(
              a,
              b
            )}`
          );
        break;
      case "soustraction":
        res
          .status(200)
          .send(
            `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${soustraction(
              a,
              b
            )}`
          );
        break;
      case "multiplication":
        res
          .status(200)
          .send(
            `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${multiplication(
              a,
              b
            )}`
          );
        break;
      case "division":
        res
          .status(200)
          .send(
            `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${division(
              a,
              b
            )}`
          );
        break;
      default:
        res
          .status(200)
          .send(
            `Il faut choisir somme ou aaaa`
          );
        break;
    }



*/