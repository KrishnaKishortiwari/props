import React, { useState } from "react";

export default function Textform(){
  const clearValue =()=>{
    console.log('hello' + text);
     let newTxt=("");
     setText(newTxt);
  }
  const changeValue =()=>{
    console.log('hello' + text);
     let newTxt=text.toLocaleUpperCase();
     setText(newTxt);
  }
  const handleOnChange = (event) =>{
    console.log('event call');
    setText(event.target.value)
  }

    const [text, setText] = useState('Hello Everyone');
  //  const changeValue =()=>{
    //  console.log('hello');
    //  setText("chnage the value");
    // }
    return(
        
   <>
   <h3>{text}</h3>
   <form>
  <div className="mb-3">
    <label form="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label form="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" form="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
<div className="mb-3">
  <textarea className="form-control" id="box" rows="3" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={changeValue}>Change Value</button>
<button className="btn btn-primary mx-3" onClick={clearValue}>Clear Value</button>
<div className="container my-3">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length}words and {text.length}charecter</p>
</div>
   </>
    );
}