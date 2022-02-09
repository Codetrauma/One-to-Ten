import { useEffect, useState } from "react"
import { Redirect, useHistory, useParams } from "react-router-dom"
import FormInput from '../../Forms/FormInput/FormInput'
import ArrowButton from '../../Forms/ArrowButton/ArrowButton'
import './EditProfile.css'
import MatchProfile from "../MatchProfile/MatchProfile"
import { useDispatch, useSelector } from "react-redux";
import { changeUser, getOneUser } from '../../../store/users';

const EditProfile = ({initialPreviewMode}) => {
    let params = useParams()
    let history = useHistory()
    let urlUserId = params.userId;
    const dispatch = useDispatch();

    // sessionUser = {
    //     first_name: 'Sample',
    //     last_name: 'User'
    // }

    // const sessionUser = useSelector(state => state.session.user)
    // console.log(typeof sessionUser.id, sessionUser.id)
    const sessionUser = useSelector(state => state.user?.byId[urlUserId])
    console.log(sessionUser, 'HELLLLLLLLLLLLO')

    const [previewMode, setPreviewMode] = useState(initialPreviewMode || false)
    const [biography, setBiography] = useState(sessionUser?.biography || '')
    const [facebook, setFacebook] = useState(sessionUser?.facebook || '')
    const [instagram, setInstagram] = useState(sessionUser?.instagram || '')
    const [snapchat, setSnapchat] = useState(sessionUser?.snapchat || '')
    const [twitter, setTwitter] = useState(sessionUser?.twitter || '')
    const [tiktok, setTikTok] = useState(sessionUser?.tiktok || '')
    const [github, setGithub] = useState(sessionUser?.github || '')
    const [errors, setErrors] = useState()
    const [validationObject, setValidationObject] = useState({ true: true })

    let previewUser = {
        first_name: sessionUser.first_name,
        last_name: sessionUser.last_name,
        facebook,
        instagram,
        snapchat,
        twitter,
        tiktok,
        github,
        biography
    }

    const togglePreviewMode = () => {
        setPreviewMode(!previewMode)
    }

    const onProfileUpdate = async (e) => {
        // console.log('updating profile!!!!!!!!!!')
        e.preventDefault()

        const editedProfile = await dispatch(changeUser(previewUser, sessionUser.id));
        if (editedProfile) {
            setErrors(editedProfile.errors)
        }
        setPreviewMode(!previewMode)
    }

    const handleCancel = () => {
        console.log('handle cancel')
        history.push(`/users/${urlUserId}`)
    }

    const currentSessionUser = useSelector(state => state.session.user.id);
    let currentUserId = currentSessionUser;

    useEffect(() => {
        dispatch(getOneUser(urlUserId))
    }, [dispatch])


    return (
        <>
            {
                (urlUserId !== currentUserId.toString()) ?

                <Redirect to='/'/>

                    :

                    (previewMode ?
                        < >
                            <MatchProfile user={previewUser} previewMode={previewMode}>
                                <h5
                                className={`edit-toggle underline-slide activated-${togglePreviewMode}`}
                                onClick={togglePreviewMode}>
                                Switch To Edit Mode
                                </h5>
                            </MatchProfile>
                        </>

                        :
                        <>

                        <div className="color-background" id="light__background"></div>
                        <div id="flex__container--split" className="flex__container--padded">
                            <div className="flex__container--child edit-profile">
                                <h1 className="accent-color-1">
                                    Edit Profile
                                </h1>

                                <p className="p-1 accent-color-1 margin-bottom-30">
                                    This information will be visible to users with whom you have a high degree of compatibility
                                </p>
                                <p
                                    className={`p-1 edit-toggle underline-slide activated-${togglePreviewMode}`}
                                    onClick={togglePreviewMode}>
                                    Switch To Preview Mode
                                </p>


                            </div>
                            <div className="flex__container--child">
                                <div className='top_group'>
                                    <form id='editProfile' onSubmit={onProfileUpdate}>
                                    <FormInput
                                        labelText='Facebook'
                                        id='facebook'
                                        type='text'
                                        stateVar={facebook}
                                        setStateVar={setFacebook}
                                        restrictSafe={false}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                    <FormInput
                                        labelText='Instagram'
                                        id='instagram'
                                        type='text'
                                        stateVar={instagram}
                                        setStateVar={setInstagram}
                                        restrictSafe={false}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                    <FormInput
                                        labelText='Twitter'
                                        id='twitter'
                                        type='text'
                                        stateVar={twitter}
                                        setStateVar={setTwitter}
                                        restrictSafe={false}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                    <FormInput
                                        labelText='TikTok'
                                        id='tiktok'
                                        type='text'
                                        stateVar={tiktok}
                                        setStateVar={setTikTok}
                                        restrictSafe={false}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                    <FormInput
                                        labelText='Snapchat'
                                        id='snapchat'
                                        type='text'
                                        stateVar={snapchat}
                                        setStateVar={setSnapchat}
                                        restrictSafe={false}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                    <FormInput
                                        labelText='Github'
                                        id='github'
                                        type='text'
                                        stateVar={github}
                                        setStateVar={setGithub}
                                        restrictSafe={false}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />
                                    <FormInput
                                        labelText='Biography'
                                        id='biography'
                                        type='textarea'
                                        maxLength={220}
                                        stateVar={biography}
                                        setStateVar={setBiography}
                                        placeholder={``}
                                        validationObject={validationObject}
                                        setValidationObject={setValidationObject}
                                    />


                                    </form>
                                </div>

                                <div className='bottom_group'>
                                    <div className="error-area">
                                        {errors && errors.map(error => (
                                            <div className="database-errors">
                                            {error.split(":")[1]}
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <ArrowButton
                                     type='submit'
                                     formId='editProfile'
                                     validationObject={validationObject}
                                    >
                                        Submit
                                    </ArrowButton>
                                    <ArrowButton
                                    onClickFunction={handleCancel}
                                    >
                                        Cancel
                                    </ArrowButton>
                                </div>
                            </div>
                        </div>
                        </>
                )
            }
        </>

    )
}

export default EditProfile
