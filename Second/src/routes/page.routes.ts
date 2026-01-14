import { Router } from "express";
import { homePage } from "../controllers/page.controller";
const router  = Router();

router.get('/',homePage);
export default router;