import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import GlobaleStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobaleStyles />
        <Header>
          <Container>
            <h1>Hello World</h1>
          </Container>
        </Header>
      </>
    </ThemeProvider>
  );
}

export default App;
