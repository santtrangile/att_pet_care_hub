const MeetUs = () => {
    const meetUsData = [
        {
            image: '/meetUs/meetUs1.jpeg',
            name: "Luna",
            role: "Chief Pet Officer"
        }, {
            image: '/meetUs/meetUs2.jpeg',
            name: "Max",
            role: "Tech Wizard"
        }, {
            image: '/meetUs/meetUs3.jpeg',
            name: "Bella",
            role: "Community Manager"
        }, {
            image: '/meetUs/meetUs4.jpeg',
            name: "Charlie",
            role: "E-commerce Guru"
        }
    ]
    return (
        <div className="meet-us-wrapper">
            <h1>Meet Us</h1>
            <div className="meet-us-content">
                {meetUsData?.map((item, index)=> {
                    return (
                        <div className="meet-us-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <strong>{item.name}</strong>
                            <p>{item.role}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
} 

export default MeetUs;