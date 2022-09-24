import React from 'react';
import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input placeholder='username/project (ex: enzozsantana/gitfind)' value={value} onChange={onChange} />
    </InputContainer>
  )
}

export default Input;