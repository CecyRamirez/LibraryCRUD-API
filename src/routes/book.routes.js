import { Router } from "express";
import{ methods as bookController} from "./../controllers/book.controller"

const router=Router();

router.get("/", bookController.getBooks);

export default router;