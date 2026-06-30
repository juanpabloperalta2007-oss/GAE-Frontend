const jsonServer = require("json-server");
const fs = require("fs")

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

const db = router.db;

// crear admin si no existe
const adminExists = db.get("usuario").find({ email: "admin@mail.com" }).value();

if (!adminExists) {
  db.get("usuario")
    .push({
      id: 1,
      email: "admin@mail.com",
      password: "1234",
      rolId: 1,
    })
    .write();
}

server.use(router);

server.listen(3000, () => {
  console.log("API corriendo");
});