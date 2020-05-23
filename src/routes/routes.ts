import {Router} from "express";
import {myFunction} from "../controllers/controller";

const router = Router();

router.route('/')
    .get(myFunction);


export default router;
