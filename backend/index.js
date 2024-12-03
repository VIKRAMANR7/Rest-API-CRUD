import express from "express";
import userRoutes from "./routes/users.js"; // Correct path to users.js
const app = express();
const PORT = 5000;

// Use express built-in middleware to parse JSON bodies
app.use(express.json()); // Automatically parses incoming JSON data
app.use("/users", userRoutes); // Using the user routes under the /users path

app.get("/", (req, res) => {
  console.log("Test"); // Log when visiting homepage
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
