const db = require('../db.json')
let id = db.length;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense!", "A friend is a present you give yourself!", "A pleasant surprise is waiting for you!", "Adventure can be real happiness!", "Smile when you are ready!"];

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);

    },

    // //Part2
    getShoes: (req, res) => {
        let allShoes = db;
        res.status(200).send(allShoes)
    },

    createShoes: (req, res) => {
        id++;
        let newShoes = { ...req.body, id: id }
        db.push(newShoes)

        res.status(200).send(db);
    },

    deleteShoes: () => {
        let { shoesId: id } = req.param;
        let shoesIndex = shoes.findIndex(e => e.id === +id);
        console.log('Shoes Index:', shoesIndex)
        console.log('Shoe Id:', id);

        shoes.splice(shoesIndex, 1);
        res.status(200).send(db);
    },

    updateShoes: (res, req) => {
        const { shoes_id } = req.params;
        const { type } = req.body;

        console.log(shoes.id);
        console.log(type);

        for (let i = 0; i < db.length; i++) {
            if (db[i].id === +shoes_id) {
                if (type === 'plus') {
                    db[i].rating++
                }
                if (type === 'minus') {
                    db[i].rating--
                }
            }
        }
        res.status(200).send(db)
    }

}