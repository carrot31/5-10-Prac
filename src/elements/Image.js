import React from 'react';
import styled from 'styled-components';

const Image = (props) =>{
    const{shape, src,size} = props;
    // console.log(props)

    const styles = {
        src: src,
        size: size, 
    }

    if(shape ==='circle'){
        return(
            <Circle{...styles}></Circle>
        )
    }

    if(shape === 'rectangle'){
        return(
            <RectangleBox>
                <Rectangle {...styles}/>
            </RectangleBox>
        )  
    }
    return(
        <React.Fragment>
            
        </React.Fragment>
    )
}

Image.defaultProps={
    shape: 'circle',
    src: "https://ifh.cc/g/AOA4Wq.jpg",
    size: 36,    

}

const Circle = styled.div`
    --size: ${(props)=> props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url('${(props)=>props.src}');
    background-size: cover;
    margin: 4px;

`;

const RectangleBox = styled.div`
    width: 100%;
    min-height: 250px;

`;

const Rectangle = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url(${(props)=>props.src});
    background-size: cover;
`;

export default Image;