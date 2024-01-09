import axios from "axios";
import { useState, useEffect } from "react";
import LegalNotices from "../components/LegalNotices";
import KaysvilleCouncil from "../components/KaysvilleCouncil";
import CallToActions from "../components/CallToActions";
import {min} from "@popperjs/core/lib/utils/math";

axios.defaults.withCredentials = false;  // not using cookies

const Main = () => {
    const [changeScrape, setChangeScrape] = useState({pulledDate: "Loading...", signatures: "Loading...", goal: "Loading..."});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/petitionInfo`)
            .then((res) => {
                if (res.status === 200 && res.data != null) {
                    setChangeScrape(res.data);
                } else {
                    console.log("An error occurred obtaining Change.org data from the server!")
                    setChangeScrape({pulledDate: "Unable to load", signatures: "?", goal: "?"});
                }
            })
            .catch((err) => {
                console.log(err);
                setChangeScrape({pulledDate: "Unable to load", signatures: "?", goal: "?"});
            })
    }, []);

    const formatDate = (date) => {
        if (date === "Unable to load" || date === "Loading...") return date;
        let workingDate = new Date(date);
        let now = new Date();
        let timeDiff = Math.floor((now - workingDate) / 1000);

        if (timeDiff < 60) {
            return (timeDiff <= 1) ? `just barely` : `${timeDiff} seconds ago`;
        } else {
            let minutes = Math.floor(timeDiff / 60);
            if (minutes < 60) {
                return (minutes <= 1) ? 'about a minute ago' : `${minutes} minutes ago`;
            } else {
                let hours = Math.floor(minutes / 60);
                if (hours < 24) {
                    return (hours <= 1) ? 'about an hour ago' : `${hours} hours ago`;
                } else {
                    let months = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ];
                    let returnString = "on ";
                    let hours = workingDate.getHours();
                    let dayPartition = "A.M.";
                    if (hours > 12) {
                        hours = hours - 12;
                        dayPartition = "P.M."
                    }

                    returnString += months[workingDate.getMonth()] + " ";
                    returnString += workingDate.getDate() + ", ";
                    returnString += workingDate.getFullYear() + " at ";
                    returnString += hours + ":";
                    returnString += workingDate.getMinutes() + " " + dayPartition;

                    return returnString;
                }
            }
        }
    }

    const getProgress = () => {
        if (changeScrape.pulledDate === "Unable to load" || changeScrape.pulledDate === "Loading...") return 0;
        else return Math.floor((changeScrape.signatures / changeScrape.goal) * 100);
    }

    return (
        <div id="petition" className="container section">
            <div className="container p-md-5">
                <h2>Sign our petition!</h2>
                <div className="d-md-flex justify-content-md-evenly">
                    <div className="mb-4">
                        <p>
                            The intrusion of the Mister Car Wash is progressively
                            diminishing property values while also giving rise to constant light and noise
                            disruptions. The prominent 30-foot tower is now a visible presence throughout our
                            community, and, most significantly, the cherished historical appeal of our
                            neighborhood is swiftly eroding in favor of a profit-driven agenda.
                        </p>
                        <p>
                            By signing our petition, you are taking a stand to preserve our history, heritage and way of
                            life.
                            You are showing Kaysville City that they must prioritize its citizens over businesses. We
                            can save
                            our community - with your help.
                        </p>
                        <a
                            className="btn btn-danger"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Sign our Petition at Change.org"
                            href="https://www.change.org/p/demand-kaysville-city-council-and-mister-car-wash-respect-historic-neighborhood"
                        >
                            SIGN THE PETITION
                        </a>
                    </div>
                    <div
                        className="ms-md-5 mb-4"
                        style={{
                            minWidth: "35%"
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Data from Change.org is updated periodically"
                    >
                        <h3>Signatures</h3>
                        <div
                            className="progress mt-3"
                            style={{
                                height: "25px"
                            }}
                        >
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                role="progressbar"
                                style={{
                                    width: `${getProgress()}%`,
                                    fontWeight: 900,
                                    fontSize: "22px",
                                    fontFamily: "Lalezar"
                                }}
                                aria-valuenow={getProgress()}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {getProgress() < 5 ? '' : `${getProgress()}%`}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-0">
                            <div
                                className="text-start"
                                style={{
                                    color: "green"
                                }}
                            >
                                <h2 className="mb-0">{changeScrape.signatures}</h2>
                                <p className="mt-0">Signatures</p>
                            </div>
                            <div
                                className="text-end"
                                style={{
                                    color: "#606060"
                                }}
                            >
                                <h2 className="mb-0">{changeScrape.goal}</h2>
                                <p className="mt-0">Next Goal</p>
                            </div>
                        </div>
                        <p
                            className="text-end mt-0 pt-0"
                            style={{
                                color: "#b0b0b0"
                            }}
                        >Last updated {formatDate(changeScrape.pulledDate)}</p>
                    </div>
                </div>
            </div>

            <h1 id="matters" className="section">Why this matters</h1>
            <hr/>
            <p>The intrusion of these businesses into our neighborhood is progressively
                diminishing property values while also giving rise to constant light and noise
                disruptions. Continue below to read more and view for yourself of how big of a deal this is.</p>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <p className="p-3">
                    Long-time residents of historic Kaysville, who have spent decades building their homes, are now
                    subjected to the incessant whine of vacuums and bright neon lights invading their homes and yards.
                    The recent construction of Mister Car Wash has not only reduced their property value but also
                    significantly impacted their quality of life. This is a plea for respect for our history, our
                    homes, and our peace.
                </p>
                <img
                    src="./evidence/DSC_1732_RS.jpg"
                    alt="Image of Mister Car Wash emitting bright lights into a backyard"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <img
                    src="./evidence/DSC_1740_RS.jpg"
                    alt="Image of Mister Car Wash emitting bright lights into a backyard"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
                <p className="p-3">
                    The neon lights from the car wash are not just an eyesore; they disrupt sleep patterns and
                    contribute to light pollution. According to the American Medical Association (AMA), exposure to
                    excessive light at night can disrupt sleep cycles leading to serious health issues.
                </p>
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <p className="p-3">
                    Moreover, noise pollution from the constant operation of vacuums is another concern. The World
                    Health Organization (WHO) states that prolonged exposure to noise levels can cause health problems.
                </p>
                <img
                    src="./evidence/DSC_1698_RS.jpg"
                    alt="Picture of a white fence separating properties instead of a sound wall"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
            </div>

            {/*<LegalNotices />*/}

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <img
                    src="./evidence/DSC_1712_RS.jpg"
                    alt="Image of Mister Car Wash emitting bright lights into a backyard"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
                <p className="p-3">
                    In addition to health concerns these issues have led to a decrease in property values in the area.
                    A study by The Appraisal Journal shows that properties near commercial establishments with high
                    levels of noise or light pollution often see a decrease in value by as much as 20%.
                </p>
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <p className="p-3">
                    We urge Kaysville City Council and Mister Car Wash management team take immediate action - build
                    a sound wall around the car wash facility and remove neon light signage on the back of the building
                    that is negatively impacting this historic neighborhood.
                </p>
                <img
                    src="./evidence/DSC_1676_RS.jpg"
                    alt="Image of the Mister Car Wash tower obstructing views"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <img
                    src="./evidence/DSC_1693_RS.jpg"
                    alt="Picture of a white fence separating properties instead of a sound wall"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
                <p className="p-3">
                    This isn't just about preserving property values; it's about maintaining quality of life for
                    residents who've invested years into making this neighborhood what it is today. We cannot allow
                    profit-driven agendas displace cherished historical appeal.
                    <br/><br/>
                    Join us in demanding respect for our community's history and tranquility - sign this petition today!
                </p>
            </div>

            <div className="mt-5"></div>
            <CallToActions/>
            <div className="mt-5"></div>
            <KaysvilleCouncil/>

            <div className="d-flex justify-content-center mt-5">
                <h2>
                    Remember to sign our petition over at <a
                    className="text-decoration-none text-danger"
                    href="https://www.change.org/p/demand-kaysville-city-council-and-mister-car-wash-respect-historic-neighborhood">
                    Change.org
                </a>
                </h2>
            </div>
            <div className="d-flex justify-content-center mt-1">
                <a
                    className="btn btn-danger"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Sign our Petition at Change.org"
                    href="https://www.change.org/p/demand-kaysville-city-council-and-mister-car-wash-respect-historic-neighborhood"
                >
                    SIGN THE PETITION
                </a>
            </div>

        </div>
    );
};

export default Main;