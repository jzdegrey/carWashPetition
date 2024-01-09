import { useState } from "react";

const NavBar = () => {
    const [navBarExpand, setNavBarExpand] = useState("collapse navbar-collapse");

    const handleEvent = () => {
        if (navBarExpand === "collapse navbar-collapse") setNavBarExpand("collapse navbar-collapse show");
        else setNavBarExpand("collapse navbar-collapse");
    };

    return (
        <div
            id="root-nav"
            className="navbar fixed-top navbar-expand-md navbar-light bg-light"
            style={{
                minHeight: "107px"
            }}
            data-bs-offset="100"
        >
            <div className="container">
                <a
                    className="navbar-brand"
                    href="#"
                >
                    <img
                        src="./logo64.png"
                        alt="Site logo"
                        height={64}
                        width={64}
                        className="img-fluid rounded d-inline-block align-text-top me-2"
                    />
                    <div className="d-inline-block align-text-top">
                        <h2
                            className="mb-0 pb-0"
                            style={{
                                fontFamily: "'Lemon'",
                                fontWeight: 1000,
                                color: "darkblue"
                            }}
                        >
                            CAR WASH
                        </h2>
                        <h3
                            className="text-muted mt-0 pt-0"
                            style={{
                                fontFamily: "'Lalezar'",
                                color: "lightblue"
                            }}
                        >
                            petition
                        </h3>
                    </div>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#root-nav-inner"
                    aria-controls="root-nav-inner"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleEvent}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={navBarExpand}
                    id="root-nav-inner"
                >
                    <div
                        className="navbar-nav"
                    >
                        <a className="nav-link" href="#petition" onClick={handleEvent}>Petition</a>
                        <a className="nav-link" href="#matters" onClick={handleEvent}>Why this matters</a>
                        <a className="nav-link" href="#help-out" onClick={handleEvent}>How can I help</a>
                        <a className="nav-link" href="#engagement-events" onClick={handleEvent}>Events</a>
                        <a className="nav-link" href="#kaysville-council" onClick={handleEvent}>Engage with City Council</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;