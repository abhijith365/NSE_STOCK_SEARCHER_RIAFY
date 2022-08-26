import { Router } from "express";
import { allData, findNse, singleStock } from "../controllers/serachItem.js";
const route = Router()

route.get('/AllData', allData)

//for getting querying nse name
route.get('/stockName/:name', findNse)

//handleing empty query nse name alter way use joi js
route.get('/stockName/', findNse)

// for single stock 
route.get('/stock/:id', singleStock)

route.get('/stock/', singleStock)

export default route