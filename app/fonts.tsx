import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      /* TODO: have I got the unicode range correct */
      @font-face {
        font-family: 'Novecentosanswide-Bold';
        font-style: bold;
        src: url('./Novecentosanswide-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Montserrat-Light';
        src: url('./Montserrat-Light.ttf') format('truetype');
      }
      `}
	/>
);

export default Fonts;
