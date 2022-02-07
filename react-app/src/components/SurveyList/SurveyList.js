import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSurveyResponses } from '../../store/surveyResponses';
import { getSurveys } from '../../store/surveys';
import SurveyButton from './SurveyButton/SurveyButton';

import './SurveyList.css';

// const surveys = [
//     'Privacy',
//     'Religion',
//     'Habits',
//     'Humor',
//     'Body',
//     'Fear',
//     'Planning',
//     'Parents',
//     'Hygiene',
//     'Fitness',
//     'Sleep',
//     'Conflict',
//     'Privacy',
//     'Culture',
//     'Fear',
//     'Style',
//     'Parents',
//     'Children',
//     'Privacy',
//     'Religion',
//     'Habits',
//     'Humor',
//     'Body',
//     'Fear',
// ]

function SurveyList() {
    const sessionUser = useSelector(state => state.session.user);
    console.log(`SESSION USER IDDDDDDDDDDDDDDD`, sessionUser.id)

    const dispatch = useDispatch();
    const surveys = useSelector(state => state.surveys); //is currently an object..


    console.log(`!!!!!!!!!!`, Object.values(surveys))
    const surveyList = Object.values(surveys);
    console.log(surveyList)

    useEffect(() => {
        dispatch(getSurveys());
        dispatch(getSurveyResponses(sessionUser.id));
    }, [dispatch])

    return (
        <>
            <div id="surveys__container">
                {/* {surveys.map(survey => (
                    <SurveyButton survey={survey} />
                ))} */}
                {/* objects can't be react childs? so if use component directly works i think.. */}
                {surveyList.map(survey => (
                    <div key={survey.id} className="survey__button--container">
                        <div className="survey__button--link">

                        </div>
                        <h5 className="survey__button--title">
                            {survey.name}
                        </h5>
                    </div>
                ))}
            </div>
            <div id="light__background"></div>
        </>
    )
}

export default SurveyList;
