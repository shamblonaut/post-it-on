import { Router } from "express";

import { getIndexPage } from "../controllers/indexController.js";
import { getNewPage, postNewNote } from "../controllers/newController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);
indexRouter.get("/new", getNewPage);
indexRouter.post("/new", postNewNote);

export default indexRouter;
