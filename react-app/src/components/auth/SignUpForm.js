import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import FormInput from '../Forms/FormInput/FormInput';
import ArrowButton from '../Forms/ArrowButton/ArrowButton';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
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
    <form id='signup' onSubmit={onSignUp}>
      {/* <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div> */}


                        <FormInput
                            labelText='First Name'
                            id='firstName'
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
                    id='lastName'
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
                            restrictSafe={false}
                            placeholder={``}
                            validationObject={validationObject}
                            setValidationObject={setValidationObject}
                        />


                <div className="error-area">
                    {errors && errors.map(error => (
                        <div className="database-errors">{error}</div>
                        ))}
      </div>
      <ArrowButton
        type='submit'
        formId='signup'
        validationObject={validationObject}
      >
        Sign Up
      </ArrowButton>

    </form>
  );
};

export default SignUpForm;
