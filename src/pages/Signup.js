import React from "react";
import {Grid, Text, Input, Button} from '../elements';

const Signup = (props)=>{
    return(
        <React.Fragment>
            <Grid padding='16px'>
                <Grid>
                    <Text bold size='30px'>회원가입</Text>
                </Grid>
                <Grid padding='16px 0px'>
                    <Input 
                    label='아이디' 
                    placeholder='아이디를 입력해주세오~'
                    _onChange={()=>{console.log('회원가입 input')}}
                    ></Input>
                </Grid>    
                <Grid padding='16px 0px'>
                    <Input 
                    label='닉네임' 
                    placeholder='닉네임을 입력해주세오~'
                    _onChange={()=>{console.log('회원가입 input')}}
                    ></Input>
                </Grid>
                <Grid padding='16px 0px'>
                    <Input 
                    label='비밀번호' 
                    placeholder='비밀번호를 입력해주세오~'
                    _onChange={()=>{console.log('회원가입 input')}}
                    ></Input>
                </Grid>
                <Grid padding='16px 0px'>
                    <Input 
                    label='비밀번호 확인' 
                    placeholder='비밀번호를 다시 입력해주세오~'
                    _onChange={()=>{console.log('회원가입 input')}}
                    ></Input>
                </Grid>    
                
                    <Button text='로그인하기' ></Button>
            </Grid>
        </React.Fragment>
    )
}

export default Signup;