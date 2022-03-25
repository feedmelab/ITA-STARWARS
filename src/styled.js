import { createGlobalStyle } from 'styled-components';

const font = "https://fonts.googleapis.com/css2?family=Work+Sans&display=swap";
// const getHeightDoc = () => {
//   const { scrollHeight: height } = document.body;
//   return {
//     height
//   };
// }

export const GlobalStyle = createGlobalStyle`
    
    p {
        font-family: "Work Sans", sans-serif;
    }

	body {
        background: linear-gradient(rgba(120,0,0,.9), rgba(0,0,0,.5)), url("/bg_stars2.jpg");
        background-attachment: fixed;
        font-family: "Work Sans", sans-serif;
        
        
	}
    @font-face {
        font-family: "Work Sans", sans-serif;
        src: url(${font});
    }
`;