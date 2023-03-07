const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

console.log(dbConfig);

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount()
    .then((count) => {
      if (count === 0) {
        new Role({
          name: "user",
        })
          .save()
          .then(() => {
            console.log("added 'user' to the roles collection");
          })
          .catch((err) => console.log(err));

        new Role({
          name: "vendor",
        })
          .save()
          .then(() => {
            console.log("added 'vendor' to roles collection");
          })
          .catch((err) => console.log(err));

        new Role({
          name: "admin",
        })
          .save()
          .then(() => {
            console.log("added 'admin' to roles collection");
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to choppings application." });
});

// set port, listen for requests
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
