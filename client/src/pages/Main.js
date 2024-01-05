import Carousel from "../components/Carousel";

const Main = () => {
    return (
        <div className="container">
            <div className="container p-md-5">
                <h2>Sign our petition!</h2>
                <p>
                    The intrusion of the Mister Car Wash is progressively
                    diminishing property values while also giving rise to constant light and noise
                    disruptions. The prominent 30-foot tower is now a visible presence throughout our
                    community, and, most significantly, the cherished historical appeal of our
                    neighborhood is swiftly eroding in favor of a profit-driven agenda.
                </p>
                <p>
                    By signing our petition, you are taking a stand to preserve our history, heritage and way of life.
                    You are showing Kaysville City that they must prioritize its citizens over businesses. We can save
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

            {/*< Carousel />*/}

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
                    alt="TODO"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <img
                    src="./evidence/DSC_1740_RS.jpg"
                    alt="TODO"
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
                    alt="TODO"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <img
                    src="./evidence/DSC_1712_RS.jpg"
                    alt="TODO"
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
                    alt="TODO"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
            </div>

            <div className="d-md-flex justify-content-md-evenly mt-5 align-items-md-center">
                <img
                    src="./evidence/DSC_1693_RS.jpg"
                    alt="TODO"
                    className="img-fluid rounded p3"
                    width={616}
                    height={416}
                />
                <p className="p-3">
                    This isn't just about preserving property values; it's about maintaining quality of life for
                    residents who've invested years into making this neighborhood what it is today. We cannot allow
                    profit-driven agendas displace cherished historical appeal.
                    <br /><br />
                    Join us in demanding respect for our community's history and tranquility - sign this petition today!
                </p>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <h2>
                    Sign our petition over at <a
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