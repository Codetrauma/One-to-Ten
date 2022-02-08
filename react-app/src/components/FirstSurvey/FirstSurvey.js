import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import Slider from '../Surveys/Slider/Slider'
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import './FirstSurvey.css'
import { useHistory } from 'react-router-dom';


const FirstSurvey = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [value, setValue] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const matches = await dispatch()
    console.log('handleSubmit')
  }

  const handleCancel = () => {
    history.push('/')
  }

  const surveyQuestions = [
    {
      id:1,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I am a person who is very open to new ideas and experiences.',
    },
    {
      id:2,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I enjoy traveling',
    },
    {
      id:3,
      one_label:'Disagree',
      ten_label:'Agree',
      text:'I am an animal person',
    }
  ]

  return (
    <>
    <div className='survey-background' id='dark__background'/>
    <div className='survey' id="flex__container--split">
        <div className='left-col flex__container--child'>
          <h1>Icebreaker</h1>
          <p className='icebreaker p-1 accent-color-2'>
            Submitting this survey will activate your profile and generate matches with
            other users. Answer thoughtfully beacause your response cannot be changed
            after being submitted.
          </p>
                <div className='button-container'>

                <ArrowButton
                    // type='submit'
                    // formId='survey-form'
                    // validationObject={{}}
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
                    initialValue={question.initial_value}
                />
                ))
            }
        </form>
        </div>
        </div>
    </>

    // <>
    // <div className='color-background' id='dark__background'></div>
    // <div className='first-survey-main'>
    //   <form className='first-survey-form' onSubmit={handleSubmit}>
    //     <h1>My First Survey</h1>
    //     {surveyQuestions.map(question => (
    //       <Slider
    //         key={question.id}
    //         oneLabel={question.one_label}
    //         tenLabel={question.ten_label}
    //         text={question.text}
    //         questionId={question.id}
    //         initialValue={question.initial_value}
    //         />
    //     ))}
    //     <button type='submit'>Submit</button>
    //   </form>
    //   </div>
    // </>
  )
}




export default FirstSurvey;
