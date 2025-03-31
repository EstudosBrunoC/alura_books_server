const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    try {
        res.send('Hello World from Alura');
    }  catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

router.post('/', (req, res) => {
    res.send("Você fez uma requisição POST")
})

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição PATCH")
})

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição DELETE")
})

module.exports = router;