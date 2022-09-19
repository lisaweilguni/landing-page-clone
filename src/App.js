/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './images/logo.svg';

const mainStyles = css`
  background-color: blue;
`;

const headerStyles = css`
  display: flex;
`;

function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <Logo />
        <a href="abc">Log in</a>
        <a href="abc">Start free trial</a>
        <a href="abc">Add to Chrome - it's free</a>
      </header>
    </div>
  );
}

export default App;
