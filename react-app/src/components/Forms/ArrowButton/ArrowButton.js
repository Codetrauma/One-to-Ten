import './ArrowButton.css'

const ArrowButton = ({
    children,
    type,
    formId,
    onClickFunction = ((e) => { }),
    validationObject
}) => {

    return (
        <button
            type={type}
            className="arrow-button"
            disabled={Object.values(validationObject).includes(false)}
        >
            {Object.values(validationObject)}
            {type === 'submit' && !onClickFunction &&
                <input type='submit' form={formId} className="arrow-input"/>
            }
            <span className="arrow-left">
                <span className="arrow-shaft">
                </span>
            </span>
            <span className="main">
                <span className="text">
                    {children}
                </span>
            </span>
        </button>
    )
    
}

export default ArrowButton
