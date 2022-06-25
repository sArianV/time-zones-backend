const express = require('express');
const { router: timezones } = require("./timezones.routes");

const app = express();

app.use("/timezones", timezones);

app.use("/", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Timezone API"
    })
})

module.exports = app;