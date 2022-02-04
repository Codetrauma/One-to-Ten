const ArrowButton = ({
    children,
    type,

}) => {
    return (
        <button type={type} className="arrow-button">
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
