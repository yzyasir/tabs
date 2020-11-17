import React from 'react';

const TabHeader = (props) => { //this is an annonymous function with props inside the parameter
// Each tab header needs to know its index value, and if its been selected 
// WE ARE GETTING THIS INFO FROM THE STATE FUNCTION IN APP.JS
// AND THEN SINDING THIS CONST BACK TO APP.JS

// below is our inline stylesheets if/or not tab is selcted
    const selected = {
        backgroundColor: 'pink'
    }

    const notSelected = {
        backgroundColor: 'grey'
    }
// above is our inline stylesheets if/or not tab is selcted

    return(
        <div className="App"> 
            {/* Need to connect the click to the clcik in app.js*/}
            {/* we make the onClick an anonomous function because we want to pass it our index*/}
            <button onClick={() => props.clickHandler(props.index)}  style={props.selected ? selected : notSelected} >Tab # {props.index}</button> 
            {/* NOTE: see how selected and index are purple, these must be in the return inside of app.js, go there and ou'll see */}
            {/* In button we made a ternary style where... true is selected : and false is notSelected and then it will display pink or grey depending if true or false (from above) */}
        </div>
    )
}

export default TabHeader; 