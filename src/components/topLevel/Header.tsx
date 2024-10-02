import { routesForBreadCrumbs } from "../../routes";
import SearchForm from "../SearchForm";
import { StyledLink, Title } from "../../styles/components";
import {
  HeaderComponent,
  NavbarComponent,
  NavComponent,
} from "../../styles/topLevelComponents";

export default function Header() {
  return (
    <HeaderComponent>
      <NavbarComponent>
        <Title>Weather app</Title>
        <NavComponent>
          {routesForBreadCrumbs.map((route, i) => {
            return (
              <StyledLink key={i} to={`${route.path}`}>
                {route.title}
              </StyledLink>
            );
          })}
        </NavComponent>
        <SearchForm />
      </NavbarComponent>
    </HeaderComponent>
  );
}
