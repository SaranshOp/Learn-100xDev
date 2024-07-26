const express = require("express");
const { z } = require("zod");
const app = express();
app.use(express.json);

const loginSchema = z.objects({
  username: z.string.min(3),
  password: z.string.min(6),
});

app.post("/login", () => {
  const { username, password } = req.body;

  try {
    LoginScheme.parse({ usernmae, password });
    //
    // ...
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: "Invalid Input" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running at https://localhost:${PORT}");
});
