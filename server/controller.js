module.exports = {

  getHouses: (req, res) => {
    const dbInstance = req.app.get('db')
    const { houses } = req.body
    dbInstance.getHouses([25])
      .then((houses) => res.sendStatus(200))
      .catch(error => {
        res.status(500).send({ errorMessage: "Sorry no houses!" })
        console.log(error)
      })
  }




}