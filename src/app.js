const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.json());

const productsRoutes = require("./routes/productsRoutes");
const pagesRoutes = require("./routes/pagesRoutes");
const proveedoresRoutes = require("./routes/proveedoresRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use("/", pagesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/user", usersRoutes);

app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});
