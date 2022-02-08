import { useState } from "react"
import { Redirect, useHistory, useParams } from "react-router-dom"
import FormInput from '../../Forms/FormInput/FormInput'
import ArrowButton from '../../Forms/ArrowButton/ArrowButton'
import './EditProfile.css'
import MatchProfile from "../MatchProfile/MatchProfile"

const EditProfile = () => {
    let params = useParams()
    let history = useHistory()
    let urlUserId = params.userId

    const [previewMode, setPreviewMode] = useState(false)
    const [biography, setBiography] = useState()
    const [facebook, setFacebook] = useState()
    const [instagram, setInstagram] = useState()
    const [snapchat, setSnapchat] = useState()
    const [twitter, setTwitter] = useState()
    const [tiktok, setTikTok] = useState()
    const [github, setGithub] = useState()
    const [errors, setErrors] = useState()
    const [validationObject, setValidationObject] = useState({ true: true })

    let previewUser = {
        first_name: '',
        last_name: 'Preview',
        facebook,
        instagram,
        snapchat,
        twitter,
        tiktok,
        github
    }

    const togglePreviewMode = () => {
        setPreviewMode(!previewMode)
    }

    const onProfileUpdate = () => {
        console.log('updating profile')
    }

    const handleCancel = () => {
        console.log('handle cancel')
        history.push(`/users/${urlUserId}`)
    }

    let currentUserId = 1


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
                <div className="flex__container--child flex__container--padded edit-profile">
                    <h1 className="accent-color-1">
                        Edit Profile
                    </h1>

                    <p className="p-1 accent-co">
                        This information will be visible to users with whom you have a high degree of compatibility
                    </p>
                <h5
                    className={`edit-toggle underline-slide activated-${togglePreviewMode}`}
                    onClick={togglePreviewMode}>
                    Switch To Preview Mode
                </h5>

                </div>
                <div className="flex__container--child flex__container--padded">
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
                required={true}
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
              formId='login'
              validationObject={validationObject}
            >
              Submit
            </ArrowButton>

            <ArrowButton
                        onClickFunction={handleCancel}
                    >
                        Cancel
            </ArrowButton>


            {/* <ArrowButton
              validationObject={validationObject}
              onClickFunction={demoLogin}
            >
              Demo As Guest
            </ArrowButton> */}

             </div>
            </div>
            </>
                )
            }
        </>

    )
}

export default EditProfile
