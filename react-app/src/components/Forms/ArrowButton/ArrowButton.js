import './ArrowButton.css'

const ArrowButton = ({
    children,
    type,
    formId,
    onClickFunction = ((e) => { }),
    validationObject
}) => {

    return (
        <>
            {

                (type === 'submit' && formId) ?
                <>
                    {validationObject &&
                        < button
                            type={type}
                            className="arrow-button"
                            disabled={Object.values(validationObject).includes(false)}
                            form={formId}
                        >
                            <span className="arrow-left">
                                <span className="arrow-shaft">
                                </span>
                            </span>
                            <span className="main-arrow">

                                {children}

                            </span>
                        </button>
                        }
                        </>
                    :

                    <button
                        type={type}
                        className="arrow-button"
                        onClick={onClickFunction}
                    >

                        <span className="arrow-left">
                            <span className="arrow-shaft">
                            </span>
                        </span>
                         <span className="main-arrow">

                            {children}

                        </span>
                    </button>



            }


        </>
    )

}

export default ArrowButton
