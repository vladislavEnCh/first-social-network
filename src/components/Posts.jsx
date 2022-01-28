import React from 'react';
import { Post } from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { closePost } from '../redux/action/addPost';

function Posts() {
  const dispatch = useDispatch();
  const handleClose = (id) => {
    // console.log(id);
    dispatch(closePost(id));
  };
  const state = useSelector((state) => state.addPost);
  // console.log(state);

  return (
    <div className="cards">
      {state.items.map((item) => {
        return (
          <Post
            text={item.postText}
            id={item.id}
            tittle={item.postTittle}
            onClick={(id) => handleClose(id)}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default Posts;
