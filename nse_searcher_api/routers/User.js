import { Router } from "express";
import { findNse, singleStock } from "../controllers/serachItem.js";
const route = Router()


//for getting querying nse name
route.get('/stockName/', findNse)

// for single stock 
route.get('/stock/', singleStock)

export default route