import React from 'react';
import styled from 'styled-components';


const Text = (props) =>{

    const{bold, color, size, children} = props;
    // console.log(props)

    const styles = {
        bold: bold,
        color: color,
        size: size,
    }
    return(
        <React.Fragment>
            <P {...styles}>{children}</P>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: null,
    bold: false,
    color: 'black',
    size: '14px',
}

const P = styled.p`
    color: ${(props)=> props.color};
    font-size: ${(props)=> props.size};
    font-weight: ${(props) => props.bold? '600': '400'};
`;

export default Text;