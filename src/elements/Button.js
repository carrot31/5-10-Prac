import React from "react";
import styled from "styled-components";

const Button = (props) =>{

    const{text, _onClick} = props;

    const styles = {
        text: text,
        _onClick: _onClick,
    }
    return(
        <React.Fragment>
            <Btn {...styles}>{text}</Btn>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text: '텏스트',
    _onClick: ()=>{ },
}

const Btn = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    padding: 12px 0px;
    /* margin: 4px; */
    border: none;
    box-sizing: border-box;
`;

export default Button;