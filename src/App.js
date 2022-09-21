/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import editing from './images/advanced-editing_graphic.png';
import star from './images/astrerisck.svg';
import blob from './images/blob.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import logoamazon from './images/logo_amazon.png';
import logocornell from './images/logo_cornell.png';
import logoduke from './images/logo_duke.png';
import logofacebook from './images/logo_facebook.png';
import logogoogle from './images/logo_google.png';
import logoharvard from './images/logo_harvard.png';
import logomicrosoft from './images/logo_microsoft.png';
import logomit from './images/logo_mit.png';
import logooxford from './images/logo_oxford.png';
import logopaypal from './images/logo_paypal.png';
import logoyale from './images/logo_yale.png';
import readingtime from './images/powered-notes_graphic.png';
import summarize from './images/summarize_graphic.png';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: transparent;
  position: fixed;
  z-index: 3;
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
  padding-top: 200px;
  padding-bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const specialImageStyles = css`
  position: absolute;
  z-index: -1;
  width: 110em;
  left: auto;
  top: -60%;
  right: -50%;
  bottom: auto;
  max-width: none;
  overflow: hidden;
`;
const introImgStyles = css`
  width: 30%;
  margin-left: 50px;
  margin-bottom: 80px;
  margin-right: 120px;
`;

const titleSectionStyles = css`
  display: flex;
  flex-direction: column;
  padding: 20px 50px 100px 170px;
  gap: 20px;

  a {
    padding: 14px 30px;
    border-radius: 0.28em;
    background-color: #8a6cf1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    color: #fff;
    text-decoration: none;
    font-size: 14.4px;
    width: 190px;
    text-align: center;

    &:hover {
      background-color: #6145c0;
    }
  }
`;

const h1Styles = css`
  display: inline;
  font-family: 'Libre Baskerville', sans-serif;
  font-size: 4.17em;
  line-height: 1.19;
  font-weight: 700;
  margin: 0;
`;

const h2Styles = css`
  color: #56647a;
  font-size: 1.39em;
  line-height: 1.5;
  font-weight: 400;
`;

const orgaSectionStyles = css`
  position: relative;
  padding-top: 5.42em;
  padding-bottom: 2em;
  background-color: #f6f9fc;
  display: block;
`;

const orgaSectionHeadingStyles = css`
  max-width: 86.67em;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 114.44em;
  padding-right: 1.67em;
  padding-left: 1.67em;
  margin-bottom: 25px;
  color: #b1b4b7;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
`;

const carouselWrapperStyles = css`
  display: flex;
  flex-direction: row;
  margin-bottom: 4.86em;
  margin-top: 4.86em;
  color: #b1b4b7;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;

  img {
    width: 6em;
    margin-right: 3.33em;
    flex: 0 0 auto;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    animation: animate 25s backwards infinite;
    transform-style: preserve-3d;
    will-change: transform;
  }

  @keyframes animate {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-1100px));
    }
  }
`;

const bigLogoStyles = css`
  max-width: 5em;
`;

const summaryBuilderSectionStyles = css`
  display: block;
  padding-top: 140px;
  padding-bottom: 100px;
  background-color: white;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const readingTimeSectionStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: white;
  text-align: center;
  align-items: center;
  column-gap: 100px;
  margin: auto 20% auto 20%;
`;

const readingTimeSectionTextStyles = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 20px;
`;

const readingTimeSectionImageStyles = css`
  img {
    width: 100%;
  }
`;

const purpleTextStyles = css`
  color: #8a6cf1;
  font-weight: 600;
  font-size: 0.97em;
  line-height: 1.43;
`;

const explanationHeadingStyles = css`
  font-family: ivypresto-display, sans-serif;
  font-size: 3em;
  line-height: 1.15;
  font-weight: 700;
  color: #202020;
`;

const explanationSubHeadingStyles = css`
  font-size: 1.3em;
  line-height: 1.7;
  font-weight: 400;
  color: #56647a;
`;

const explanationSubHeadingBulletStyles = css`
  font-size: 1.3em;
  line-height: 2.2;
  font-weight: 400;
  color: #56647a;
