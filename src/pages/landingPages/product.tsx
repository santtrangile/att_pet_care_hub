import { useRef } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Product = ({clinic}: any) => {
    const productButtonRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const checkOriginalPrice = (originalAmount: number, discountAmount: number) => {
        return originalAmount - discountAmount;
    }
    return (
        <>
            <div className="header-title">Products</div>
            {clinic.products?.length !== 0 ? <div className="clinic-products">
                {clinic?.products?.map((item: any, index: number) => {
                    return (
                        <div className="clinic-product" key={index} onClick={() => {
                                navigate(`/product/${item?.id}`);
                            }}
                        >
                            <div className="product-content">
                                <span className="product-title">{item.itemName}</span>
                                <p>{item?.description}</p>
                                <div className="price">
                                    Starts at ₹{checkOriginalPrice(item.price?.regular, item.price?.discounted)}
                                    <span className="original-price">₹{item.price?.regular}</span>
                                </div>
                            </div>
                            <div className="product-image">
                                <img src={item.imageUrls[0] && item.imageUrls[0]} alt={item.itemName} />
                                <Button label="Add To Cart" ref={productButtonRef} onClick={(e) => {
                                        e.stopPropagation();
                                        console.log("add to cart");
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
                </div> : <h1>No Product available</h1>
            }
        </>
    )
}

export default Product;