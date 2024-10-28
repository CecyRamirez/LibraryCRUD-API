import express from "express";
import morgan from "morgan";

//Routes
import authorRoutes from "./routes/author.routes"
import bookRoutes from "./routes/book.routes"

const app = express();

//Settings 
app.set("port",4001);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/authors",authorRoutes);
app.use("/api/books",bookRoutes);

export default app;