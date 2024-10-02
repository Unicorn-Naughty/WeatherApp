import SearchForm from "./components/SearchForm";
import { Title, StyledLink, Text } from "./styles/components";
import { routes, routesForBreadCrumbs } from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const views = useRoutes(routes);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{
          marginBottom: "30px",
          boxShadow: "0px 12px 3px -9px rgba(34, 60, 80, 0.2)",
        }}
      >
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
      <main
        style={{
          padding: "0 25px",
          flexGrow: "1",
          marginBottom: "1px",
          display: "flex",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        {views}
        <div style={{marginLeft:"30px"}}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <Title>Info Block</Title>
              <div>
                <h2>Something about us:</h2>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  numquam excepturi earum veritatis enim. Quibusdam, tenetur qui
                  error consequatur nesciunt incidunt sed ab nihil velit!
                </Text>
                <h2>Something about weather:</h2>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                  dolor perspiciatis atque, ipsa voluptate cum velit assumenda
                  pariatur expedita ipsum rerum impedit, illo maxime dolorum.
                </Text>
              </div>
            </div>
            <div style={{ alignItems: "flex-end" }}>
              <div
                style={{
                  width: "100px",
                  alignSelf: "flex-end",
                  height: "200px",
                  border: "1px solid #000",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Add Block
              </div>
              <div
                style={{
                  width: "100px",
                  alignSelf: "flex-end",
                  height: "200px",
                  border: "1px solid #000",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Add Block
              </div>
              <div
                style={{
                  width: "100px",
                  alignSelf: "flex-end",
                  height: "200px",
                  border: "1px solid #000",
                }}
              >
                {" "}
                Add Block
              </div>
            </div>
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
