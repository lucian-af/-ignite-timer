import styled from "styled-components";

type ButtonContainerProps = {
  start: boolean;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 50%;
  height: 64px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 0.875rem;

  color: ${(props) => props.theme.GRAY_7};

  background-color: ${(props) =>
    props.start ? props.theme.RED_5 : props.theme.GREEN_5};

  :hover {
    background-color: ${(props) =>
      props.start ? props.theme.RED_7 : props.theme.GREEN_7};
  }
`;
