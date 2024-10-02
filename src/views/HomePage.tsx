import { YouTubeEmbed } from "../components/optional/YouTubeEmbed";
import { Title, Text } from "../styles/components";
import {
  AddBlock,
  AddBlockElement,
  ContentDiv,
  InfoBlock,
  MainComponent,
  RightSideDiv,
} from "../styles/topLevelComponents";
import WeatherData from "../components/topLevel/WeatherData";

export default function HomePage() {
  return (
    <MainComponent>
      <div>
        <ContentDiv>
          <WeatherData />
        </ContentDiv>
        <YouTubeEmbed />
      </div>
      <RightSideDiv>
        <InfoBlock>
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
        </InfoBlock>
        <AddBlock>
          <AddBlockElement> Add Block</AddBlockElement>
          <AddBlockElement> Add Block</AddBlockElement>
          <AddBlockElement> Add Block</AddBlockElement>
        </AddBlock>
      </RightSideDiv>
    </MainComponent>
  );
}
