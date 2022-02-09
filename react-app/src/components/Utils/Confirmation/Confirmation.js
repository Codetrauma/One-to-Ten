import { useState } from "react"
import './Confirmation.css'


const Confirmation = (
    {
        children,
        warningText,
        confirmAction,
        confirmText,
        hideText
    }
) => {
    const [showDropdown, setshowDropdown] = useState(false)

    const toggleVisibility = () => {
        setshowDropdown(!showDropdown)
    }

    return (
        <div className="confirmation-wrapper">
            <div className={`first-click-area underline-slide activated-${showDropdown}`} onClick={toggleVisibility}>
                {children}
            </div>
            <div className={`confirmation-dropdown dropdown-${showDropdown}`}>
                <div className="warning p-1">{warningText}</div>
                <button className='p-1 warning confirm underline-slide' onClick={confirmAction}>{confirmText}</button>
                <button className='p-1 warning go-back underline-slide' onClick={toggleVisibility}>{hideText}</button>
            </div>
        </div>
    )
}

export default(Confirmation)
