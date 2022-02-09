import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Slider from '../../Slider/Slider';
import ArrowButton from '../../../Forms/ArrowButton/ArrowButton';
import './FirstSurvey.css'


const FirstSurvey = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [value, setValue] = useState('')
  const [questionId, setQuestionId] = useState()



  const handleSubmit = async (e) => {
    e.preventDefault();
    const matches = await dispatch()
  }

  const handleCancel = async (e) => {
    console.log('handleCancel')
    history.push('/surveys')
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
    <>
    <div className='survey-background' id='dark__background'/>
    <div className='survey' id="flex__container--split">
        <div className='left-col flex__container--child'>
                <h1>My First Survey</h1>
                <div className='button-container'>

                <ArrowButton
                        onClickFunction={handleSubmit}
                >
                    Submit

                </ArrowButton>
                <ArrowButton
                    onClickFunction={handleCancel}
                >
                    Cancel
                    </ArrowButton>
                </div>
    </div>
    <div id='flex__container--divider'></div>
        <div className='right-col flex__container--child'>

        <form id='survey-form' onSubmit={handleSubmit}>
            {surveyQuestions.map(question => (
                <Slider
                    key={question.id}
                    oneLabel={question.one_label}
                    tenLabel={question.ten_label}
                    text={question.text}
                    questionId={question.id}
                    setQuestionId={question.id}
                    initialValue={question.initial_value}
                    onChange={(e) => setValue(e.target.value)}
                />
                ))
            }
        </form>
        </div>
        </div>
</>
)
}




export default FirstSurvey;
