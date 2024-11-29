// SCAFFOLDING NEEDED FOR ANY EXPRESS APP
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const PORT = process.env.PORT

const videosRoutes = require("./routes/videos");

const { PORT } = process.env;

const corsOptions = {
  origin: (origin, callback) => {
      const allowedOrigins = [
          'https://brainflix-videosite.netlify.app',
          'http://localhost:3000' // Include localhost for development
      ];

      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true); // Allow the request
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  credentials: true // If using cookies/authentication
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public/images'))

// END SCAFFOLDING

app.use("/videos", videosRoutes); // use middleware to handle imported routes

// MORE SCAFFOLDING / BOILERPLATE
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
// END SCAFFOLDING