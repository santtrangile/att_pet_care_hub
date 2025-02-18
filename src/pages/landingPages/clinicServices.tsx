import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clinics } from "../../utils/clinicData";
import { FiArrowLeft } from "react-icons/fi";
import { RiDiscountPercentFill } from "react-icons/ri";
import Button from "../../components/Button";

const ClinicServices = () => {
    const {clinicId} = useParams();
    const navigate = useNavigate();
    const [clinic, setClinic] = useState<any>(null);

    useEffect(() => {
        const clinicService = clinics.find((item) => item.id === Number(clinicId));
        setClinic(clinicService);
        // eslint-disable-next-line
    },[])

    const checkOriginalPrice = (originalAmount: number, discountAmount: number) => {
        return originalAmount - discountAmount;
    }

    return (
        <div className="service-container">
            {clinic ?
                <div className="service-wrapper">
                    <div className="clinic-detail">
                        <FiArrowLeft onClick={() => navigate('/')}/>
                        <span>{clinic?.name}, {clinic?.location}</span>
                    </div>
                    <div className="clinic-services">
                        {clinic?.services?.map((item: any) => {
                            return (
                                <div className="clinic-service">
                                    <div className="clinic-content">
                                        <span className="service-title">{item.title}</span>
                                        <p>{item?.description}</p>
                                        <div className="price">
                                            Starts at ₹{checkOriginalPrice(item.originalPrice, item.discountPrice)}  
                                            <span className="original-price">₹{item.originalPrice}</span>
                                        </div>
                                        <span className="discount-template"><RiDiscountPercentFill />{item?.discount} Off | {item?.discountTitle}</span>
                                    </div>
                                    <div className="service-image">
                                        <img src={item.imageUrl} alt={item.title} />
                                        <Button label="Book Now" onClick={() => navigate(`/book-slot/${clinicId}/${item?.id}`)}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            :
                <div className="service-wrapper">
                    <h1>No Services is available</h1>
                </div>
            }
        </div>
    )
}

export default ClinicServices;