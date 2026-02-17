import express from "express";
const app = express();
const port = 3000;
import { readFile } from "./modules/fileHandler.js";
let employees = [];
app.set("view engine", "ejs");
app.use(express.static("public"));
(async () => {
  const data = await readFile("./employees.json", "utf-8");
  employees = JSON.parse(data);
})();

app.get("/", (req, res) => {
  res.render("index", { employees });
});

app.get("/employees", (req, res) => {
  res.json(employees);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
