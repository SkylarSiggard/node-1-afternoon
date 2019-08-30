const product = require('../products.json')


const getProduct = (req , res) => {
    const id = parseInt(req.params.id) 
    if (!id) {
        res.status(500).send(noId)
    } else {
        const foundId = product.filter(id => product.id === id)
        res.status(200).send(foundId)
    }
    console.log(id)
}


// const getProduct = (req, res) => {
//     const item = products.find(val => val.id === parseInt(req.params.id));
//     if (!item) {
//         return res.status(500).send("Item not in list");
//     }
//     res.status(200).send(item);
// }

module.exports = getProduct







