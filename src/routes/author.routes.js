import { Router } from "express";
import{ methods as authorController} from "./../controllers/author.controller"

const router=Router();

router.get("/", authorController.getAuthors);
router.get("/:id", authorController.getAuthor);

export default router;