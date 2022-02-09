import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Redirect, NavLink, useHistory  } from 'react-router-dom';
import { signUp } from '../../store/session';
import FormInput from '../Forms/FormInput/FormInput';
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import Lorem from '../Utils/Lorem/Lorem';
import './SignUpForm.css'
import { validateSignUp, formatDate } from './utils';
const SignUpForm = () => {
  const history=useHistory()

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [dob, setDob] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [gender, setGender] = useState('lork');
  const [validationObject, setValidationObject] = useState({ test: true, email:false, first_name: false, last_name: false, password: false, repeatPassword: false });
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {

    e.preventDefault();

    let frontendErrors = validateSignUp(email, dob, zipCode, password, repeatPassword)

    if (frontendErrors.length) {
      setErrors(frontendErrors)
    } else {

      const data = await dispatch(signUp(firstName, lastName, email, password, formatDate(dob), zipCode, gender));

      if (data) {
        setErrors(data)
      } else {
        <Redirect to='/' />
      }
    }
  };

  const onCancel = () => {
    history.push('/')
  }



  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='light_background' />
      <div className='signup-form' id='flex__container--split'>
        {/* <div id='flex__container--divider'/> */}
        <div className='left_col flex__container--child signup'>
          <h1>Account Setup</h1>
          <p className='p-1'>
            This information is used for indentity verification and
            compaitibility calculations. Your email, gender, zip code,
            and date of birth will never be shared publicly,
            however your age and city name will be visible on your
            public profile.
            <br />
            <br />
            <NavLink className='main-color underline-slide' to='/login'>Log in here</NavLink> if you already have an account.

            {/* <Lorem chars='200'/> */}
          </p>
        </div>

        <div className='right_col flex__container--child signup'>
          <div className='top_group'>

            <form id='signup' onSubmit={onSignUp}>
              <div className='sub_left_col'>
                <FormInput
                  labelText='Email'
                  id='email'
                  type='text'
                  stateVar={email}
                  setStateVar={setEmail}
                  required={true}
                  maxLength={150}
                  pattern={/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm}
                  placeholder={''}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />

                <FormInput
                  labelText='First Name'
                  id='first_name'
                  type='text'
                  stateVar={firstName}
                  setStateVar={setFirstName}
                  required={true}
                  restrictSafe={true}
                  placeholder={``}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />


                <FormInput
                  labelText='Last Name'
                  id='last_name'
                  type='text'
                  stateVar={lastName}
                  setStateVar={setLastName}
                  required={true}
                  restrictSafe={true}
                  placeholder={``}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />


                <FormInput
                  labelText='Password'
                  id='password'
                  type='password'
                  stateVar={password}
                  setStateVar={setPassword}
                  required={true}
                  restrictSafe={false}
                  placeholder={''}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />


                <FormInput
                  labelText='Confirm Password'
                  id='repeatPassword'
                  type='password'
                  stateVar={repeatPassword}
                  setStateVar={setRepeatPassword}
                  required={true}
                  restrictSafe={false}
                  placeholder={``}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />
              </div>
              <div>
                <FormInput
                  labelText='Birthdate'
                  id='dob'
                  type='text'
                  stateVar={dob}
                  setStateVar={setDob}
                  restrictSafe={false}
                  required={true}
                  placeholder={`mm/dd/yyyy`}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />

                <FormInput
                  labelText='Zip Code'
                  id='zip_code'
                  type='text'
                  stateVar={zipCode}
                  setStateVar={setZipCode}
                  restrictSafe={false}
                  placeholder={``}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                />

                <FormInput
                  labelText='Gender'
                  id='gender'
                  type='radiolist'
                  stateVar={gender}
                  setStateVar={setGender}
                  restrictSafe={false}
                  required={false}
                  placeholder={``}
                  validationObject={validationObject}
                  setValidationObject={setValidationObject}
                  radioOptions={['Non-Binary', 'Woman', 'Man']}
                />


              </div>
            </form >
          </div>
          <div className='bottom_group'>
            <div className="error-area">
              {errors && errors.map(error => (
                <div className="database-errors">
                  {error.includes(': ') ?
                    error.split(": ")[1]
                    : error
                  }
                </div>
              ))
              }
            </div>
            <ArrowButton
              type='submit'
              formId='signup'
              validationObject={validationObject}
            >
              Submit
            </ArrowButton>
            <ArrowButton
              onClickFunction={onCancel}
            >
              Cancel
            </ArrowButton>

          </div>
        </div>


      </div>
    </>
  );
};

export default SignUpForm;
