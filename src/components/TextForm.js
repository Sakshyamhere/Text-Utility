import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
       props.showAlert("Text converted to Uppercase", "success")
    }


    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
       props.showAlert("Text converted to Lowercase", "success")
        
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success")
      
    }

    const handleBinaryClick = () => {
      let newText = '';
        for (var i = 0; i < text.length; i++) {
            newText += text[i].charCodeAt(0).toString(2) + " " ;
        }
        props.showAlert("Converted to Binary", "success")

        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
        
    }

    
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Text copied to clipboard", "success")
       
    }

    const handleStringClick = () => {
        const newText = text
          .split(' ')
          .map(bin => {
           
            if (/^[01]+$/.test(bin)) {
              
              props.showAlert("Converted to String", "success") 
             return String.fromCharCode(parseInt(bin, 2));

            } else {
              
              
              return bin;
            }
          }).join('')
        
      
        setText(newText);
      };
    
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed", "success")
       
    }

    
    const [text, setText] = useState(''); 
    
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#120404':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleCopy}>Copy Text to ClipBoard</button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
              <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleBinaryClick}>Convert to Binary</button>
              <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleStringClick}>Convert to String</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>Clear Text</button>
           

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
