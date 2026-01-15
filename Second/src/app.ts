import  express,{type Application,type Request,type Response} from "express";

import path from "path"
import pageRoute from "./routes/page.routes"
const  app : Application = express()

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(pageRoute);

export default app ;
