const db = require("../utils/db");

const getAll = () => db("proveedores").select();
const getSingle = (id) => db("proveedores").where({ id: id }).select();
const create = (obj) => db("proveedores").insert(obj);
const remove = (id) =>
  db("proveedores").where({ id: id }).update({ eliminado: 1 });
const update = (id, obj) => db("proveedores").where({ id: id }).update(obj);

module.exports = { getAll, getSingle, create, remove, update };
