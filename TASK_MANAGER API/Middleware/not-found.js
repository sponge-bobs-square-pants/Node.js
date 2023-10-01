const notFound = (req, res) => {
    return res.status(404).send('Route doesnot exist');
}

module.exports = notFound