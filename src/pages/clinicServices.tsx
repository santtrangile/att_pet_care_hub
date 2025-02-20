import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clinics, productData } from "../utils/clinicData";
import { FiArrowLeft } from "react-icons/fi";
import { RiDiscountPercentFill } from "react-icons/ri";
import Button from "../components/Button";
import Product from "./landingPages/product";

const ClinicServices = () => {
    const { clinicId } = useParams();
    const navigate = useNavigate();
    const [clinic, setClinic] = useState<any>(null);

    useEffect(() => {
        const clinicService = clinics.find((item) => item.id === Number(clinicId));
        setClinic({...clinicService, products: productData});

        // eslint-disable-next-line
    }, [])

    const checkOriginalPrice = (originalAmount: number, discountAmount: number) => {
        return originalAmount - discountAmount;
    }

    return (
        <>
            {clinic ?
                <div className="service-container">
                    <div className="service-wrapper">
                        <div className="clinic-detail">
                            <FiArrowLeft onClick={() => navigate('/')} />
                            <span>{clinic?.name}, {clinic?.location}</span>
                        </div>
                        <div className="header-title">Clinic Services</div>
                        {clinic.services?.length !== 0 ? <div className="clinic-services">
                            {clinic?.services?.map((item: any, index: number) => {
                                return (
                                    <div className="clinic-service"  key={index}>
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
                                            <Button label="Book Now" onClick={() => navigate(`/book-slot/${clinicId}/${item?.id}`)} />
                                        </div>
                                    </div>
                                )
                            })}
                            </div> : <h1>No Service available</h1>
                        }
                        <Product clinic={clinic}/>
                    </div>
                </div>
                :
                <h1 className="service-error">No Clinic is available</h1>
            }
        </>
    )
}

export default ClinicServices;