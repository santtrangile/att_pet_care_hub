import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const ContactUsSection = () => {
    const [inputData, setInputData] = useState<{[key: string]: string} | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData({...inputData, [e?.target.name]: e.target.value});
    }

    return (
        <div className="contact-use-section">
            <h1>Get In Touch!</h1>
            <div className="content-wrapper">
                <div className="left-content-wrapper">
                    <h2>Contact Us</h2>
                    <div className="item">
                        Phone: 1-800-555-0199
                    </div>
                    <div className="item">
                        Email: support@vetapp.com
                    </div>
                    <div className="item">
                        Address: Greater Noida India
                    </div>
                    <div className="item">
                        Working Hours: Mon-Fri: 9am - 6pm
                    </div>
                </div>
                <div className="right-content-wrapper">
                    <InputField name="name" placeholder="Name" onChange={onChange}/>
                    <InputField name="email" placeholder="Email" type="email" onChange={onChange}/>
                    <textarea className="input-field" name="message" placeholder="Message" onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}/>
                    <Button label={"send It!"} onClick={() => console.log(inputData)}/>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection;