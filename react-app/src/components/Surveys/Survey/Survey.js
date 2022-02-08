import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { getQuestions } from '../../../store/questions';
import Slider from '../Slider/Slider'
import ArrowButton from '../../Forms/ArrowButton/ArrowButton';
import './Survey.css'
import { getSurveys } from '../../../store/surveys';
import { getQuestionResponses } from '../../../store/questionResponses';

const Survey = () => {

    // const userId = session.user.id
    const sessionUser = useSelector(state => state.session.user);
    const params = useParams();
    const history = useHistory()
    // let surveyId = 4;
    // console.log(`PARAMS `, { params })

    const [formData, setFormData] = useState()


    const survey = useSelector(state => state.surveys[params.surveyId]);

    let surveyName;
    if (survey) {
        surveyName = survey.name
    }

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.byId);
    const questionsArr = Object.values(questions);
    const questionIds = Object.keys(questions);
    console.log(questionIds, `>>>>>>>>>>`)
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }

    const questionResponses = useSelector(state => state.questionResponses.bySurveyId);


    useEffect(() => {
        dispatch(getSurveys());
        dispatch(getQuestions(params.surveyId));
        // dispatch(getQuestionResponses(params.surveyId, sessionUser.id))
    }, [dispatch])

    if (!questions) return null;

    const handleSubmit = (e) => {
        console.log('handleSubmit')
        let entries = []
        let inputs = document.querySelectorAll('input')

        for (let i = 0; i < inputs.length; i++) {
            let newObj = {
                question_id: inputs[i]['id'],
                value: inputs[i]['value']
            }

            entries.push(newObj)
        }

        let reqBody = JSON.stringify({
            "question_responses": entries
        })

        console.log(reqBody)
    }

    const handleCancel = (e) => {
        console.log('handleCancel')
        history.push('/surveys')
    }

    return (
        <>
        <div className='survey-background' id='dark__background'/>
        <div className='survey' id="flex__container--split">
            <div className='left-col flex__container--child'>
                    <h1>{surveyName}</h1>
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
                {questionsArr.map(question => (
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
    )
}


export default Survey
