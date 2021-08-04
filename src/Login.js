import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./logo1.jpg";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
// import auth from "firebase";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCLick = () => {
    netlifyIdentity.open();
    netlifyIdentity.on("init", (user) => console.log("init", user));
    netlifyIdentity.on("login", (user) => console.log("Welcome", user));
    netlifyIdentity.on("logout", () => console.log("Logged out"));
    netlifyIdentity.on("error", (err) => console.error("Error", err));
    netlifyIdentity.on("open", () => console.log("Widget opened"));
    netlifyIdentity.on("close", () => console.log("Widget closed"));
  };

  // const signIn = (e) => {
  //   e.preventDefault();

  //   const handleCLick = () => {
  //     netlifyIdentity.open()
  //     netlifyIdentity.on('login', user => console.log('Welcome', user));
  //     }

  //   // auth
  //   //   .signInWithEmailAndPassword(email, password)
  //   //   .then((auth) => {
  //   //     history.push("/");
  //   //   })
  //   //   .catch((error) => alert(error.message));
  // };

  // const register = (e) => {
  //   e.preventDefault();

  //   // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((auth) => {
  //     // it successfully created a new user with email and password
  //     if (auth) {
  //       history.push("/");
  //     }
  //   })
  //   .catch((error) => alert(error.message));
  // };

  const [state, setState] = React.useState({
    UncheckedA: true,
    UncheckedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="Healthcare Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email *"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password *"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Remember Password"
            label-size="small"
          />
          <button
            type="submit"
            onClick={handleCLick}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree the Terms and Conditions. Please see our
          privacy notice and out cookies policy.
        </p>

        <button onClick={handleCLick} className="login__registerButton">
          Create your Healthcare account
        </button>
      </div>
    </div>
  );
}

export default Login;
