import React, { useState } from "react";

export default function StyleBindingComponent() {
  const [backcolor, setBlackColor] = useState("");
  const [textcolor, setTextColor] = useState("");
  const [alignment, setAlignment] = useState("");

  function HandleBackground(event) {
    setBlackColor(event.target.value);
  }
  function HandleTextColor(event) {
    setTextColor(event.target.value);
  }

  function HandleAlignment(event) {
    setAlignment(event.target.value);
  }

  return (
    <div className="container-fluid">
      <dl>
        <dt>BackGround Color </dt>
        <dd className="col-6">
        <select onChange={HandleBackground}>
            <option value='black'>black</option>
            <option value='pink'>pink</option>
            <option value='green'>green</option>
          </select>
        </dd>
        <dt> Color </dt>
        <dd>
          <select onChange={HandleTextColor}>
            <option value='white'>white</option>
            <option value='pink'>pink</option>
            <option value='green'>green</option>
          </select>
        </dd>
        <dt>Alignment</dt>
        <dd></dd>
        <input onChange={HandleAlignment} type="radio"  name="align" value='left'/> Male
        <input onChange={HandleAlignment} type="radio"  name="align" value='right' /> Female
        <input onChange={HandleAlignment} type="radio"  name="align" value='center' /> Other
      </dl>
      <h1
        style={{
          backgroundColor: backcolor,
          color: textcolor,
          textAlign: alignment,
        }}
      >
        Style Binding in React
      </h1>
    </div>
  );
}
