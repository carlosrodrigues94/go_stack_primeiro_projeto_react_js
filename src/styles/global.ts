import { createGlobalStyle } from 'styled-components';

import background_git from '../assets/background_git.svg';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}

body {
  background:#f0f0f5 url(${background_git})no-repeat 70% top;
  -webkit-font-smoothing:antialiased
}

body,input,button {
  font-size:16px ;
  font-family:Roboto, sans-serif;
}

#root {
  max-width:960px;
  margin:0 auto;
  padding:40px 20px;
}

button {
  &:hover{
    cursor:pointer;

  }
}
`;
