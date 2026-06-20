import express from 'express';
import "dotenv/config"
import UserRouter from "./routes/users.routes.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/", UserRouter);

app.listen(port, () => {
    console.log(`Servidor listo en el puerto: ${port}`);
})

