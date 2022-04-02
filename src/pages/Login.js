import React from "react";
import { Grid, Text, Input, Button } from "../elements";

const Login = (props) => {
    return(
        <React.Fragment>
            <Grid>
                <Grid>
                    <Text bold size='30px'>로그인</Text>
                </Grid>
                <Grid>
                    <Input label='아이디' placeholder='아이디를 입력해주세오~'></Input>
                    <Input label='비밀번호' placeholder='비밀번호를 입력해주세오~'></Input>
                </Grid>
                <Grid>
                    <Button text='로그인하기'></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Login;