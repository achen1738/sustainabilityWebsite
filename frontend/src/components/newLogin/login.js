import React, { useState } from "react";
// eslint-disable-next-line
import { Redirect } from "react-router-dom";
import "./login.scss";

import Beach from "../../images/beach.jpg";
import Nature from "../../images/nature.jpeg";
import Subway from "../../images/subway.jpg";
import Produce from "../../images/produce.jpg";
import { FiSearch, FiCheckCircle, FiArrowLeftCircle } from "react-icons/fi";
const LoginButton = props => {
  let { setDisplay } = props;
  return (
    <div
      onClick={e => setDisplay({ loginExpanded: true })}
      className="login__button login__button_hollow"
    >
      Login
    </div>
  );
};

const SignUpButton = props => {
  let { setDisplay } = props;

  return (
    <div
      onClick={e => setDisplay({ signUpExpanded: true })}
      className="login__button login__button_filled"
    >
      Sign Up
    </div>
  );
};

const CheckIcon = props => {
  let { classNames } = props;
  return (
    <div className={`check-icon ${classNames}`}>
      <FiCheckCircle />
    </div>
  );
};

const CreateButton = props => {
  let { setDisplay } = props;
  return (
    <div onClick={() => setDisplay({ route: true })} className="create-button">
      Create Account
    </div>
  );
};

const UsernameForm = props => {
  let { isLogin, setDisplay, formState, setForm, description } = props;

  const handleSubmit = event => {
    event.preventDefault();
    if (isLogin) setDisplay({ route: true });
    else setDisplay({ pledgesExpanded: true });
  };

  const handleChange = e => {
    const text = e.target.value;
    if (isLogin) setForm({ loginName: text });
    else setForm({ signUpName: text });
  };

  const handleBack = () => {
    if (isLogin) setDisplay({ loginExpanded: false });
    else setDisplay({ signUpExpanded: false });
  };

  let inputValue = isLogin ? formState.loginName : formState.signUpName;
  return (
    <div className="username-form">
      <h4
        className="username-form__description description"
        onClick={() => handleBack()}
      >
        {description}
        <FiArrowLeftCircle className="icon icon_peach1" />
      </h4>
      <div className="username-form__input">
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={inputValue}
            onChange={e => handleChange(e)}
          />
        </form>
        <FiSearch />
      </div>
    </div>
  );
};

const Pledges = props => {
  let { setDisplay, selectedPledge, setSelectedPledge } = props;
  const pledges = [
    {
      title: "Eat more plant-based meals",
      image: Produce
    },
    {
      title: "Use more alternative transportation",
      image: Subway
    },
    {
      title: "Replace disposables with reusables",
      image: Nature
    }
  ];
  console.log(selectedPledge);

  return (
    <div className="pledges">
      <h4
        onClick={e =>
          setDisplay({ signUpExpanded: true, pledgesExpanded: false })
        }
        className="description"
      >
        S e l e c t a P l e d g e
        <FiArrowLeftCircle className="icon icon_peach1" />
      </h4>
      <div className="pledges__options">
        {pledges.map((pledge, index) => {
          return (
            <div className="pledges__option" key={index}>
              <div className="pledges__background-image">
                <div
                  onClick={e => setSelectedPledge(index)}
                  className="pledges__background-tint"
                />
                <img src={pledge.image} alt="recycle plis" />
              </div>
              <div className="pledges__description description">
                <span>{pledge.title}</span>
              </div>
              {index === selectedPledge ? (
                <CheckIcon classNames="check-icon_right" />
              ) : null}
            </div>
          );
        })}
      </div>
      {selectedPledge !== -1 ? <CreateButton setDisplay={setDisplay} /> : null}
    </div>
  );
};

const Login = props => {
  const [formState, setForm] = useState({
    loginName: "",
    signUpName: ""
  });
  const [selectedPledge, setSelectedPledge] = useState(-1);
  const [displayState, setDisplay] = useState({
    loginExpanded: false,
    signUpExpanded: false,
    pledgesExpanded: false,
    route: false
  });
  let { loginExpanded, signUpExpanded, pledgesExpanded, route } = displayState;
  if (route) return <span>SO SAD</span>;
  //   return <Redirect push to="/sample" />;
  let shownComponent;
  if (!loginExpanded && !signUpExpanded && !pledgesExpanded)
    shownComponent = (
      <div className="login__portal">
        <h4 className="description">s u s t a i n a b i l i t y</h4>
        {/* Should make the filled/hollow a prop passed down */}
        <SignUpButton setDisplay={setDisplay} />
        <LoginButton setDisplay={setDisplay} />
      </div>
    );
  else if (pledgesExpanded)
    shownComponent = (
      <Pledges
        setDisplay={setDisplay}
        selectedPledge={selectedPledge}
        setSelectedPledge={setSelectedPledge}
      />
    );
  else if (signUpExpanded)
    shownComponent = (
      <UsernameForm
        formState={formState}
        setForm={setForm}
        description={"Create a username"}
        setDisplay={setDisplay}
      />
    );
  else if (loginExpanded)
    shownComponent = (
      <UsernameForm
        description={"Login with your username"}
        isLogin
        formState={formState}
        setForm={setForm}
        setDisplay={setDisplay}
      />
    );

  return (
    <div className="login">
      <div className="login__background">
        <img src={Beach} alt="Beach" />
      </div>
      {shownComponent}
    </div>
  );
};

export default Login;
