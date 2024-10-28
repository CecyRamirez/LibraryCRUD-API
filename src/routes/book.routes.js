import { Router } from "express";
import{ methods as bookController} from "./../controllers/book.controller"

const router=Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.addBooks);
router.put("/:id", bookController.updateBook);

export default router;