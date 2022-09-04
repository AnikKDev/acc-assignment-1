const fs = require('fs');

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

// function for random number
const randomNumber = (size) => {
    const number = Math.floor(Math.random() * size);
    if (number <= 5) {
        return number
    } else {
        return randomNumber()
    }
}



module.exports.getRandomUser = (req, res) => {
    /* fs.readFile(__dirname + '/userData.json', (err, data) => {

        if (err) {
            console.log(err);
            res.send('data not found')
            res.end()
        } else {
            const randomId = randomNumber()
            const id = req.params.id;
            res.send(data);
            res.end()
        }
    }) */

    const users = JSON.parse(fs.readFileSync(__dirname + '/userData.json', { encoding: "utf-8", flag: "r" }));

    const randomUser = users[randomNumber(users.length)];
    res.send(randomUser)
}