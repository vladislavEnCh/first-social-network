import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Burger.scss';

function Dashboard() {
  axios.defaults.withCredentials = true;
  const [toogleBurger, settoogleBurger] = useState(true);
  const handlerBurger = () => {
    settoogleBurger(!toogleBurger);
  };

  React.useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me/', {
        withCredentials: true,
      })

      .then((resp) => {
        console.log(resp);
      });
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard_button">
        <button
          onClick={handlerBurger}
          className={toogleBurger ? 'burger_button open' : 'burger_button '}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {
        <div
          className={toogleBurger ? 'dashboard_menu open' : 'dashboard_menu'}>
          <div className="user">
            <img src="./images/avatar.png" alt="" />
            <h3>Vladislav</h3>
            <p>Pro Member</p>
          </div>

          <div className="links">
            <Link to="Profile/2" className="links">
              {' '}
              <div className="link">
                <img src="./images/twitch.png" alt="" />
                <h2>Profile</h2>
              </div>
            </Link>
            <Link to="Chat" className="links">
              <div className="link">
                <img src="./images/steam.png" alt="" />
                <h2>Chat</h2>
              </div>
            </Link>
            <Link to="User" className="links">
              <div className="link">
                <img src="./images/steam.png" alt="" />
                <h2>Friends/User</h2>
              </div>
            </Link>
            <Link to="Music" className="links">
              <div className="link">
                <img src="./images/upcoming.png" alt="" />
                <h2>Music</h2>
              </div>
            </Link>
            <Link to="Setting" className="links">
              <div className="link">
                <img src="./images/library.png" alt="" />
                <h2>Setting</h2>
              </div>
            </Link>
          </div>
          <Link to="/" className="links">
            <div className="pro">
              <h2>Register</h2>
              <img src="./images/controller.png" alt="" />
            </div>
          </Link>
        </div>
      }
    </div>
  );
}

export { Dashboard };
