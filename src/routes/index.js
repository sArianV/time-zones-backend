import express from 'express';
import timezones from "./timezones.routes";

const app = express();

app.use("/timezones", timezones);

app.use("/", async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Timezone API"
    })
})

module.exports = app;