import { Router } from "express";
import { allData, findNse, singleStock } from "../controllers/serachItem.js";
const route = Router()

route.get('/AllData', allData)

//for getting querying nse name
route.get('/stockName/:name', findNse)

// for single stock 
route.get('/stock/:id', singleStock)

export default route