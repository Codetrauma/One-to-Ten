import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Navlink, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import FormInput from '../Forms/FormInput/FormInput';
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import Lorem from '../Lorem/Lorem';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [gender, setGender] = useState('');
  const [validationObject, setValidationObject] = useState({ test: true });
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  // const updateUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  // const updateEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const updatePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const updateRepeatPassword = (e) => {
  //   setRepeatPassword(e.target.value);
  // };

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
                            stateVar={birthdate}
                            setStateVar={setBirthdate}
                            restrictSafe={false}
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
                            placeholder={``}
                            validationObject={validationObject}
                            setValidationObject={setValidationObject}
                            radioOptions = {['Non-Binary', 'Woman', 'Man']}
                   />


          </div>
          </form >
        </div>

      <div className='right_col flex__container--child signup'>
        <div className='top_group'>
          <p className='p-1'>
              This information is used for indentity verification and
              compaitibility calculations. Your email, gender, zip code,
              and date of birth will never be shared publicly,
              however your age and city name will be visible on your
              public profile.
            <br />
            <br/>
            <NavLink className='main-color underline-slide' to='/login'>Log in here</NavLink> if you already have an account.

           {/* <Lorem chars='200'/> */}
            </p>
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
                formId='signup'
                validationObject={validationObject}
              >
                Submit
          </ArrowButton>
            <ArrowButton
                onClickFunction={(e)=>{console.log('cancel')}}
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
