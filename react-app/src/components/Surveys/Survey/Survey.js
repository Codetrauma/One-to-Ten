import { useEffect, useLayoutEffect, useState } from 'react';
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

    const [validationObject, setValidationObject] = useState({ test: true });


    const survey = useSelector(state => state.surveys[params.surveyId]);

    let surveyName;
    if (survey) {
        surveyName = survey.name
    }

    const dispatch = useDispatch();

    //gets questions from state and puts them into array called questionsList
    const questions = useSelector(state => state.questions.byId);
    const questionsList = Object.values(questions)

    //questionResponses looks like {surveyId: {qId: val, qId: val, qId: val}}
    const questionResponses = useSelector(state => state.questionResponses.bySurveyId_ResVals);

    useEffect(() => {
        dispatch(getSurveys());
        dispatch(getQuestions(params.surveyId));
        dispatch(getQuestionResponses(params.surveyId, sessionUser.id));
    }, [dispatch])

    if (!questions) return null;

    const handleSubmit = (e) => {
        console.log('handleSubmit')
        let entries = {}
        let inputs = document.querySelectorAll('input')

        for (let i = 0; i < inputs.length; i++) {
            entries[inputs[i]['id']] = parseInt(inputs[i]['value'])
        }

        let reqBody = {}
        reqBody[params.surveyId] = entries

        console.log(reqBody)
    }

    const handleCancel = (e) => {
        console.log('handleCancel')
        history.push('/surveys')
    }

    return (
        <>
            {validationObject
                &&
                <>
                    <div className='survey-background' id='dark__background' />
                    <div className='survey' id="flex__container--split">
                        <div className='left-col flex__container--child'>
                            <h1>{survey.name}</h1>
                            <div className='button-container'>

                                <ArrowButton
                                    // type='submit'
                                    // formId='survey-form'
                                    // validationObject={{}}
                                    onClickFunction={handleSubmit}
                                    disabled={true}
                                // validationObject={validationObject}
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
                                {questionsList.map(question => (
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
            }
        </>
    )
}


export default Survey
