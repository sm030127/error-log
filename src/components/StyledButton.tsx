// src/StyledButton.tsx
import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void; // Add onClick prop here
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "#0C97ED" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background: ${(props) => (props.primary ? "#0099ff" : "darkgray")};
  }
`;

export default StyledButton;
