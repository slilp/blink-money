import styled from "styled-components";
import { ColorType, colorTheme } from "../../styles/theme";

interface ButtonProps {
  color?: ColorType;
}

const Button = styled.button<ButtonProps>`
  min-width: 100%;
  border-radius: 15px;
  text-align: center;
  border: solid 1.5px #d3d3d3;
  padding: 7.5px;
  color: #ffffff;
  background-color: ${({ color }) => colorTheme(color)};
  transition: 0.2s;
  letter-spacing: 2px;
  &:hover {
    opacity: 0.85;
  }
`;

export default Button;
