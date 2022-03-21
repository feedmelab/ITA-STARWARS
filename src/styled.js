import { createGlobalStyle } from 'styled-components';
const font = "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap";
const getHeightDoc = () => {
  const { scrollHeight: height } = document.body;
  return {
    height
  };
}
console.log(getHeightDoc().height)
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: black;
        &::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; 
            height:${getHeightDoc().height}px;
            background-image: url(bg_stars2.jpg);
            background-size: contain;
            opacity: 0.1;
        }
	}
    @font-face {
        font-family: myFont;
        src: url(${font});
    }
`;