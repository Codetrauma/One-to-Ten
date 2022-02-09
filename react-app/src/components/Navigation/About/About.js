import './About.css';
import ArrowButton from '../../Forms/ArrowButton/ArrowButton';

const About = () => {

  return (
    <div className='about-us-main'>
      <div className='about-us-header'>
      <h1>The Creators of One-to-Ten</h1>
      </div>
      <div className='cameron'>
        <h3> Cameron Whiteside </h3>
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
      </div>

      <div className='christy'>
        <h3> Christy Chen </h3>
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
      </div>
      <div className='aletheia'>
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
      <div className='tanner'>
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
