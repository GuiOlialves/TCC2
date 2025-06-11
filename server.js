const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
//banquinho de dados
//banquinho de dados
const connectionString = "mongodb://veterinariocon01:183928@mongo71-farm1.kinghost.net/veterinariocon01";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB da KingHost conectado com sucesso!"))
.catch((err) => console.error("Erro ao conectar no MongoDB da KingHost:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //arquivos json
app.use(express.static(path.join(__dirname, "public"))); //caminho absoluto

//paginas onde os ejs(views) estão e vão ser renderizados
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // renderiza as views como ejs
app.use("/", routes); //rotas ae

//servidors
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
});
