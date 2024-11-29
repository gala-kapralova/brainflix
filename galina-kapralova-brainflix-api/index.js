// SCAFFOLDING NEEDED FOR ANY EXPRESS APP
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const PORT = process.env.PORT

const videosRoutes = require("./routes/videos");

const { PORT } = process.env;

app.use(cors({
  origin: 'https://brainflix-videosite.netlify.app/' // Allow requests from your React app
}));
app.use(express.json());
app.use(express.static('public/images'))

// END SCAFFOLDING

app.use("/videos", videosRoutes); // use middleware to handle imported routes

// MORE SCAFFOLDING / BOILERPLATE
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
// END SCAFFOLDING