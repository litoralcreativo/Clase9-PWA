const model = require("../models/productsModel");

module.exports = {
  all: (req, res) => {
    model
      .getAll()
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  },
  single: (req, res) => {
    const id = req.params.id;
    model
      .getSingle(id)
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  },
  create: (req, res) => {
    const obj = req.body;
    console.log(obj);
    model
      .create(obj)
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  },
  remove: (req, res) => {
    const id = req.params.id;
    model
      .remove(id)
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  },
  update: (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    model
      .update(id, obj)
      .then((response) => res.status(200).json(response))
      .catch((e) => res.status(500).json(e));
  },
};
