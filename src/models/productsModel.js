const db = require("../utils/db");

const getAll = () => db("productos").select();
const getSingle = (id) => db("productos").where({ id: id }).select();
const create = (obj) => db("productos").insert(obj);
const remove = (id) =>
  db("productos").where({ id: id }).update({ eliminado: 1 });
const update = (id, obj) => db("productos").where({ id: id }).update(obj);

module.exports = { getAll, getSingle, create, remove, update };
