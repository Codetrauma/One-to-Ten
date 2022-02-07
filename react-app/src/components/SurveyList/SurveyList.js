import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSurveys } from '../../store/surveys';
import SurveyButton from './SurveyButton/SurveyButton';

import './SurveyList.css';

const surveys = [
    {
        id: 1,
        name: 'Privacy'
    },
    {
        id: 2,
        name: 'Education'
    },
    {
        id: 3,
        name: 'Money'
    },
    {
        id: 4,
        name: 'Pop Culture'
    },
    {
        id: 5,
        name: 'Animals'
    },
    {
        id: 6,
        name: 'Travel'
    },
    {
        id: 7,
        name: 'Sleep'
    },
    {
        id: 8,
        name: 'Food'
    },
    {
        id: 9,
        name: 'Fitness'
    },
    {
        id: 10,
        name: 'Parents'
    },
    {
        id: 11,
        name: 'Fear'
    },
    {
        id: 12,
        name: 'Music'
    }
]
const surveyResponses = [
    {
    surveyId: 1,
    userId: 2
    },
    {
    surveyId: 4,
    userId: 2
    },
    {
    surveyId: 5,
    userId: 2
    },
        {
    surveyId: 9,
    userId: 2
    },
    {
    surveyId: 11,
    userId: 2
    }
]

function SurveyList() {
    // const dispatch = useDispatch();
    // const surveys = useSelector(state => state.surveys);
    // const surveyResponses = userSelector(state => state.surveyResponses)

    // console.log(`!!!!!!!!!!`, Object.values(surveys))
    // const surveyList = Object.values(surveys);
    // console.log(surveyList)

    const [deleteResponseMode, setDeleteResponseMode] = useState(false)


    // useEffect(() => {
    //     dispatch(getSurveys());
    // }, [dispatch])
    const toggleDeleteResponse = () => {
        setDeleteResponseMode(!deleteResponseMode)
    }

    return (
        <>

        <div id="surveys__container">
                {/* {surveys.map(survey => (
                    <SurveyButton survey={survey} />
                ))} */}
                {/* objects can't be react childs? so if use component directly works i think.. */}
                {surveys.map(survey => {
                    let completed = surveyResponses.map(response => response.surveyId).includes(survey.id)
                    return (
                        <SurveyButton
                            key={survey.id}
                            name={survey.name}
                            id={survey.id}
                            completed={completed}
                            deleteResponseMode={deleteResponseMode}
                        />
                    )
                }
                )}
                {/* (

                    <div key={survey.id} className="survey__button--container">
                        <div className="survey__button--link">
                        </div>
                        <h5 className="survey__button--title">
                            {survey.name}
                        </h5>
                    </div>
                ) */}
            </div>
            <h4
                    className={`edit-toggle underline-slide activated-${deleteResponseMode}`}
                onClick={toggleDeleteResponse}>
                Edit Mode
            </h4>
            </>
            )
                }


export default SurveyList;
