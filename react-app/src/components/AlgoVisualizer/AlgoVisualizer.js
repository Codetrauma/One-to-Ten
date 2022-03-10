
import { useEffect, useState } from 'react';
import FormInput from '../Forms/FormInput/FormInput';
import Node from "./Node"
import Slider from '../Surveys/Slider/Slider'
import './AlgoVisualizer.css'


const AlgoVisualizer = () => {

    const [validationObject, setValidationObject] = useState({ test: true });
    const [scores, setScores] = useState()

    useEffect(() => {
        let scoreArr = []
        let scoreNodes = document.querySelectorAll('input')
        scoreNodes.forEach(score => scoreArr.push(score.value))
        console.log('it happenes')
        console.log(scoreArr)
        setScores(scoreArr)
    }, [validationObject])

    const NodeCol = (colCount, rowNumber) => {


        const col = []
        for (let i = 0; i < colCount; i++) {
            let colNumber = i

            col.push(<Node

                row={rowNumber}
                col={colNumber}
                key={`${i}-${rowNumber}`} />)
        }
        return col
    }

    const NodeGrid = (rowCount, colCount, colCounterVariable) => {
        const grid = []
        for (let i = 0; i < rowCount; i++) {
            grid.push(
                <div className="node-row" key={`row-${i}`}>
                    {NodeCol(colCount, i)}
                </div>
            )
        }
        return grid
    }


    const questionsList = [{
        id: 101,
        text: 'Person 1 Response',
    },
    {
        id: 102,
        text: 'Person 2 Response'
    }
    ]

    let averages = []
    for (let i = 1; i < 10; i += 0.01) {
        averages.push(i)
    }

    let compatibilites = averages.map((average, idx) => {
        let firstScore = 0
        let secondScore = 0
        if (scores && parseInt(scores[0])) {
            firstScore = parseInt(scores[0])
        }

        if (scores && parseInt(scores[1])) {
           secondScore = parseInt(scores[1])
        }

        let raw = (firstScore-average) * (secondScore-average)
        let compatibility
        if (raw > 0) compatibility = raw ** 0.5
        if (raw <= 0) compatibility = -1 * (-1 * raw) ** 0.5
        let percentage = compatibility / 10 * 160 + 150
        let measureLeft = (idx * .4) + 140


        return (
            <div className='result-dot' style={{
                left: measureLeft,
                bottom: percentage
            }}>

            </div>
        )
    }
    )


    return (
        <>
                <>
                    <div className='survey-background' id='dark__background' />
                    <div className='survey' id="flex__container--split">
                        <div className='algo left-col flex__container--child'>
                        <h1>Matching Algorithm</h1>
                        <h5>Each question maintains measurement of the mean response value.
                        </h5>
                        <br/>
                        <h5>
                            When two users answer the same question, we calculate the
                            distance of each user's response from the average response.
                        </h5>
                        <br/>
                        <h5>The users' match compatibility is adjusted by taking the sqaure root of
                            the product of each users distance from the mean and adding or
                            subtracting it from their pre-existing compatibility.
                        </h5>
                        </div>
                        <div id='flex__container--divider'></div>
                    <div className='right-col flex__container--child'>
                    <div className='algo-interactive'>
                        <div className="node-container">
                            {compatibilites.map((compatibility) => compatibility)}
                        </div>
                        <div className='average-label'>
                            {/* <div className='overline'></div> */}
                            <div></div>
                            <div>1</div>
                            <div>Average</div>
                            <div>10</div>
                        </div>
                        <div className='compatibility-label'>
                            <div className='right-line'></div>
                            <div></div>
                            <div>10</div>
                            <div className='rotate'>Compatibility</div>
                            <div>-10</div>
                        </div>
                        </div>
                        <form id='survey-form' onSubmit={(e) => { }}>
                                {questionsList.map(question => (
                                    <Slider
                                        key={question.id}
                                        oneLabel={question.one_label}
                                        tenLabel={question.ten_label}
                                        text={question.text}
                                        questionId={question.id}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                ))
                                }
                            </form>
                        </div>
                    </div>
                </>
        </>
    )
}









export default AlgoVisualizer
