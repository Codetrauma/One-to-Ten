import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import FormInput from '../Forms/FormInput/FormInput';



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import * as sessionActions from '../../../store/session';
// import { NavLink, useHistory } from "react-router-dom";
// import FormInput from "../FormInput";
// // import './SignInRegisterCombo.css';

// const SampleLogin = ({ newUserDefault }) => {

//     const dispatch = useDispatch()
//     const history = useHistory()

//     // const sessionUser = useSelector((state) => state.session.user);

//     useEffect(() => {
//         setNewUser(newUserDefault)
//     }, [newUserDefault])

//     const [newUser, setNewUser] = useState(true)
//     const [email, setEmail] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [validationObject, setValidationObject] = useState({ test: true });
//     const [databaseErrors, setDatabaseErrors] = useState([])

//     const handleSignUpSubmit = (e) => {


//         e.preventDefault();

//         if (newUser) {

//             if (password === confirmPassword) {
//                 setValidationObject({ test: true });
//                 console.log('dispatch sign up')
//                 // return dispatch(sessionActions.signup({ email, firstName, lastName, password, confirmPassword }))
//                 //     .catch(async (res) => {
//                 //         console.log(`sign up problem`)
//                 //         const data = await res.json();
//                 //         if (data && data.errors) setDatabaseErrors(data.errors);
//                 //     });
//             }
//             return setDatabaseErrors(['Confirm Password field must be the same as the Password field']);
//         } else {

//             setValidationObject({ test: true });
//             console.log('dispatch login')

//             // return dispatch(sessionActions.login({ email, password })).catch(
//             //     async (res) => {
//             //         const data = await res.json();
//             //         if (data && data.errors) setDatabaseErrors(data.errors);
//             //     }
//             // );
//         }
//     }



//     return (
//     <div className='form-container'>
//             <h2>
//                 {newUser ? 'Sign Up' : 'Log In'}
//       </h2>

//       <form onSubmit={handleSignUpSubmit} className='sign-in-register-combo'>
//                 <div className="all-inputs">

//                 {newUser &&
//                         <FormInput
//                             labelText='First Name'
//                             id='firstName'
//                             type='text'
//                             stateVar={firstName}
//                             setStateVar={setFirstName}
//                             required={true}
//                             restrictSafe={true}
//                             placeholder={`Don't think too hard.`}
//                             validationObject={validationObject}
//                             setValidationObject={setValidationObject}
//                         />
//                     }
//                 { newUser &&
//                     <FormInput
//                     labelText='Last Name'
//                     id='lastName'
//                     type='text'
//                     stateVar={lastName}
//                     setStateVar={setLastName}
//                     required={true}
//                     restrictSafe={true}
//                     placeholder={`Sometimes we're formal here.`}
//                     validationObject={validationObject}
//                     setValidationObject={setValidationObject}
//                     />
//                     }

//                  <FormInput
//                       labelText='Ermail'
//                       id='email'
//                       type='text'
//                       stateVar={email}
//                       setStateVar={setEmail}
//                       required={true}
//                       maxLength={150}
//                       pattern={/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm}
//                       placeholder={'A real one, please'}
//                       validationObject={validationObject}
//                       setValidationObject={setValidationObject}
//                 />
//                  <FormInput
//                       labelText='Password'
//                       id='password'
//                       type='password'
//                       stateVar={password}
//                       setStateVar={setPassword}
//                       required={true}
//                       restrictSafe={false}
//                       placeholder={'I promise we encrypt this'}
//                       validationObject={validationObject}
//                     setValidationObject={setValidationObject}
//                     />

//                     {newUser &&
//                         <FormInput
//                             labelText='Confirm Password'
//                             id='confirmPassword'
//                             type='password'
//                             stateVar={confirmPassword}
//                             setStateVar={setConfirmPassword}
//                             restrictSafe={false}
//                             placeholder={`Remember 2 seconds ago?`}
//                             validationObject={validationObject}
//                             setValidationObject={setValidationObject}
//                         />
//                     }

//                  <lottie-player id="firstLottie" src="https://assets8.lottiefiles.com/packages/lf20_lx9kraog.json" style="width:400px; height: 400px;">`asfda`</lottie-player>
//                 </div>
//                 <button type='submit'>Submit</button>
//                 <button onClick={((e) => {
//                     // dispatch(sessionActions.login({
//                     //     email:'reallyHarryTruman@bing.com',
//                     //     password:'theSStandsForS!!!'
//                     // }))
//                     console.log('dispatch dmeo login')
//                 })}>HEY LOOK, FREE DONUTS.</button>
//             </form>
//             <div className="login-buttons">
//             <div onClick={() => {

//                 let booleanValue = !newUser
//                 setNewUser(booleanValue)

//             }}>
//                 {newUser && <NavLink to='/login'>Visiting again? Log in here</NavLink>}
//                 {!newUser && <NavLink to='/signup'>First time? Sign up here</NavLink>}
//             </div>

//                 </div>
//       </div>
//   );
// };

// export default SampleLogin;


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

  // const updateEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const updatePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
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

        {/* <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        /> */}
      {/* <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        /> */}
      <button className='arrow-before' type='submit'>
        Login

      </button>
      {/* </div> */}
    </form>
  );
};

export default LoginForm;
