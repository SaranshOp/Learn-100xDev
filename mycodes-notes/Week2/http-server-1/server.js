const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send('<b> ok Hello World!" </b>');
});

// In-memory array to store text content
const textContent = [];

// Route to handle POST requests for adding text content
app.post("/add-content", (req, res) => {
  // Extract text content from the request body
  const newContent = req.body.content;

  // Validate the content (you might want to add more robust validation)
  if (!newContent) {
    // if there is an error it will send the code 400 and an error
    return res.status(400).json({ error: "Content is required" });
  }

  // Add the content to the in-memory array
  textContent.push(newContent);

  // Respond with a success message
  res.status(201).json({ message: "Content added successfully" });
});

app.post("/post", (req, res) => {
  console.log("POST request received");
  console.log(req.body);
  console.log(req.headers);
  res.send({
    msg: "2 + 2 = 4",
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "This is the API route." });
});

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
