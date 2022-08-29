import NseList from "../models/NseList.js";

//for all data
export const allData = async (req, res, next) => {
    try {
        let data = await NseList.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}

// for searched item 
export const findNse = async (req, res, next) => {
    try {
        const Name = req.params.name;
        const data = await NseList.find(
            { Name: { $regex: '^' + Name, $options: 'i' } }
        ).limit(5);
        res.status(200).json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}

export const emptyArray = async (req, res, next) => {
    res.status(200).json({ data: [] })

}
// for single data
export const singleStock = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await NseList.findById(id)
        res.status(200).json(data)

    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}
