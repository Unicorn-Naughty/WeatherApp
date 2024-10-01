import SearchForm from "./components/SearchForm";
import { Title, StyledLink } from "./styles/components";
import { routes, routesForBreadCrumbs } from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const views = useRoutes(routes);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header style={{ marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Title>Weather app</Title>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {routesForBreadCrumbs.map((route, i) => {
              return (
                <StyledLink key={i} to={`${route.path}`}>
                  {route.title}
                </StyledLink>
              );
            })}
          </nav>
          <SearchForm />
        </div>
      </header>
      <main style={{ padding: "0 25px", flexGrow: "1", marginBottom: "0px" }}>
        <div
          style={{
            height: "278px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "90px",
          }}
        >
          <div>{views}</div>
          <div
            style={{ color: "white", width: "500px", backgroundColor: "black" }}
          >
            MAP
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              backgroundColor: "black",
              width: "600px",
              height: "250px",
            }}
          >
            X
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: "600px",
              height: "250px",
            }}
          >
            X
          </div>
          <div
            style={{
              backgroundColor: "black",
              width: "300px",
              height: "250px",
            }}
          >
            X
          </div>
        </div>
      </main>
      <footer style={{ backgroundColor: "black", padding: "10px" }}>
        <div
          style={{ color: "white", justifyContent: "center", display: "flex" }}
        >
          FOOTER
        </div>
      </footer>
    </div>
  );
}

export default App;
