import React from 'react';
import InputContainer from './styles';

const Input = ({ inputRef, placeholder, errorMsg, ...props }) => (
  <InputContainer>
    <input ref={inputRef} placeholder={placeholder} type="text" {...props} />
    {errorMsg && <span>{errorMsg}</span>}
  </InputContainer>
);

export default Input;
