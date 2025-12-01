const express = require('express');
const app = express();

app.use(express.json());
app.use("/api/events", require("./routes/events.js"));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});