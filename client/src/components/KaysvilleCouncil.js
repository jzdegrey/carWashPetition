const KaysvilleCouncil = () => {
    let cityCouncilMembers = [
        {
            id: 0,
            name: "Tamara Tran",
            title: "Mayor",
            email: "Mayor.tran@kaysville.gov",
            phone: "8014992379",
            phoneLocalized: "(801)-499-2379"
        },
        {
            id: 1,
            name: "Mike Blackham",
            title: "Council Member",
            email: "councilmember.mblackham@kaysville.gov",
            phone: "8019401535",
            phoneLocalized: "(801)-940-1535"
        },
        {
            id: 2,
            name: "Abbigayle Hunt",
            title: "Council Member",
            email: "councilmember.ahunt@kaysville.gov",
            phone: "8017038931",
            phoneLocalized: "(801)-703-8931"
        },
        {
            id: 3,
            name: "Nate Jackson",
            title: "Council Member",
            email: "councilmember.njackson@kaysville.gov",
            phone: "8018378012",
            phoneLocalized: "(801)-837-8012"
        },
        {
            id: 4,
            name: "Perry Oaks",
            title: "Council Member",
            email: "councilmember.poaks@kaysville.gov",
            phone: "3853100766",
            phoneLocalized: "(385)-310-0766"
        },
        {
            id: 5,
            name: "John Swan Adams",
            title: "Council Member",
            email: "councilmember.jadams@kaysville.gov",
            phone: "8017585053",
            phoneLocalized: "(801)-758-5053"
        }
    ];

    return (
        <div id="KaysvilleCouncil" className="mt-5">
            <h1>Engage with Kaysville City Council</h1>
            <hr/>
            <p>Let the city know your concerns! Reach out to members of city council via their details below.</p>
            <div className="card">
                <div className="card-header bg-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img"
                         aria-label="Warning:">
                        <path
                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Important
                </div>
                <div className="card-body">
                    <p>It is important to remember our goal is to work with City Council on a solution
                        and <strong><em>NEVER</em></strong> harass or attack. They exist to listen and consider our
                        concerns and grievances. Attempting to harm in any way
                        does <strong><em>NOT</em></strong> benefit
                        our cause and instead harms everyone involved.</p>
                    Please use the following points to effectively engage in civil discourse:
                    <ul>
                        <li>Introduce yourself and your relationship</li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Make sure to let them know who you are, how long you've lived in
                        Kaysville, or other relationship if not a citizen.
                        <li>Use "I" statements</li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Use statements like <span
                        className="text-success">"I am concerned..."</span> or <span
                        className="text-success">"I feel..."</span> instead of <span className="text-danger">"You are responsible for..."</span> or <span
                        className="text-danger">"You need to fix..."</span>
                        <li>Be detailed, but not too detailed</li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Express why you are concerned, but don't give them a novel
                        to read. Providing too many details drowns out your main points
                        <li>Include a call to action</li>
                        &nbsp;&nbsp;&nbsp;&nbsp;Include what you want City Council to do. Call on them to hold Mister
                        Car Wash accountable and require them to make required changes.
                    </ul>
                </div>
            </div>

            <h4 className="mt-4">City Council Members</h4>
            <div className="d-flex flex-wrap align-content-around align-items-center">
                {cityCouncilMembers.map((member, _) => (
                    <div
                        key={member.id}
                        className="card me-3 mt-2"
                        style={{
                            width: "18rem"
                        }}
                    >
                        <div
                            className="modal fade"
                            id={`sendEmail${member.id}`}
                            tabIndex="-1"
                            aria-labelledby="sendEmail"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={`sendEmailLabel${member.id}`}>Email Draft</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p style={{fontSize: "13px"}} className="text-muted">Copy the following
                                            template, then click on "Send Email" to open your email
                                            client. Paste into the body of your email, make the necessary changes, add
                                            your subject and hit send!</p>
                                        <p className="user-select-all">
                                            Dear {member.title} {member.name},
                                            <br/><br/>
                                            I have been a resident of Kaysville for (HOW LONG), and love this city for
                                            (A REASON). However, I would like to express my frustration and concern
                                            regarding the new Mister Car Wash.
                                            <br/><br/>
                                            I, along with the rest of my community, feel that Mister Car Wash is harming
                                            our city and the neighborhood by being intrusive with their obnoxious light
                                            and noise pollution of which obviously falls out of compliance with local
                                            ordinances. I am greatly concerned how this is negatively impacting way of
                                            life, enjoyment of property, right to community peace and quiet, and
                                            property value.
                                            <br/><br/>
                                            While I am not directly impacted by this, I do sympathize with those that
                                            are and would also like to express how this does indirectly impact me as
                                            well as other citizens. Allowing this kind of intrusion opens the doors for
                                            more business to invade residential and historic areas of Kaysville.
                                            Kaysville has a certain charm and history that all come to visit and enjoy.
                                            Of which is being destroyed by allowing businesses to construct buildings of
                                            this overzealous nature.
                                            <br/><br/>
                                            I call on my local leaders to take action and require Mister Car Wash to
                                            comply with their original promises to the residents of Kaysville City by
                                            complying with local ordinances. By fulfilling their promise to construct an
                                            effective sound wall. To eliminate light pollution by turning off their
                                            intense neon lights and lot lights after dark. and to fix the value
                                            depreciation of adjacent properties by removing the south facing signage
                                            which serves no benefit to either party as the signage ONLY faces residents.
                                            <br/><br/>
                                            Thank you for your time and considerations.
                                            <br/><br/>
                                            Sincerely,
                                            <br/><br/>
                                            (YOUR NAME)
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <a href={`mailto:${member.email}`} className="btn btn-success">
                                            Send Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{member.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{member.title}</h6>
                            <p><strong>Tel:</strong> {member.phoneLocalized}</p>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target={`#sendEmail${member.id}`}
                            >
                                <span className="fa-solid fa-paper-plane"></span> Send Email
                            </button>
                            <br/>
                            <a href={`tel:${member.phone}`} className="btn btn-success mt-3">
                                <span className="fa-solid fa-phone"></span> Call
                            </a>
                        </div>

                        <script>
                            var {`sendEmail${member.id}`} = document.getElementById('{`sendEmail${member.id}`}');
                            var {`sendEmailLabel${member.id}`} = document.getElementById('{`sendEmailLabel${member.id}`}');

                            {`sendEmail${member.id}`}.addEventListener('shown.bs.modal', function () &#123;
                            {`sendEmailLabel${member.id}`}.focus();
                            &#125;);
                        </script>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KaysvilleCouncil;