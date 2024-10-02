import { GlobalStyles } from "./styles/global";
import Header from "./components/topLevel/Header";
import Main from "./components/topLevel/Main";
import Footer from "./components/topLevel/Footer";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
