import React from 'react'

export default function About(props) {

    // const [props.mode, setprops.mode] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    // let props.mode = {
    //     color: props.mode ==='dark'?'white':'#042743',
    //     backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    // }

    let mystyle = {
        color : props.mode === 'dark' ? 'white' : 'black' ,
        backgroundColor : props.mode === 'dark' ? 'rgb(8, 4, 4)' : 'white' ,
       
    }
    
    return (
        <div className={`container`} >
            <h1 className={`my-3 `} >About TextMaster</h1>
            <div className={`accordion `} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button `} style={mystyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your text 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                    At TextMaster, we understand the importance of text manipulation and how it can enhance your productivity and creativity. Our browser-compatible text utility app is designed to empower you with a plethora of powerful tools right at your fingertips. Whether you're a professional writer, a student, a developer, or simply someone who deals with text on a daily basis, TextMaster is here to simplify your tasks and make your life easier.

                    </div> 
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                    TextMaster is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                    No matter your browser preference, TextMaster works seamlessly across all major browsers, including Chrome, Firefox, Safari, and Edge.
                    </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
