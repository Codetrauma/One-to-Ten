import './About.css';
import ArrowButton from '../../Forms/ArrowButton/ArrowButton';

const About = () => {

  return (
    <div>
      <h1>The Creators of One-to-Ten</h1>
      <div>
        <h3> Cameron Whiteside </h3>
      </div>
      <div>
        <ArrowButton>
          <a href='https://github.com/CameronWhiteside' target="_blank">Github</a>
        </ArrowButton>
        <div>
          <ArrowButton>
            <a href='https://www.linkedin.com/in/cameronwhiteside/' target="_blank">LinkedIn</a>
          </ArrowButton>
        </div>
      </div>
      <div>
        <h3> Christy Chen </h3>
      </div>
      <div>
        <ArrowButton>
          <a href='https://github.com/christywchen' target="_blank">Github</a>
        </ArrowButton>
        <div>
          <ArrowButton>
            <a href='https://www.linkedin.com/in/christy-chen/' target="_blank">LinkedIn</a>
          </ArrowButton>
        </div>
      </div>
      <div>
        <h3>Aletheia Kim</h3>
        <div>
          <ArrowButton>
            <a href='https://github.com/akim38' target="_blank">Github</a>
          </ArrowButton>
        </div>
        <div>
          <ArrowButton>
            <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/'>LinkedIn</a>
          </ArrowButton>

        </div>
      </div>
      <div>
        <h3>Tanner Shaw</h3>
        <div>
          <ArrowButton>
            <a href='https://github.com/JTannerShaw/' target="_blank">Github</a>
          </ArrowButton>
        </div>
        <div>
          <ArrowButton>
            <a href='https://www.linkedin.com/in/tanner-shaw-a25702162/' target="_blank">LinkedIn</a>
          </ArrowButton>
        </div>
      </div>
    </div>
  )
}

export default About;
