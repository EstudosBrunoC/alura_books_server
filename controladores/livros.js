function getLivros (req, res) {
    try {
        res.send('Hello World from Alura');
    }  catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}