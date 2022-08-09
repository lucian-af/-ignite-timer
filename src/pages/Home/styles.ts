import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.GRAY_1};
  font-size: ${(props) => props.theme.FONT_LG};
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.GRAY_5};

  font-weight: bold;
  font-size: ${(props) => props.theme.FONT_LG};
  padding: 0 0.5rem;
  color: ${(props) => props.theme.GRAY_1};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.GREEN_5};
  }

  &::placeholder {
    color: ${(props) => props.theme.GRAY_5};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: ${(props) => props.theme.FONT_XXL};
  line-height: 8rem;
  color: ${(props) => props.theme.GRAY_1};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme.GRAY_7};
    padding: 2rem 1rem;

    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.GREEN_5};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
  background: ${(props) => props.theme.GREEN_5};
  color: ${(props) => props.theme.GRAY_1};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.GREEN_7};
  }
`;
