import { ButtonContainer } from "./Button.styles";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOff?: "on" | "off";
}

export function Button({ onOff = "off", ...props }: ButtonProps) {
  const ligar = onOff === "on";
  return (
    <ButtonContainer start={ligar} {...props}>
      {ligar ? "Parar" : "Iniciar"}
    </ButtonContainer>
  );
}
