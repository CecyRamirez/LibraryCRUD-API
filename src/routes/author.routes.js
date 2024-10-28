import { Router } from "express";
import{ methods as authorController} from "./../controllers/author.controller"

const router=Router();

router.get("/", authorController.getAuthors);

export default router;