import { Router } from "express";

import { getIndexPage } from "../controllers/indexController.js";
import { getNewPage, postNewNote } from "../controllers/newController.js";
import { getNote } from "../controllers/noteController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);
indexRouter.get("/new", getNewPage);
indexRouter.post("/new", postNewNote);
indexRouter.get("/note/:id", getNote);

export default indexRouter;
