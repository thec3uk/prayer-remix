import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      /* TODO: have I got the unicode range correct */
      @font-face {
        font-family: 'Novecentosanswide';
        font-weight: bold;
        src: url('./Novecentosanswide-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Novecentosanswide';
        font-weight: normal;
        src: url('./Novecentosanswide-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        src: url('./Montserrat-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Montserrat';
        font-weight: bold;
        src: url('./Montserrat-Bold.ttf') format('truetype');
      }
      `}
	/>
);

export default Fonts;
