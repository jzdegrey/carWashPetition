const Header = () => {
    return (
        <header className="bg-white bg-gradient align-items-center text-black container-fluid mt-3 mb-3 p-0">
            <div className="container">
                <img
                    src="./logo64.png"
                    alt="Site logo"
                    height={64}
                    width={64}
                    className="img-fluid me-3 rounded float-start"
                />
                <h2
                    className="mb-0 pb-0"
                    style={{
                        fontFamily: "'Lemon'",
                        fontWeight: 1000,
                        color: "darkblue"
                    }}
                >CAR WASH</h2>
                <h3
                    className="text-muted mt-0 pt-0"
                    style={{
                        fontFamily: "'Lalezar'",
                        color: "lightblue"
                    }}
                >petition</h3>
            </div>
            <div
                className="text-center text-white"
                style={{
                    backgroundImage: "url(" + "./flag_og.jpg" + ")",
                    backgroundPosition: "40% 73%",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <h1
                    style={{
                        paddingTop: "7%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        fontFamily: "'Bevan'",
                        textShadow: "4px 4px black"
                    }}>Support Kaysville Residents First</h1>
                <h3
                    style={{
                        marginTop: "25px",
                        paddingBottom: "11%",
                        paddingLeft: "13px",
                        paddingRight: "13px",
                        fontFamily: "'Lalezar'",
                        textShadow: "3px 3px black"
                }}>Demand Kaysville City Council and Mister Car Wash Respect Historic Neighborhood</h3>
            </div>
        </header>
    )
}

export default Header;