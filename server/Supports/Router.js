import express from "express";
import scrapeWeb from "./WebScraper.js";

const Router = express.Router();
let runningWebScrape = {
    signatureCount: {
        total: 276,
        displayed: 276,
        displayedLocalized: "276"
    },
    signatureGoal: {
        displayed: 500,
        displayedLocalized: "500"
    },
    signatureTarget: 234,
    signatureTargetLocalized: "234",
    pulledDate: "2024-01-06T21:57:41+0000"
};

const isDateExpired = () => {
    const lastCheck = new Date(runningWebScrape.pulledDate);
    const currentDate = new Date();
    const dateDiff = currentDate - lastCheck;

    console.log(`Last check (epoch time): ${dateDiff}`);
    return (dateDiff > 1800000);
};

const formatWebScrape = () => {
    let newWebScrape = {};

    newWebScrape.signatures = runningWebScrape.signatureCount.total;
    newWebScrape.goal = runningWebScrape.signatureGoal.displayed;
    newWebScrape.pulledDate = runningWebScrape.pulledDate;

    return newWebScrape;
};

Router.get("/petitionInfo", async (req, res) => {
    try {
        console.log("Received request for /api/petitionInfo")
        if (isDateExpired()) {
            runningWebScrape = await scrapeWeb();
        }
        res.status(200);
        console.log(`Sending 200 response`);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
    res.send(formatWebScrape());
});

export default Router;