import { FooterComponent, FooterInnerDiv } from "../../styles/topLevelComponents";
import { StyledLink, Text } from "../../styles/components";

export default function Footer() {
  return (
    <FooterComponent>
      <FooterInnerDiv>
        <Text>
          Simple weather app, with open API taken from{" "}
          <StyledLink to="https://openweathermap.org/">
            OPENWEATHERMAP.org
          </StyledLink>
        </Text>
      </FooterInnerDiv>
    </FooterComponent>
  );
}
