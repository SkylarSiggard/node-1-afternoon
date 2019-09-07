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

module.exports = getProduct







