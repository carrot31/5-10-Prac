import React from "react";
import { Grid, Button, Text } from "../elements";

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex>
        <Grid>
          <Text bold>HOME</Text>
        </Grid>
        <Grid is_flex>
          <Button text='로그인'></Button>
          <Button text='회원가입'></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
