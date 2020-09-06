import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams, Link } from 'react-router-dom';
import Comment from '../Comment/Comment';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '70%',
      margin: 'auto',     
      marginTop: '10px',
      backgroundColor: 'lightGray',
      textAlign: 'center',
      boxShadow: '5px 5px 10px gray',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[500],
    },
  }));

const PostDetails = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({})
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [comment, setComment] = useState([])
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    
    const {title, body} = post;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
            <Card className={classes.root} >
                <Typography style={{ textAlign:  'left' }}>
                    <IconButton aria-label="home" > 
                        <Link  to="/home"> <ArrowBackIcon color="primary" style={{ fontSize: 30 }}/> </Link>                   
                    </IconButton>
                </Typography>               
                <CardHeader  
                titles= "Title"
                titleTypographyProps={{variant:'h5' }}
                title= {title}
                subheader="September 5, 2020"
                />               
                <CardContent>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="add to like">
                    <ThumbUpAltIcon />
                </IconButton>
                
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">                    
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <Typography style={{fontWeight: 'bold'}}> Comment</Typography>
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>                   
                    <Typography paragraph  variant="body2">                    
                        {
                            comment.map(com => <Comment key={com.id} comment={com}></Comment>)
                        }
                    </Typography>            
                </CardContent>
                </Collapse>
            </Card>
    );
};

export default PostDetails;