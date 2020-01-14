import React, { useState } from "react";

const FormField = () => {
  //use state hooks to set initial state for form elements
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    about: "",
    setFirst: "First Name:",
    setLast: "Last Name:",
    setEmail: "Email:",
    setPOB: "Place Of Birth:",
    setPhone: "Phone#:",
    setfavFood: "Favorite Food:",
    isSubmited: false
  });
  //use state hooks to set initial state for results from the form
  const [badgeList, setBadgeList] = useState([]);
  // handleChange to update state with the form info
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    //   console.log(evt.target.name + " " + evt.target.value);
  }

  //onsubmit pushing results of the form to the badgelist state array
  function submitAndChange(evt) {
    evt.preventDefault(); //prevents the natural form behavior from resetting

    setBadgeList([
      ...badgeList,
      {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        placeOfBirth: state.placeOfBirth,
        phone: state.phone,
        favoriteFood: state.favoriteFood,
        about: state.about
        // isSubmited: false,
      }
    ]);
  }

  return (
    <div>
      <h1></h1>
      <div>
        <form
          style={{
            borderRadius: "10px",
            padding: "5px",
            border: "solid 2px black",
            display: "flex",
            height: "300px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center",
            margin: "10px",
            backgroundColor: "aqua"
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: "0 auto"
            }}
          >
            <input
              type="text"
              className="formInput"
              value={state.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder={state.setFirst}
            />
            <input
              type="text"
              className="formInput"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              placeholder={state.setLast}
            />
            <input
              type="text"
              className="formInput"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder={state.setEmail}
            />
            <input
              type="text"
              name="placeOfBirth"
              className="formInput"
              value={state.placeOfBirth}
              onChange={handleChange}
              placeholder={state.setPOB}
            />
            <input
              type="number"
              name="phone"
              className="formInput"
              value={state.phone}
              onChange={handleChange}
              placeholder={state.setPhone}
            />
            <input
              type="text"
              name="favoriteFood"
              value={state.favoriteFood}
              className="formInput"
              onChange={handleChange}
              placeholder={state.setfavFood}
            />
          </div>
          <textarea
            className="textInput"
            name="about"
            value={state.about}
            onChange={handleChange}
          ></textarea>

          <button
            className="formSubmit"
            name="submit"
            onClick={submitAndChange}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {" "}
        {//grabbing state array and mapping it to the props in the badge components
        badgeList.length > 0
          ? badgeList.map(badge => {
              return (
                <Badge
                  fName={badge.firstName}
                  lName={badge.lastName}
                  email={badge.email}
                  num={badge.phone}
                  pob={badge.placeOfBirth}
                  about={badge.about}
                  faveFood={badge.favoriteFood}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
const Badge = props => {
  return (
    <div>
      <div
        style={{
          borderRadius: "10px",
          border: "solid 2px black",
          display: "flex",
          height: "290px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          flexWrap: "wrap",
          textAlign: "center",
          backgroundColor: "lime"
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            margin: "0 auto"
          }}
        >
          <div className="badgeInput">{props.fName}</div>
          <div className="badgeInput">{props.lName}</div>
          <div className="badgeInput">{props.email}</div>
          <div className="badgeInput">{props.pob}</div>
          <div className="badgeInput">{props.num}</div>
          <div className="badgeInput">{props.faveFood}</div>
          <div className="textWrapper">{props.about}</div>
        </div>
      </div>
    </div>
  );
};
export default FormField;

//<Badge
//     //       fname={badge.firstName}
//     //       lname={badge.lastName}
//     //       email={badge.email}
//     //       num={badge.phone}
//     //       pob={badge.placeOfBirth}
//     //       faveFood={badge.favoriteFood}
//     //       about={badge.about}
//     //     />
