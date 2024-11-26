import cors from "cors";
import express from "express";
import routes from "./routes/index.";

const app = express();
const allowedOrigins = ["http://localhost:3000"];
app.use(cors());
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(routes);

export default app;
