import React, { useEffect,  useState} from 'react';

const Comment = (props) => {
  const {name, email, body, id} = props.comment;
  const commentStyle ={
    display: 'flex',
    backgroundColor: 'lightGray',
    textAlign: 'left',
    padding: '15px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '2px 2px  8px gray'
  }
const imageStyle = {
  width: '50px',
  margin: '15px', 
  boxShadow: '1px 1px 5px black', 
  borderRadius: '50px'
}

  const [photo, setPhoto] = useState({})
  useEffect( () => {
      const url = `https://randomuser.me/api/?results=${id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setPhoto(data.results[0].picture))
  }, [])

 
  return (
    <div style={commentStyle}>
        <div >
          <img style={imageStyle} src={photo.medium} alt=""/>
        </div>
        <div>
          <h4>Name: {name}</h4>
          <p>Email: {email}</p>
          <p>{body}</p>
        </div>
    </div>
  );
};

export default Comment;