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
    if (number <= size) {
        return number
    } else {
        return randomNumber()
    }
}
module.exports.getRandomUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync(__dirname + '/userData.json', { encoding: "utf-8", flag: "r" }));
    const randomUser = users[randomNumber(users.length)];
    res.send(randomUser)
}
// save a user
module.exports.saveAUser = (req, res) => {
    const allUser = fs.readFileSync(__dirname + "/userData.json");

    const dummyData = {
        "id": 1,
        "name": "John",
        "city": "London",
        "country": "England"
    }
    const allUserObj = JSON.parse(allUser);
    allUserObj.push(req.body);
    const newData = JSON.stringify(allUserObj);
    fs.writeFile(__dirname + "/userData.json", newData, (err) => {
        if (err) {
            console.log("data couldn't add")
        } else {
            res.send(allUser)
        }
    })
}