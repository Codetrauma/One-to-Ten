import { NavLink } from "react-router-dom";

function SurveyButton({ name, completed, id, deleteResponseMode }) {
    const handleDelete = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log(`deleting id ${id}`)
        //dispatch deletion
    }

    return (
        <>
            <NavLink className='survey__navlink' to={`/surveys/${id}`}>
                {deleteResponseMode && completed &&
                    <button className="survey__delete-resposnes" onClick={handleDelete}>
                        <span>X</span>
                    </button>
                }
            <div className={`survey__button--container completed-${completed}`}>
            <div className='survey__button--link'>
            </div>
            <h5 className='survey__button--title'>
                {name}
            </h5>
            </div>
            </NavLink>
        </>
    )
}

export default SurveyButton;
