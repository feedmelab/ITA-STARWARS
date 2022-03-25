
import { FilmBlock, FilmsBlock } from "./Films.styles";

const Films = ({dadesFilm}) => (
  <FilmsBlock>
    <FilmBlock>
      <img src={dadesFilm.image}  alt=""/>
      <h4>{dadesFilm.title}</h4>
    </FilmBlock>
  </FilmsBlock>
);


export default Films;
