import Slider from './Slider/Slider'

const Survey = () => {

    // const userId = session.user.id

    const sampleInput = {
        id:1,
        one_label:'Disagree',
        ten_label: 'Agree',
        text: `This is my first time using a computer and hoo boy is it scary.`
    }

    return (
        <div className='survey'>
            <h2>Survey Div</h2>
            <form>
            <Slider
                oneLabel={sampleInput.one_label}
                tenLabel={sampleInput.ten_label}
                text={sampleInput.text}
                questionId={sampleInput.id}
            >

            </Slider>
            </form>
        </div>
    )
}


export default Survey
