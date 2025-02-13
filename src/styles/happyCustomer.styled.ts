import styled, { css } from 'styled-components';

// Define the props interface for ImageContainer
interface ImageContainerProps {
  image?: string;
}

const getImage = (props: ImageContainerProps) => {
    console.log(props?.image,"sdfgv")
  if (props?.image) {
    return css`
      background-image: url(${props.image});
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 200px;  // Adjust the height as necessary
    `;
  }
};

export const ImageContainer = styled.span<ImageContainerProps>`
  ${getImage};
  display: block;  // Make sure the span behaves like a block element
`;
