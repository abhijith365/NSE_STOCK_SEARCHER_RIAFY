import NseList from "../models/NseList.js";
import asyncHandler from 'async-handler'


// for searched item 
export const findNse = async (req, res, next) => {
    const Name = req.query.name;
    console.log(Name)

    try {
        const data = await NseList.find(
            { Name: { $regex: '^' + Name, $options: 'i' } }
        ).limit(5);
        res.status(200).json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}
// for single data
export const singleStock = async (req, res, next) => {
    const id = req.query.id
    try {
        const data = await NseList.findById(id)
        res.status(200).json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}