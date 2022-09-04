const fs = require('fs');
const products = [
    { id: 1 },
    { id: 1 },
    { id: 1000 },
];


module.exports.getAllUser = (req, res) => {
    fs.readFile(__dirname + '/userData.json', (err, data) => {
        if (err) {
            console.log(err);
            res.send('data not found')
            res.end()
        } else {
            res.send(data);
            res.end()
        }
    })
    // res.send(products)

}