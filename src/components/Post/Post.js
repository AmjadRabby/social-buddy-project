import React from 'react';
import { useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import { Button, Typography, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '70%',
      margin: 'auto',
      marginTop: '20px',
      backgroundColor: 'lightGray',
      textAlign: 'center',
      boxShadow: '5px 5px 10px gray',
    },
    avatar: {     
      backgroundColor: blue[500],
    },
  }));

const Post = (props) => {
    const {title, id} = props.post;

    const history = useHistory();
    const handleClick = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Typography style={{ textAlign:  'left' }}>
                <IconButton aria-label="home" > 
                    <HomeIcon color="primary" style={{ fontSize: 40}} />                   
                </IconButton>
            </Typography>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {id}
                </Avatar>
                }
                titleTypographyProps={{variant:'h5' }}
                title=   {title}
            />
            <Button color="primary" onClick={() => handleClick(id)}>See More</Button>
        </Card>
    );
};

export default Post;