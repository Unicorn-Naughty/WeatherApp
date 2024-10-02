import { Title, Text } from "../../styles/components";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";
import {
  AddBlock,
  AddBlockElement,
  ContentDiv,
  InfoBlock,
  MainComponent,
  RightSideDiv,
} from "../../styles/topLevelComponents";
import { YouTubeEmbed } from "../optional/YouTubeEmbed";
export default function Main() {
  const views = useRoutes(routes);
  return (
    <MainComponent>
      <div>
        <ContentDiv>{views}</ContentDiv>
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
