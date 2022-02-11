import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Slider from '../Surveys/Slider/Slider'
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import { createSurveyResponse } from '../../store/surveyResponses';
import { getMatches, createMatches } from '../../store/matches';

import './FirstSurvey.css'
import { updateSessionUser } from '../../store/session';

const FirstSurvey = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const userId = sessionUser.id

  // const [value, setValue] = useState('')
  const [validationObject, setValidationObject] = useState({ test: true });
  const [errors, setErrors] = useState([]);

  const matches = useSelector(state => state.matches.allMatches);

  useEffect(() => {
    dispatch(getMatches(sessionUser.id));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!matches.length) await dispatch(createMatches(sessionUser.id));
    await dispatch(updateSessionUser(sessionUser, sessionUser.id))

    let entries = {}
    let inputs = document.querySelectorAll('input')

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i]
      let value = parseInt(input['value'])
      if (!value) {
        setErrors(['Responses cannot be left blank'])
        return;
      }
      entries[inputs[i]['id']] = parseInt(inputs[i]['value'])
    }

    let surveyResponse = {}
    surveyResponse[1] = entries
    let res = await dispatch(createSurveyResponse(surveyResponse, 1, userId))
    if (res?.message.includes('Success')) history.push('/')

  }

  const handleCancel = () => {
    history.push('/')
  }

  const surveyQuestions = [
    {
      id: 1,
      one_label: 'Disagree',
      ten_label: 'Agree',
      text: 'I prefer cats over dogs.',
    },
    {
      id: 2,
      one_label: 'Disagree',
      ten_label: 'Agree',
      text: 'I am a person who is very open to new ideas an experiences.',
    },
    {
      id: 3,
      one_label: 'Disagree',
      ten_label: 'Agree',
      text: 'To feel at ease, I need to be in a position of control',
    }
  ]

  return (
    <>
      <div className='survey-background' id='dark__background' />
      <div className='survey' id="flex__container--split">
        <div className='left-col flex__container--child'>
          <h1>Icebreaker</h1>
          <p className='icebreaker p-1 accent-color-2'>
            Tell us about yourself. Submitting this survey will activate your profile and generate matches with
            other users.
          </p>
          <div className='button-container'>
          <div className='error-container'>
                            {errors && errors.map(error => (
                                <div className="database-errors">
                                {error.includes(': ') ?
                                    error.split(": ")[1]
                                    : error
                                }
                                </div>
                            ))}
                            </div>

            <ArrowButton
              type='submit'
              formId='survey-form'
              validationObject={validationObject}
            >
              Submit

            </ArrowButton>
            {/* <ArrowButton
              onClickFunction={handleCancel}
            >
              Cancel
            </ArrowButton> */}
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
                validationObject={validationObject}
                setValidationObject={setValidationObject}
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
