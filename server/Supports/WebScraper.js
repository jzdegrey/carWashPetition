import { promisify } from "util";
import { exec } from "child_process";
const execPromisfy = promisify(exec);

const scrapeWeb = async () => {
    let returnJson;

    const { stdout, stderr } = await execPromisfy(
        "echo \"$(curl --no-progress-meter https://www.change.org/p/demand-kaysville-city-council-and-mister-car-wash-respect-historic-neighborhood | egrep -o \\\"signatureState\\\"\\\:\\\{.*\\\}\\\,\\\"originalLocale\\\" | sed 's/\\\"signatureState\\\"://' | sed 's/},\\\"originalLocale\\\"//'), \\\"pulledDate\\\": \\\"$(date +\"%Y-%m-%dT%H:%M:%S%z\")\\\"}\""
    );

    console.log(`Web Scrape Command stdout: ${stdout}`);

    if (stderr) {
        console.log(`Web Scrape Command stderr: ${stderr}`);
        returnJson = null
    } else {
        returnJson = JSON.parse(stdout);
    }

    return returnJson;
}

export default scrapeWeb;