`;

const bottomSectionStyles = css`
  background-color: #a88eff;
  color: white;
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 130px;

  a {
    padding: 14px 30px;
    border-radius: 0.28em;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    font-size: 14.4px;
    font-weight: bold;
    width: 190px;
    text-align: center;
    background-color: #fff;
    color: #1a1823;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const bottomSectionHeadingStyles = css`
  font-family: ivypresto-display, sans-serif;
  font-size: 3em;
  line-height: 1.15;
  font-weight: 700;
  color: white;
  max-width: 20%;
`;

const bottomSectionContentStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 1.3em;
  line-height: 1.7;
  font-weight: 400;
  color: white;
  text-align: center;
  max-width: 30%;
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
        <div css={titleSectionStyles}>
          <h1 css={h1Styles}>
            Get the gist. Learn
            <br />
            10x faster with
            <br />
            <Logo />
          </h1>
          <h2 css={h2Styles}>
            <strong>Capture</strong> key ideas with Upword's AI.
            <br />
            <strong>Personalize </strong>
            your summaries.
            <br />
            <strong>Grow and manage</strong> your knowledge.
          </h2>
          <a href="abc">Start Free Trial</a>
        </div>
        <div css={specialImageStyles}>
          <img src={blob} alt="" />
        </div>
        <img src={summarize} alt="Summarize" css={introImgStyles} />
      </section>

      <main>
        <section css={orgaSectionStyles}>
          <div css={orgaSectionHeadingStyles}>
            LEARNING JUST GOT BETTER FOR STUDENTS AND PROFESSIONALS FROM TOP
            ORGANIZATIONS
          </div>
          <div css={carouselWrapperStyles}>
            <img src={logomicrosoft} alt="Microsoft" />
            <img src={logopaypal} alt="Paypal" />
            <img src={logoamazon} alt="Paypal" />
            <img src={logocornell} alt="Paypal" css={bigLogoStyles} />
            <img src={logoduke} alt="Paypal" />
            <img src={logofacebook} alt="Paypal" />
            <img src={logogoogle} alt="Paypal" />
            <img src={logoharvard} alt="Paypal" />
            <img src={logomit} alt="Paypal" />
            <img src={logooxford} alt="Paypal" />
            <img src={logoyale} alt="Paypal" css={bigLogoStyles} />
          </div>
        </section>

        <section css={summaryBuilderSectionStyles}>
          <Logo />
          <h1 css={h1Styles}>summary builder</h1>
          <h2 css={h2Styles}>
            Combine our powerful AI tools with your own notes to create faster,
            <br />
            more efficient summaries – you can read or listen to
          </h2>
        </section>

        <section css={readingTimeSectionStyles}>
          <div css={readingTimeSectionTextStyles}>
            <div css={purpleTextStyles}>AI, TAKE THE WHEEL</div>
            <div css={explanationHeadingStyles}>
              Cut your reading time
              <br /> by up to 85%
            </div>
            <div css={explanationSubHeadingStyles}>
              Our AI scans the text for you and captures only <br /> what's
              actually important.
            </div>
          </div>
          <div css={readingTimeSectionImageStyles}>
            <img src={readingtime} alt="Reading time" />
          </div>
        </section>

        <section css={readingTimeSectionStyles}>
          <div css={readingTimeSectionImageStyles}>
            <img src={editing} alt="Editing" />
          </div>
          <div css={readingTimeSectionTextStyles}>
            <div css={purpleTextStyles}>ADVANCED EDITING</div>
            <div css={explanationHeadingStyles}>
              Add your own notes
              <br /> to fit your style
            </div>
            <div>
              <div css={explanationSubHeadingBulletStyles}>
                <img src={star} alt="star" />
                <strong> Highlight</strong> and capture your info
              </div>
              <div css={explanationSubHeadingBulletStyles}>
                <img src={star} alt="star" />
                <strong> Comment</strong> and add your thoughts
              </div>
              <div css={explanationSubHeadingBulletStyles}>
                <img src={star} alt="star" />
                <strong> Attach</strong> files or URLs
              </div>
              <br />
              <div css={explanationSubHeadingBulletStyles}>
                And just like that - <strong>personalize</strong> your learning
                experience
              </div>
            </div>
          </div>
        </section>

        <section css={readingTimeSectionStyles}>
          <div css={readingTimeSectionTextStyles}>
            <div css={purpleTextStyles}>SOAK IT UP</div>
            <div css={explanationHeadingStyles}>
              Read & <em>listen</em> to your
              <br /> personalized summary
            </div>
            <div css={explanationSubHeadingStyles}>
              Transform your notes into an audio clip with just a<br /> click.
              Create playlists to manage your knowledge.
              <br /> Play it back and learn the way that works for you
            </div>
          </div>
          <div css={readingTimeSectionImageStyles}>
            <img src={summarize} alt="Summarize" />
          </div>
        </section>

        <section css={bottomSectionStyles}>
          <div css={bottomSectionHeadingStyles}>
            Join upword to unlock more time, more content and more knowledge.
          </div>
          <div css={bottomSectionContentStyles}>
            <div>
              Imagine you could magically transform any content into knowledge.
              Knowledge you can now apply upon need, knowledge you can share,
              collaborate or teach others. Imagine that your knowledge is
              connected, organized and functions like a second brain. Welcome to
              Upword.
            </div>
            <a href="abc">Sign up today</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
