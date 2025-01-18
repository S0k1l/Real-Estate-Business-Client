const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the Angular dist directory
app.use(
  express.static(
    path.join(__dirname, "dist/real-estate-business-client/browser")
  )
);

// Redirect all requests to the index.html
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/real-estate-business-client/browser/index.html")
  );
});

// Start the app by listening on the default Render port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
