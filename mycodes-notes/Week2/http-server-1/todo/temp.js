const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const tasksFile = "tasks.json";
const htmlFile = "todo.html"; // replace with the path to your HTML file

let tasks = [];
if (fs.existsSync(tasksFile)) {
  const tasksJson = fs.readFileSync(tasksFile, "utf8");
  tasks = JSON.parse(tasksJson);
}

const server = http.createServer((req, res) => {
  const requestUrl = url.parse(req.url, true);
  const query = requestUrl.query;

  if (requestUrl.pathname === "/") {
    fs.readFile(htmlFile, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error: ${err.message}`);
      } else {
        res.end(data);
      }
    });
  } else if (query.action) {
    if (query.action === "add") {
      tasks.push(query.task);
      fs.writeFileSync(tasksFile, JSON.stringify(tasks));
      res.end(JSON.stringify({ message: `Task added: ${query.task}` }));
    } else if (query.action === "list") {
      res.end(JSON.stringify(tasks));
    } else if (query.action === "delete") {
      tasks = tasks.filter((task) => task !== query.task);
      fs.writeFileSync(tasksFile, JSON.stringify(tasks));
      res.end(JSON.stringify({ message: `Task deleted: ${query.task}` }));
    } else {
      res.end("Invalid action. Please use add, list, or delete.");
    }
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
