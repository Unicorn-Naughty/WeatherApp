import { GlobalStyles } from "./styles/global";
import Header from "./components/topLevel/Header";

import Footer from "./components/topLevel/Footer";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  const views = useRoutes(routes);
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{views}</main>
      <Footer />
    </>
  );
}

export default App;
