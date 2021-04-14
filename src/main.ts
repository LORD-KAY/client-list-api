import * as express from "express";
import * as helmet from "helmet";
import * as compression from "compression";
import * as cors from "cors";
import { json, urlencoded } from "body-parser";
import * as dotenv from "dotenv";
import { db } from "./config/db.config";
import { AuthGuard } from "./guard/auth.guard";
import * as fs from "fs";
import * as path from "path";
import * as SwaggerUI from "swagger-ui-express";
dotenv.config();

async function server() {
  const app: express.Application = express();
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(json({ limit: "50mb" }));
  app.use(urlencoded({ limit: "50mb", extended: false }));
  app.set("PORT", app.get("APP_PORT") || 8090);

  /**
   * Swagger docs configuration here
   */
  const swaggerContent = fs.readFileSync(
    path.join(__dirname, "/swagger/swagger.json"),
    "utf-8"
  );
  const swaggerDocument = JSON.parse(swaggerContent);
  app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

  /**
   * DB Connection
   */
  db()
    .then(() => console.log(`DB connection successful :: :sparkles:`))
    .catch((err) => console.log(`Unable to connect to database ${err}`));

  /**
   * Health check
   */
  app.get(`/health/check`, (req, res) => {
    return res.status(200).json({
      message: `Server is up and running`,
      path: req.path,
      timestamp: new Date().toISOString(),
    });
  });

  app.use("/api/v1", [AuthGuard]);

  app.listen(app.get("PORT"), () => {
    console.log(`Application running at http://localhost:${app.get("PORT")}`);
    console.log(
      `Access API Docs --> http://localhost:${app.get("PORT")}/api/docs`
    );
  });
}

server();
