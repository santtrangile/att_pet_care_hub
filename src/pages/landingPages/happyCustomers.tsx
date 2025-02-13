const HappyCustomer = () => {
    const customers = [
        {image: "/happyCustomers/happyCustomer1.jpg"},
        {image: "/happyCustomers/happyCustomer2.jpg"},
        {image: "/happyCustomers/happyCustomer3.jpg"},
        {image: "/happyCustomers/happyCustomer4.jpg"},
        {image: "/happyCustomers/happyCustomer5.jpg"}
    ]
    return (
        <div className="customer-warpper">
            <h1>Our Happy Customers</h1>
            <div className="customer-image-wrapper">
                {customers?.map((item, index) => {
                    return (
                        <img key={index} src={item.image} alt="Happy Customer"/>
                    )
                })}
            </div>
        </div>
    )
}

export default HappyCustomer;