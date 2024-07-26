// did not work
const http = require("http");
const fs = require("fs");
const url = require("url");

const tasksFile = "tasks.json";

let tasks = [];
if (fs.existsSync(tasksFile)) {
  const tasksJson = fs.readFileSync(tasksFile, "utf8");
  tasks = JSON.parse(tasksJson);
}

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  if (query.action === "add") {
    tasks.push(query.task);
    fs.writeFileSync(tasksFile, JSON.stringify(tasks));
    res.end(`Task added: ${query.task}`);
  } else if (query.action === "list") {
    res.end(`Tasks: ${JSON.stringify(tasks)}`);
  } else if (query.action === "delete") {
    tasks = tasks.filter((task) => task !== query.task);
    fs.writeFileSync(tasksFile, JSON.stringify(tasks));
    res.end(`Task deleted: ${query.task}`);
  } else {
    res.end("Invalid action. Please use add, list, or delete.");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
