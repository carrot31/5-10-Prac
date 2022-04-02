import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

const Input = (props) =>{
    const{label, text, placeholder, _onChange} = props;

    const styles = {
        label: label,
        text: text,
        placeholder: placeholder,
        _onChange: _onChange,
    }
    return(
        <React.Fragment>
            <Text>{label}</Text>
            <InputBox {...styles}></InputBox>
        </React.Fragment>
    )
}

Input.defaultProps = {
    _onChange: ()=>{},
    label: '라벨',
    placeholder: '텍스트를 입력해주세오',
    type: 'text',

}

const InputBox = styled.input`
    width: 100%;
    padding: 12px 4px; 
    box-sizing: border-box;
    border: 1px solid black;

`;

export default Input;