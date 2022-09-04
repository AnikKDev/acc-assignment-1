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

// update a user
module.exports.updateAUser = (req, res) => {
    const allUser = fs.readFileSync(__dirname + "/userData.json");
    const id = req.params.id;
    // console.log(id);
    const allUserObj = JSON.parse(allUser);
    const filterUserWithID = allUserObj.find(user => user.id == id);
    if (req.body.name) {
        filterUserWithID.name = (req.body.name);
    } else {
        filterUserWithID.name = filterUserWithID.name
    }
    if (req.body.contact) {
        filterUserWithID.contact = (req.body.contact);
    } else {
        filterUserWithID.contact = filterUserWithID.contact
    }
    if (req.body.gender) {
        filterUserWithID.gender = (req.body.gender);
    } else {
        filterUserWithID.gender = filterUserWithID.gender
    }
    if (req.body.address) {
        filterUserWithID.address = (req.body.address);
    } else {
        filterUserWithID.address = filterUserWithID.address
    }
    if (req.body.photoUrl) {
        filterUserWithID.photoUrl = (req.body.photoUrl);
    } else {
        filterUserWithID.photoUrl = filterUserWithID.photoUrl
    }
    const updatedUserObj = JSON.stringify(allUserObj)
    fs.writeFile(__dirname + "/userData.json", updatedUserObj, (err) => {
        if (err) {
            console.log("data couldn't add")
        } else {
            res.send(allUserObj)
        }
    })

    // res.send(filterUserWithID);
}