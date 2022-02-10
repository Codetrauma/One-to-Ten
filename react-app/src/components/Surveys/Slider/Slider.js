import react, {useState} from 'react'
import './Slider.css'
// const { useState } = require("react")
import FormInput from '../../Forms/FormInput/FormInput'


const Slider = ({
    text,
    questionId,
    oneLabel,
    tenLabel,
    initialValue,
    validationObject,
    setValidationObject
}) => {

    const [roundedScore, setRoundedScore] = useState(initialValue || '')
    const [movementInitiated, setMovementInitiated] = useState(false)

    function smartSlide(e) {

    console.log('movement started')
      let target = e.target;
      //sets property to handle event start/stop logic
      target.movementEnabled = true;

      //Check if mouse events exist on users' device
      if (e.clientX) {
        // If yes, use mouse input
        target.oldX = e.clientX;
      } else {
        //otherwise use touch
        //with multiple touches, only responsd to first touch
        target.oldX = e.touches[0].clientX; // Otherwise use touch input
      }

        //calculate starting offset before movement begins
       target.initialOffset = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
        if (!target.initialOffset) target.initialOffset = 0

      document.onmousemove = dr; //assign mousemove drag event when clicked
      document.ontouchmove = dr; //assign touchmove drag event when touched

        function dr(event) {
            event.preventDefault();
            setMovementInitiated(true)
            if (!target.movementEnabled) {
                return;
            }

            //Check if mouse events exist on users' device
            if (event.clientX) {
                target.distX = event.clientX - target.oldX; // If yes, use mouse input
            } else { //otherwise use touch
                if (event.touches) {
                    target.distX = event.touches[0].clientX - target.oldX; // Otherwise use touch input
                }
            }

            let sliderWidth = window.getComputedStyle(target).getPropertyValue('width').split('px')[0] * 1; //calculate track width and coerce to num
            let wrapperWidth = window.getComputedStyle(target.parentElement).getPropertyValue('width').split('px')[0] * 1 //calculate slider width and coerce to num
            let maxLeft = wrapperWidth - sliderWidth // limit left offset to keep entire slider within its track width
            let minLeft = 0
            let trueOffset = target.initialOffset + target.distX

            const restrictToRange = (num, min, max) => {
                if (num < min) {
                    return min
                } else if (num > max) {
                    return max
                } else {
                    return num
                }
            }

            trueOffset = restrictToRange(trueOffset, minLeft, maxLeft)

            //adjustments prevent values of 0 showing at 0%, and 11 showing at 100%
            let sliderVal = Math.ceil(trueOffset / maxLeft * 9.999 + 0.001)
            target.style.left = trueOffset + "px";

            //sets state variable for
            setRoundedScore(sliderVal)
        }

            //setter function to end movement event
            function disableMovement() {
                target.movementEnabled = false;
            }

            //setting listener on document allows for all movement to
            //end regardless of location which is critical for
            //when the user drags "beyond the 10"
            document.onmouseup = disableMovement
            document.ontouchend = disableMovement
    }

        return (
            <div className="slider">
                <div className="question-text">{text}</div>
                <div className="slider-wrapper" >
                    <div className="slider-track"></div>

                    <div
                        onMouseDown={smartSlide}
                        onTouchStart={smartSlide}
                        className={`score-display moved-${movementInitiated}-${roundedScore}`}
                    >
                        <span
                            className='score-span'
                            disabled={true}
                        >
                            {roundedScore || ''}
                        </span>

                            <FormInput
                                type="text"
                                id={questionId}
                                value={roundedScore}
                                disabled={true}
                                className='score-input'
                                restrictSafe={false}
                                required={true}
                                labelText=''
                                placeholder=''
                                stateVar={roundedScore}
                                setStateVar={setRoundedScore}
                                validationObject={validationObject}
                                setValidationObject={setValidationObject}
                                testingMovement={true}
                            />
                    </div>
                </div>
                <div className='question-labels'>
                    <div className='one-label'>{oneLabel}</div>
                    <div className='ten-label'>{tenLabel}</div>
                </div>
            </div>
        )
    }

    export default Slider
