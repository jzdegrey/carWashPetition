const Carousel = () => {
    return (
        <div className="container mt-5">
            <div id="carouselDifference" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="8000">
                        <img
                            src="./evidence/DSC_1732_RS.jpg"
                            className="d-block w-100"
                            alt="DSC_1732_RS"
                        />
                        <div className="carousel-caption d-block">
                            <h5>Non-compliance</h5>
                            <p>How it currently looks with Mister Car Wash failing to follow local ordinances</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="8000">
                        <img
                            src="./evidence/DSC_1693_RS.jpg"
                            className="d-block w-100"
                            alt="DSC_1693_RS"
                        />
                        <div className="carousel-caption d-block">
                            <h5>In compliance</h5>
                            <p>An easy solution for Mister Car Wash to follow.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselDifference"
                        data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselDifference"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;