import { createGlobalStyle } from 'styled-components';
const font = "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap";
// const getHeightDoc = () => {
//   const { scrollHeight: height } = document.body;
//   return {
//     height
//   };
// }

export const GlobalStyle = createGlobalStyle`
	body {
        background: linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)), url("bg_stars2.jpg");
        background-attachment: fixed;
	}
    @font-face {
        font-family: Roboto;
        src: url(${font});
    }
`;