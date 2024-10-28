import { Router } from "express";
import{ methods as bookController} from "./../controllers/book.controller"

const router=Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.addBooks);

export default router;