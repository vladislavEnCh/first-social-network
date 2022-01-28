import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  usersUnFollow,
  usersFollow,
  setUsers,
  loader,
} from '../redux/action/users';
import icon from '../images/icon.png';
import * as axios from 'axios';
import Loader from '../components/Loader';
// import { Button } from '../components/Button';

function User() {
  const { users, isFetching } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loader(true));
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')

      .then((resp) => {
        dispatch(setUsers(resp.data.items));
        dispatch(loader(false));
      });
  }, []);

  return (
    <div className="Users">
      <h1 className="Dashbord_Tittle">User</h1>
      <div className="">
        {isFetching ? (
          <Loader />
        ) : (
          users.map((user, index) => {
            return (
              <div key={user.id} className="Users_user">
                <span>
                  <NavLink to={'/Profile/' + user.id}>
                    <div className="icon_for_user">
                      <img alt="1" className="icon_for_user" src={icon} />
                    </div>
                  </NavLink>
                  <div>
                    {user.followed ? (
                      <button
                        onClick={() => dispatch(usersUnFollow(user.id))}
                        className={'profile-card__button button--orange'}>
                        Follow
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(usersFollow(user.id))}
                        className={'profile-card__button button--blue'}>
                        Unfollow
                      </button>
                    )}

                    {/* {user.followed ? ( //Другой вариант с компонентой
                    <Button
                      text={'Follow'}
                      onClick={() => dispatch(usersUnFollow(user.id))}
                    />
                  ) : (
                    <Button
                      text={'Unfollow'}
                      onClick={() => dispatch(usersFollow(user.id))}
                    />
                  )} */}
                  </div>
                </span>
                <span>
                  <span>
                    <div>{user.name}</div>
                    <div>
                      {user.status ? user.status : '(пока нет статуса)'}
                    </div>
                  </span>
                  <span></span>
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default User;
