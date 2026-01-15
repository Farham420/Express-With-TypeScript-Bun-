import { Router } from "express";
import { homePage, PostPage, TodoPage } from "../controllers/page.controller";
const router  = Router();

router.get('/',homePage);
router.get('/todos',TodoPage)
router.get('/posts',PostPage)
export default router;
