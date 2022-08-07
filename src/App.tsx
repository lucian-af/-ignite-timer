import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  const [onOff, setOnOff] = useState<"on" | "off">("off");

  function handleOnOff() {
    setOnOff(onOff === "off" ? "on" : "off");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button onOff={onOff} onClick={handleOnOff} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
