import React, {useState} from 'react';



export default function TextForm(props) {
    const handleUpClick = ()=> {
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
     }
    const handleClrClick = ()=> {
       let newText = '';
       setText(newText);
       props.showAlert("Text has been cleared!", "success");
    }
    const handleRemoveESClick = ()=> {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra Space has been Removed!", "success");
    }
    const handleCopyClick = ()=> {
       
        navigator.clipboard.writeText(text)
        props.showAlert("Text has been copied!", "success");
       
    }
   
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
         <h1>{props.heading}</h1>
         <div className="mb-3">
       <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveESClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text summary</h1>
        <b>
        {/* <p>{text.split(/[^\s]+/).length} words, {text.length} characters</p> */}
        <p>{text.split(" ")[text.split(" ").length-1] === "" ?text.split(" ").length-1:text.split(" ").length }  words and {text.length} character</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>
        </b>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Enter something to preview it here...'}</p>
        </div>


        </>
    )
}
