import styled from "styled-components";
import { ColorType, colorTheme } from "../../styles/theme";

interface CardProps {
  color?: ColorType;
  background?: ColorType;
}

const Card = styled.div<CardProps>`
  border-radius: 15px;
  border: solid 1.5px #d3d3d3;
  padding: 1rem;
  background-color: ${({ background }) =>
    background ? colorTheme(background) : "#ffffff"};
  color: ${({ color }) => (color ? colorTheme(color) : "#000000")};
`;

export default Card;
