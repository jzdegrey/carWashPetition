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
                <h2 className="mb-0 pb-0">CAR WASH</h2>
                <h3 className="text-muted mt-0 pt-0">petition</h3>
            </div>
            <div
                className="text-center text-white"
                style={{
                    backgroundImage: "url(" + "./flag_og.jpg" + ")",
                    backgroundPosition: "0% 0%"
                }}
            >
                <h1 style={{paddingTop: "7%"}}>Support Kaysville Residents First</h1>
                <h3 style={{paddingBottom: "13%"}}>Demand Kaysville City Council and Mister Car Wash Respect Historic Neighborhood</h3>
            </div>
        </header>
    )
}

export default Header;