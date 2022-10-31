import React from 'react';
import howlsMovingCastleMP4 from '../assets/videos/howls-moving-castle.mp4';
import spiritedAwayMP4 from '../assets/videos/spirited-away.mp4';

const Home = () => (
  <>
    <article id="home-article-one" className="home-article home-article-one">
      <div className="home-article-one__container">
        <div className="home-scroll-down-btn">
          <button
            className="scroll-down-btn"
            aria-label="Scroll Down"
            type="button"
            onClick={() => {
              document.getElementById('home-article-two').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            }}
          />
        </div>
      </div>
    </article>

    <article id="home-article-two" className="home-article home-article-two">
      <video autoPlay loop muted playsInline>
        <source src={howlsMovingCastleMP4} type="video/mp4" />
      </video>
      <div className="home-scroll-down-btn">
        <button
          className="scroll-down-btn"
          aria-label="Scroll Down"
          type="button"
          onClick={() => {
            document.getElementById('home-article-three').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          }}
        />
      </div>
    </article>

    <article id="home-article-three" className="home-article home-article-three">
      <div className="home-scroll-down-btn">
        <button
          className="scroll-down-btn"
          aria-label="Scroll Down"
          type="button"
          onClick={() => {
            document.getElementById('home-article-four').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          }}
        />
      </div>
    </article>

    <article id="home-article-four" className="home-article home-article-four">
      <video autoPlay loop muted playsInline>
        <source src={spiritedAwayMP4} type="video/mp4" />
      </video>
      <div className="home-scroll-down-btn">
        <button
          className="scroll-down-btn"
          aria-label="Scroll Down"
          type="button"
          onClick={() => {
            document.getElementById('home-article-five').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          }}
        />
      </div>
    </article>

    <article id="home-article-five" className="home-article home-article-five" />
  </>
);

export default Home;
