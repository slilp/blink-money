import styled from "styled-components";

const InputField = styled.input`
  min-width: 100%;
  border-radius: 15px;
  text-indent: 3.5%;
  padding: 7.5px;
  border: solid 1.5px #d3d3d3;
  backdrop-filter: blur(5px);
  transition: 0.3s;

  &:focus {
    box-shadow: 0 0 5pt 2pt #e9e8e8;
    outline-width: 0px;
  }

  &:hover {
    box-shadow: 0 0 5pt 0.5pt #e9e8e8;
  }
`;

export default InputField;
