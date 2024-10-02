import {
  ErroLinkBack,
  ErrorDiv,
  ErrorMainComponent,
} from "../styles/errorpage";


export default function Error404() {
  return (
    <ErrorMainComponent>
      <ErrorDiv>
        <p>Ooooooooops we've got Error 404.......</p>
      </ErrorDiv>
      <div>
        <ErroLinkBack to={"/"}>Go back</ErroLinkBack>
      </div>
    </ErrorMainComponent>
  );
}
