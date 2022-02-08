import { useState } from "react"
import FormInput from '../../Forms/FormInput/FormInput'
import ArrowButton from '../../Forms/ArrowButton/ArrowButton'


const EditProfile = () => {

    const [previewMode, setPreviewMode] = useState(false)
    const [biography, setBiography] = useState()
    const [facebook, setFacebook] = useState()
    const [instagram, setInstagram] = useState()
    const [snapchat, setSnapchat] = useState()
    const [twitter, setTwitter] = useState()
    const [tiktok, setTikTok] = useState()
    const [github, setGithub] = useState()


    return (
        <>
            <div className="color-background" id="light__background"></div>
            <div className="flex__container--child flex__container--padded">
                    <h1 className="accent-color-1">
                        Your Profile
                    </h1>

                    <p className="p-1 accent-co">
                        This information will be visible to users with whom you have a high degree of compatibility
                    </p>
                </div>
                <div className="flex__container--child flex__container--padded">

                </div>
        </>
    )
}

export default EditProfile
