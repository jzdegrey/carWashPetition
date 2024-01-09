import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="bg-white bg-gradient align-items-center text-black container-fluid mb-3 p-0">
            <NavBar />
            <div
                className="text-center text-white"
                style={{
                    backgroundImage: "url(" + "./flag_og.jpg" + ")",
                    backgroundPosition: "40% 0%",
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