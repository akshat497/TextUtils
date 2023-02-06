import React, { useState } from 'react'
import "./App.css"


export default function TextUtils(props) {
    const [Text, setText] = useState("type ur text here")
    function uppercase(){
        const newTxt=Text.toUpperCase()
        setText(newTxt)

    }
    function lowercase(){
        const newTxt=Text.toLowerCase()
        setText(newTxt)

    }
    function remove(){
        const newTxt=Text.split(/["  "]+/)
        setText(newTxt.join(' '))

    }
    function Clear(){
        setText("")
    }
    function Copy(){
        navigator.clipboard.writeText(Text)
    }
    function handle(event){
           setText(event.target.value)
    }
  return (
    <div className='container my-3 mx-5' > 
   <label htmlFor="exampleFormControlTextarea1" className="form-label" id='txtarea1' >{props.heading}</label>
   <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={Text} onChange={handle} style={{backgroundColor:props.Dark==='dark'?'grey':'white' ,color:props.Dark==='dark'?'white':'black'}  }> </textarea>
   <button className='btn btn-primary my-3 mx-3' onClick={uppercase} disabled={Text.length===0}> Convert to Uppercase</button>
   <button className='btn btn-primary my-3 mx-3' onClick={lowercase} disabled={Text.length===0}> Convert to lowercase</button>
   <button className='btn btn-primary my-3 mx-3' onClick={remove} disabled={Text.length===0}> remove extra space</button>
   <button className='btn btn-primary my-3 mx-3' onClick={Clear} disabled={Text.length===0}> Clear text</button>
   <button className='btn btn-primary my-3 mx-3' onClick={Copy} disabled={Text.length===0}> Copy text</button>
   <p>you have <b>{Text.split(/\s+/).filter((element)=>{ return(element.length!==0)}).length}</b> words and<strong>{Text.length}</strong> chracters </p>


    </div>
  )
}
