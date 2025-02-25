import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../utils/clinicData";
import MuiCustomCarousel from "../components/Carousel";
import { Rating } from "@mui/material";
import Button from "../components/Button";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const { productId } = useParams();

  useEffect(() => {
    const product = productData.find((item) => productId === item?.itemId);
    setProductDetail(product);
    // eslint-disable-next-line
  }, [])

  const discountedPrice = (price: number, discountPrice: number) => {
    return price - discountPrice;
  }

  return (
    <div className='product-detail-wrapper'>
      <div className='product-top-wrapper'>
        <div className='product-image'>
          {productDetail?.imageUrls.length > 0 ?
            <>
              <MuiCustomCarousel images={productDetail?.imageUrls} />
            </> :
            <img alt={"Product"} />
          }
        </div>
        <div className='product-content'>
          <h1>{productDetail?.itemName}</h1>
          <Rating value={productDetail?.averageRating || 0} readOnly name="half-rating-read" precision={0.5} />
          <div className="price">
            Starts at ₹{discountedPrice(productDetail?.price?.regular, productDetail?.price?.discounted)}
            <span className="original-price">₹{productDetail?.price?.regular}</span>
          </div>
          <p className="brand">Product By: {productDetail?.brand}</p>
          <p className="description">{productDetail?.description}</p>
          <div className="add-quantity">
            <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>-</button>{quantity}<button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <Button label="Add to cart" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;