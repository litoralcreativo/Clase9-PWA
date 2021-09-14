const db = require("../utils/db");

const getAll = () => db("usuarios").select();
const getSingle = (id) => db("usuarios").where({ id: id }).select();
const validate = (nombre, pass) =>
  db("usuarios").where({ nombre: nombre, pass: pass }).select();
const create = (obj) => db("usuarios").insert(obj);
const remove = (id) =>
  db("usuarios").where({ id: id }).update({ eliminado: 1 });
const update = (id, obj) => db("usuarios").where({ id: id }).update(obj);

module.exports = { getAll, getSingle, create, remove, update, validate };
