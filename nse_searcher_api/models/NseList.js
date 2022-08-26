import mongoose from "mongoose";

const NseListSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    CurrentMarketPrice: {
        type: Number,
        required: true,
        default: 0
    },
    MarketCap: {
        type: Number,
        required: true,
        default: 0
    },
    StockP_E: {
        type: Number,
        required: true,
        default: 0
    },
    DividendYield: {
        type: Number,
        required: true,
        default: 0
    },
    ROCE: {
        type: Number,
        required: true,
        default: 0
    },
    ROEPreviousAnnum: {
        type: Number,
        required: true,
        default: 0
    },
    DebttoEquity: {
        type: Number,
        required: true,
        default: 0
    },
    EPS: {
        type: Number,
        required: true,
        default: 0
    },
    Reserves: {
        type: Number,
        required: true,
        default: 0
    },
    Debt: {
        type: Number,
        required: true,
        default: 0
    },
})

export default mongoose.model("NseList", NseListSchema)