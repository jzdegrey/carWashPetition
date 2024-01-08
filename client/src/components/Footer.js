const Footer = () => {
    return (
        <footer className="d-flex flex-column flex-lg-row bg-dark bg-gradient align-items-center p-5 text-light float-none">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 text-center align-items-center pb-5">
                        <div className="text-md-start align-items-md-start">
                            <h3>Share this page with others</h3>
                            <a
                                href="https://www.change.org/p/demand-kaysville-city-council-and-mister-car-wash-respect-historic-neighborhood"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View our change.org page"
                                className="me-2 sm-btn"
                            >
                                <img
                                    src="https://static.change.org/favicons/favicon-48x48.png"
                                    alt="Change.org logo"
                                    height={48}
                                    width={48}
                                    className="img-fluid"
                                />
                            </a>
                            <a
                                className="btn btn-primary sm-btn fa-btn"
                                href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fcarwashpetition.org%2F&display=popup&ref=plugin&src=share_button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Share this page on Facebook"
                            >
                                <span className="fa fa-brands fa-facebook-f"></span>
                            </a>
                            <a
                                className="btn btn-primary sm-btn ln-btn"
                                href="https://www.linkedin.com/sharing/share-offsite/?url=carwashpetition.org"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Share this page on LinkedIn"
                            >
                                <span className="fa fa-brands fa-linkedin-in"></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center align-items-center">
                        <div className="text-md-end align-items-md-end">
                            <img
                                src="https://zachweb.site/apple-icon-180x180.png"
                                alt="John Z. DeGrey Logo"
                                className="img-fluid mb-3 me-md-4"
                                height={170}
                                width={70}
                            />
                            <p className="me-md-4">Copyright {new Date().getFullYear()} - Car Wash Petition - All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
