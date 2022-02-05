import SurveyButton from './SurveyButton/SurveyButton';

import './SurveyList.css';

const surveys = [
    'Privacy',
    'Religion',
    'Habits',
    'Humor',
    'Body',
    'Fear',
    'Planning',
    'Parents',
    'Hygiene',
    'Fitness',
    'Sleep',
    'Conflict',
    'Privacy',
    'Culture',
    'Fear',
    'Style',
    'Parents',
    'Children',
    'Privacy',
    'Religion',
    'Habits',
    'Humor',
    'Body',
    'Fear',
]

function SurveyList() {
    return (
        <>
            <div id="surveys__container">
                {surveys.map(survey => (
                    <SurveyButton survey={survey} />
                ))}
            </div>
            <div id="light__background"></div>
        </>
    )
}

export default SurveyList;
