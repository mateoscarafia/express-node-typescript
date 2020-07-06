import { Router } from "express";
const router = Router();

import { getCurrency } from "../controllers/";

router.post("/conversion", getCurrency);

export = router;
