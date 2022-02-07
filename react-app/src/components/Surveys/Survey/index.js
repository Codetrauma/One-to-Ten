import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../../../store/questions';
import Slider from './Slider/Slider'

const Survey = ({questions}) => {

    const userId = session.user.id

    questions = [{
        id:1,
        one_label:'Disagree',
        ten_label: 'Agree',
        text: `This is my first time using a computer and hoo boy is it scary.`
    }]

    // const dispatch = useDispatch();
    // const questions = useSelector(state => state.questions);

    // useEffect(() => {
    //     dispatch(getQuestions(2));
    // }, [dispatch])

    return (
        <div className='survey'>
            <h2>Survey Name</h2>
            <form>
                {questions.map(question => (
                    <Slider
                        oneLabel={question.one_label}
                        tenLabel={question.ten_label}
                        text={question.text}
                        questionId={question.id}
                    />
                    ))
                }
            </form>
        </div>
    )
}


export default Survey
