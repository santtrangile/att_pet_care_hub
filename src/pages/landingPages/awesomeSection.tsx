const partnerData  = [
    {
        img: "/awesomePartners/partner1.jpeg"
    },
    {
        img: "/awesomePartners/partner2.jpeg"
    },
    {
        img: "/awesomePartners/partner3.jpeg"
    },
    {
        img: "/awesomePartners/partner4.jpeg"
    },
    {
        img: "/awesomePartners/partner5.jpeg"
    },
    {
        img: "/awesomePartners/partner6.jpeg"
    },
]
const AwesomePartners = () => {
    return (
        <div className="awesome-partner-section">
            <h1>Our Awesome Partners</h1>
            <div className="awesome-partner-content">
                {partnerData?.map((item, index) => {
                    return (
                        <div className="partner" key={index}>
                            <img src={item?.img} alt={`Partner ${index}`}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AwesomePartners;