
import { useEffect } from 'react'
import './FormInput.css'
import { unsafeInput, okToSubmitField } from './utils'
// import { useFormValidation } from './FormValidationContext'

const FormInput = (

    {
        labelText,
        id,
        type,
        stateVar,
        setStateVar,
        required,
        disabled,
        minLength,
        maxLength,
        placeholder,
        patternMatch,
        additionalValidationArr,
        validationObject,
        setValidationObject,
        restrictSafe,
        radioOptions,
        testingMovement
    }

) => {

    useEffect(() => {
        if (required && !stateVar && setValidationObject) {
            let currentValidationObject = { ...validationObject }
            currentValidationObject[id] = false
            setValidationObject(currentValidationObject)
        }
    },[])

    const acceptSuggestion = (suggestion) => setStateVar(suggestion)
    const updateStateVar = (e) => setStateVar(e.target.value)

    let isSafe, warningText, suggestion

    if (stateVar.length) {
        let output = unsafeInput(stateVar, id, maxLength)
        isSafe = output[isSafe]
        warningText = output[warningText]
        suggestion = output[suggestion]
    //   { isSafe, warningText, suggestion } = unsafeInput(stateVar, id, maxLength)
    }

    if (type === 'textarea' && warningText) {
        warningText = 'Input includes forbidden characters (<>$#)'
    }

    if (!restrictSafe) {
        isSafe = true;
        warningText = ''
        suggestion = ''
    }

    let newErrors

    useEffect(() => {
        newErrors = { ...validationObject }
    }, [validationObject, stateVar])

    useEffect(() => {
        const isValid = okToSubmitField(stateVar, minLength, maxLength, required, patternMatch, additionalValidationArr)
        newErrors[id] = isValid && isSafe
        if (setValidationObject) {
            setValidationObject({ ...newErrors })
        }
    },
        [stateVar]
    )

    return (
            <>
                <div className='form-input'>
                    {type === 'textarea' &&
                        <textarea className='textarea'
                        id={id}
                            value={stateVar}
                            required={required}
                            onChange={updateStateVar}
                            placeholder={placeholder}
                            data-hasinput={stateVar && stateVar.length && stateVar.length > 0}
                            data-toolong={maxLength && stateVar && stateVar.length && stateVar.length > maxLength}
                            data-issafe={isSafe}
                        ></textarea>
                    }
                    {type === 'radiolist' &&
                    <div className='radio-group'>
                        {/* {labelText} */}
                        {
                            radioOptions.map(optionName => (

                                    <label
                                        htmlFor={optionName}
                                        className='radio-label'
                                    >
                                        <input
                                        type='radio'
                                        id={optionName}
                                        name={id}
                                        value={optionName}
                                        onChange={updateStateVar}
                                        className='underline-slide'
                                        />
                                        <span className='underline-slide'>{optionName}</span>
                                </label>

                            ))
                        }
                        </div>
                    }


                    {type !== 'textarea' && type !== 'radiolist' &&
                        <input
                        id={id}
                        type={type}
                        value={stateVar}
                        required={required}
                        disabled={disabled}
                        onChange={updateStateVar}
                        placeholder={placeholder}
                        data-hasinput={stateVar && stateVar.length && stateVar.length > 0}
                        data-toolong={maxLength && stateVar && stateVar.length && stateVar.length > maxLength}
                        data-issafe={isSafe}
                    />
                    }
                {   required
                    ?
                    <label htmlFor={id} className='required'>
                    {labelText}
                    </label>
                    :
                    <label htmlFor={id}>
                    {labelText}
                    </label>
                }
                <span className='length-counter'>
                    {`${((stateVar && stateVar.length && maxLength) ? `${stateVar.length}/${maxLength}` : '')}`}
                </span>
                <div className='error-area'>
                    {warningText && <div className='warning'>
                        <span>
                            {warningText}
                        </span>
                            {type !== 'textarea' && <span
                                className='suggestion'
                                onClick={() => acceptSuggestion(suggestion)}
                                value={suggestion}
                            >
                                {suggestion}
                            </span>}
                        </div>}
                </div>
                </div>
            </>
        )
    }



export default FormInput
