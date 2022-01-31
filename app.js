const express = require("express");
const app = express();

const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

app.use(express.json());

/*Correction erreurs CORS*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
/*d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).*/

app.use("/api/sauce", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
