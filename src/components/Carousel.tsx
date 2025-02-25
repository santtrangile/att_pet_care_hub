import React, { useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ICarousel {
    images: string[];
}

const MuiCustomCarousel = ({ images }: ICarousel) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: 800,
                height: 400,
                mx: "auto",
                overflow: "hidden",
            }}
        >
            {images.map((src, index) => (
                <Card
                    key={index}
                    sx={{ left: `${(index - currentIndex) * 100}%` }}
                >
                    <CardMedia component="img" image={src} alt={`slide-${index}`} />
                </Card>
            ))}

            <IconButton
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="left-button"
            >
                <FaArrowLeft />
            </IconButton>
            <IconButton
                onClick={nextSlide}
                disabled={currentIndex === (images?.length - 1)}
                className="right-button"
            >
                <FaArrowRight />
            </IconButton>
        </Box>
    );
};

export default MuiCustomCarousel;
