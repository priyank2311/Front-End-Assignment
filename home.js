import React, { useState } from "react";
import './style.css';
import Login from "./login";

export default function Home(props) {
  const [url1, setUrl1] = useState();
  const [url2, setUrl2] = useState();
  const [isLoggedOut, setLogout] = useState(false);

  function onChangeView(e, view) {
    const url = e && e.target.value;
    view === "view1" ? setUrl1(url) : setUrl2(url);
  }

  function handleLogout() {
    setLogout(true);
  }

  return (
    <>
      {!isLoggedOut ? (
        <div className="main">
          <div className="main1">
            <div className='userName'>{props.userName}</div>
            <div className="alpha">
              <input className="gama"
                type="text"
                placeholder="View1"
                name="View1"
                onBlur={(e) => onChangeView(e, "view1")}
              ></input>
            </div>
            <div className="alpha">
              <input className="gama"
                type="text"
                placeholder="View2"
                name="View2"
                onBlur={(e) => onChangeView(e, "view2")}
              ></input>
            </div>
            <div className="btn1">
              <button className="bttn1" onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className="main2">
            <div className="frame">
              <iframe className="abcd" src={url1} title="view1"></iframe>
            </div>
            <div className="frame">
              <iframe className="abcd" src={url2} title="view2"></iframe>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}