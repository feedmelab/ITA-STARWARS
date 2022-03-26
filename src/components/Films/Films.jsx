import { FilmBlock, FilmsBlock } from "./Films.styles";

const Films = ({ dadesFilm }) => (
	<FilmsBlock>
		<FilmBlock>
			<img src={dadesFilm.image} alt="" />
			<h4>{dadesFilm.title}</h4>
			<h5>{dadesFilm.director}</h5>
			<h6>{dadesFilm.release_date}</h6>
		</FilmBlock>
	</FilmsBlock>
);

export default Films;
