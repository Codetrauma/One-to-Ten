import './About.css';
import ArrowButton from '../../Forms/ArrowButton/ArrowButton';

const About = () => {

  return (
    <div id="about__container">
      <div className='about-us-header'>
        <h1>One-to-Ten</h1>
        <p className="p-1 main-color">
          This project seeks to match like-minded individuals through collaborative surveys whose questions are answered on a scale of 1 to 10. Our algorithm calculates average response of each question, then determines how individual users scale against that average. From there, we match users with who share the highest compatibility.
        </p>
        <p className="p-1 main-color">
          Join us and find your perfect match.
        </p>
      </div>
      <h3>The Creators of One-to-Ten</h3>
      <div className='about-us-main'>
        <div className='cameron'>
          <h4>Cameron Whiteside</h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/CameronWhiteside' className="about__link" target="_blank">Github</a>
            </ArrowButton>
            <div>
              <ArrowButton>
                <a href='https://www.linkedin.com/in/cameronwhiteside/' className="about__link" target="_blank">LinkedIn</a>
              </ArrowButton>
            </div>
          </div>
        </div>

        <div className='christy'>
          <h4> Christy Chen </h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/christywchen' className="about__link" target="_blank">Github</a>
            </ArrowButton>
            <div>
              <ArrowButton>
                <a href='https://www.linkedin.com/in/christy-chen/' className="about__link" target="_blank">LinkedIn</a>
              </ArrowButton>
            </div>
          </div>
        </div>
        <div className='aletheia'>
          <h4>Aletheia Kim</h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/akim38' className="about__link" target="_blank">Github</a>
            </ArrowButton>
          </div>
          <div>
            <ArrowButton>
              <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank">LinkedIn</a>
            </ArrowButton>
          </div>
        </div>
        <div className='tanner'>
          <h4>Tanner Shaw</h4>
          <div>
            <ArrowButton>
              <a href='https://github.com/JTannerShaw/' className="about__link" target="_blank">Github</a>
            </ArrowButton>
          </div>
          <div>
            <ArrowButton>
              <a href='https://www.linkedin.com/in/tanner-shaw-a25702162/' className="about__link" target="_blank">LinkedIn</a>
            </ArrowButton>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About;
