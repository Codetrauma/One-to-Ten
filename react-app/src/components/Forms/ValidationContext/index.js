import { createContext, useState, useContext } from 'react';

export const FormValidationContext = createContext();
export const useFormValidation = () => useContext(FormValidationContext);

export default function FormValidationProvider(props) {
    const [validationObject, setValidationObject] = useState({ exists: true});

  return (
    <FormValidationContext.Provider
      value={{
          validationObject,
          setValidationObject
      }}
    >
      {props.children}
    </FormValidationContext.Provider>
  )
}
