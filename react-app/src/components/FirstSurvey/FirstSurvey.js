import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import Slider from '../Surveys/Slider/Slider'
import './FirstSurvey.css'


const FirstSurvey = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const matches = await dispatch()
  }

  const surveyQuestions = [
    {
      id:1,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I am a person who is very open to new ideas and experiences.',
      initial_value:5
    },
    {
      id:2,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I enjoy traveling',
      initial_value:5
    },
    {
      id:3,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I am an animal person',
      initial_value:5
    },
    {
      id:4,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I am an introvert',
      initial_value:5
    }
  ]
  
  return (
    <div className='first-survey-main'>
      <form className='first-survey-form' onSubmit={handleSubmit}>
        <h1>My First Survey</h1>
        {surveyQuestions.map(question => (
          <Slider
            key={question.id}
            oneLabel={question.one_label}
            tenLabel={question.ten_label}
            text={question.text}
            questionId={question.id}
            initialValue={question.initial_value}
            />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}




export default FirstSurvey;
