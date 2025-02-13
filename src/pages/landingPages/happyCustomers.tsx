const customers = [
    {image: "/happyCustomers/customer1.jpeg"},
    {image: "/happyCustomers/customer2.jpeg"},
    {image: "/happyCustomers/customer3.jpeg"},
    {image: "/happyCustomers/customer4.jpeg"}
]

const HappyCustomer = () => {
    return (
        <div className="customer-wrapper">
            <h1>Our Happy Customers</h1>
            <div className="customer-image-wrapper">
                {customers?.map((item, index) => {
                    return (
                        <img key={index} src={item.image} alt="Happy Customer"/>
                    )
                })}
            </div>
        </div>
    );
};

export default HappyCustomer;
