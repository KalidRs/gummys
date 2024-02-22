import { Router } from "express";
import {getAll,getOne,insertOne,deleteOne,updateOne} from "../controllers/productController.js";
const router=Router();
router.get("/", getAll);
router.get("/:barcode", getOne);
router.post("/",insertOne);
router.post("/:barcode",updateOne);
router.get("/eliminar/:barcode",deleteOne);
// router.get("/", getPrice);
// router.get("/:price", getPrime);
export default router;


