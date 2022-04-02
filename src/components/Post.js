import React from "react";
import { Grid, Image, Text } from "../elements/index";

const Post = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape='circle' src={props.src}></Image>
          <Text bold>{props.user_info.user_name}</Text>
          <Text bold>{props.insert_dt}</Text>
        </Grid>
        <Grid padding='16px'>
          <Text>{props.contents}</Text>
        </Grid>
        <Grid >
          <Image shape='rectangle' src={props.src}></Image>
        </Grid>
        <Grid padding='16px'>
          <Text bold>{props.comment_cnt}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "mandu31",
    user_profile: "https://ifh.cc/g/AOA4Wq.jpg",
  },
  image_url: "https://ifh.cc/g/AOA4Wq.jpg",
  contents: "토끼 왕귀엽",
  comment_cnt: 10,
  insert_dt: "2022-04-02 10:00:00",
};

export default Post;
