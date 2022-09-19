/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import blob from './images/blob.svg';
import { ReactComponent as Logo } from './images/logo.svg';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: transparent;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 10px 150px 10px 150px;
`;

const logoStyles = css`
  max-width: 8.33em;
`;

const navStyles = css`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const freeTrialButtonStyles = css`
  padding: 0.69em 1.11em;
  border: 0.18em solid #8a6cf1;
  border-radius: 0.28em;
  background-color: #fff;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: #202020;

  &:hover {
    background-color: #8a6cf1;
    color: #fff;
  }
`;

const chromeButtonStyles = css`
  padding: 0.69em 1.11em;
  border-style: none;
  background-color: #8a6cf1;
  color: #fff;
  border: 0.14em solid #8a6cf1;
  border-radius: 0.28em;
  transition: 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #6145c0;
  }
`;

const logInButtonStyles = css`
  text-decoration: none;
  color: #202020;
  margin-right: 15px;
`;

const introSectionStyles = css`
  width: 100%;
  position: relative;
  overflow: hidden;
  max-width: 140em;
  padding-top: 40em;
  padding-bottom: 9.72em;

  img {
    position: absolute;
    z-index: 0;
    display: block;
    width: 110em;
    left: auto;
    top: -65%;
    right: -20%;
    bottom: auto;
    max-width: none;
  }
`;

function App() {
  return (
    <div>
      <header css={headerStyles}>
        <Logo css={logoStyles} />
        <nav css={navStyles}>
          <a href="abc" css={logInButtonStyles}>
            Log in
          </a>
          <a href="abc" css={freeTrialButtonStyles}>
            Start free trial
          </a>
          <a href="abc" css={chromeButtonStyles}>
            Add to Chrome - it's free
          </a>
        </nav>
      </header>

      <section css={introSectionStyles}>
        <div>
          <img src={blob} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
