import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/json");
  next();
});

app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, 
    });

    const catFact = response.data?.fact || "Cats are mysterious creatures!";

    
    const data = {
      status: "success",
      user: {
        email: "mcgibsononyekachukwu@gmail.com",
        name: "Izuchukwu McGibson Onyekachukwu",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);


    const fallback = {
      status: "success",
      user: {
        email: "izuchukwumcgibson@gmail.com",
        name: "McGibson Izuchukwu",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at the moment. Try again later!",
    };

    res.status(200).json(fallback);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
