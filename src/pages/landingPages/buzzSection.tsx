const buzzData = [
    {
        customerName: "Emily R.",
        logo: "/buzzSection/buzz1.jpeg",
        comment: "This app saved my pet's life!"
    },
    {
        customerName: "Mark T.",
        logo: "/buzzSection/buzz2.jpeg",
        comment: "The chatbot is a lifesaver!"
    },
    {
        customerName: "Sophie L.",
        logo: "/buzzSection/buzz3.jpeg",
        comment: "E-commerce made buying pet supplies a breeze!"
    },
    {
        customerName: "Jake P.",
        logo: "/buzzSection/buzz4.jpeg",
        comment: "I love the community support!"
    },
    {
        customerName: "Lily S.",
        logo: "/buzzSection/buzz5.jpeg",
        comment: "Vet appointments? Easy peasy!"
    },
    {
        customerName: "Tom H.",
        logo: "/buzzSection/buzz6.jpeg",
        comment: "Best app for pet parents!"
    },
]

const BuzzSection = () => {

    return (
        <div className="buzz-wapper">
            <h1>Buzz</h1>
            <div className="buzz-content">
                {buzzData.map((item, key) => {
                    return (
                        <div key={key} className="buzz-item">
                            <p>{item.customerName}</p>
                            <img src={item.logo} alt={item.customerName} />
                            <p>{item.comment}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BuzzSection;