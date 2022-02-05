import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import FormInput from '../Forms/FormInput/FormInput';
import './Login.css'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationObject, setValidationObject] = useState({ test: true });
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form'>
      <div className='left-col'>
          <h1>Log In</h1>
          <form id='login' onSubmit={onLogin}>
            <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
            </div>
              <FormInput
                    labelText='Email'
                    id='email'
                    type='text'
                    stateVar={email}
                    setStateVar={setEmail}
                    maxLength={60}
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
                            placeholder={``}
                            validationObject={validationObject}
                          setValidationObject={setValidationObject}
              />
          </form>
      </div>
      <div className='right-col'>
        <div>
          
        </div>
          <ArrowButton
            type='submit'
            formId='login'
            validationObject={validationObject}
          >
            Log In
        </ArrowButton>

          <ArrowButton
            validationObject={validationObject}
            onClickFunction={()=>{console.log('demo login')}}
          >
            Demo Site
          </ArrowButton>
      </div>
    </div>
  );
};

export default LoginForm;
