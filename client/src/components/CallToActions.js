const CallToActions = () => {
    let shareMessage = "Check out this petition I signed at https://carwashpetition.org!";
    let shareLinks = [
        {
            id: 0,
            anchor: `mailto:?body=${shareMessage}`,
            inner: "Email this page",
            icon: "fa-regular fa-paper-plane",
            color: "#5384df"
        },
        {
            id: 1,
            anchor: `sms:?body=${shareMessage}`,
            inner: "Text this page",
            icon: "fa-regular fa-comment",
            color: "#06a820"
        },
        {
            id: 2,
            anchor: "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fcarwashpetition.org%2F&display=popup&ref=plugin&src=share_button",
            inner: "Share on Facebook",
            icon: "fa-brands fa-square-facebook",
            color: "#3B5998"
        },
        {
            id: 3,
            anchor: "https://www.linkedin.com/sharing/share-offsite/?url=carwashpetition.org",
            inner: "Share on LinkedIn",
            icon: "fa-brands fa-linkedin",
            color: "#007bb5"
        },
    ];
    return (
        <div id="help-out" className="section">
            <h1>How can I help?</h1>
            <hr />
            <p>Below are some simple steps you can take.</p>
            <div>
                <h3>Step 1</h3>
                <div className="container">
                    <p>Sign our petition over at <a
                        className="text-danger text-decoration-none"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Sign our Petition at Change.org"
                        href="https://www.change.org/p/demand-kaysville-city-council-and-mister-car-wash-respect-historic-neighborhood"
                    >Change.org</a></p>
                </div>

                <h3>Step 2</h3>
                <div className="container">
                    <p>
                        Share this page with others! Share this page with your friends and family. Let them know about your concerns and encourage them to help us meet our goals!
                    </p>
                    <div
                        className="mb-4"
                        style={{maxWidth: "400px"}}
                    >

                        <h4>Helpful Share Links</h4>
                        <div className="list-group">
                            {shareLinks.map((shareLink, _) => (
                                <a
                                    key={shareLink.id}
                                    href={shareLink.anchor}
                                    target="_blank"
                                    className="list-group-item list-group-item-action"
                                >
                                    <div
                                        className="d-flex w-100 justify-content-start align-items-center"
                                        style={{}}
                                    >
                                        <i
                                            className={"me-3 " + shareLink.icon}
                                            style={{
                                                fontSize: "50px",
                                                color: shareLink.color
                                            }}
                                        ></i>&nbsp;{shareLink.inner}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <h3>Step 3</h3>
                <div className="container">
                    <ul>
                        <li>Message Kaysville City Mayor and Council</li>
                        <li>Voice your concern at one of the City Council meetings</li>
                        <li>Attend one of our other Community Engagement Events listed below</li>
                    </ul>
                </div>
            </div>

            <div id="engagement-events" className="section">
                <h2>Engagement Events</h2>
                <p>There are currently no events planned. However, we encourage everyone to engage at each Kaysville
                City Council meeting you're able to.</p>
                <p>City Council meetings are held roughly every other Thursday at 7:00 p.m. Check out <a href="https://www.kaysville.gov/129/Agendas-Minutes" target="_blank">Kaysville City Agendas</a> for the next
                council meeting.</p>
            </div>
        </div>
    );
}

export default CallToActions;