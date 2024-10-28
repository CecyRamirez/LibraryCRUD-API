import { Router } from "express";
import{ methods as authorController} from "./../controllers/author.controller"

const router=Router();

router.get("/", authorController.getAuthors);
router.get("/:id", authorController.getAuthor);
router.post("/", authorController.addAuthors);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

export default router;