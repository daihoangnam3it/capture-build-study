import {createGlobalStyle} from 'styled-components'
const GlobalStyle=createGlobalStyle`
:root{
  --color-body:#1b1b1b;
  --border-color-button:#23d997;
  --color-button:#fff;
  --color-p:#ccc;
  --color-dreams:#23d997;
  --color-line:#fff;
  --color-nav:#282828;
  --color-nav-link:#fff;
}
  *{
    margin:0;
    padding:0;
    box-sizing:border-box
  }
  html{
    font-size:62.5%;
  }
  body{
    background:var(--color-body);
  }
  button{
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid var(--border-color-button);
    background-color:transparent;
    color:var(--color-button);
    transition:all .25s linear;
    &:hover{
      background-color:var(--border-color-button);
    }
  }
  h2{
    font-weight:lighter;
    font-size:5rem;
  }
  h3{
    color:var(--color-button);
  }
  h4{
    font-size:2rem;
    font-weight:bold;
  }
  a{
    font-size:1.1rem;
  }
  span{
    color:var(--color-dreams);
    font-weight:bold;
  }
  p{
    padding:3rem 0;
    color:var(--color-p);
    font-size:1.4rem;
    line-height:150%;
  }

`

export default GlobalStyle;