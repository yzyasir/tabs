import React, {useState} from 'react';
import './App.css';
import TabHeader from './components/TabHeader' //now we have imported our component back to our app.js

function App() {
// Created a state that has indexs(the tabs), the text for each tab, and whether or not they are selected
// WHAT IS STATE
      const [tabs, setTabs] = useState([
        {
          index: 0,
          text: "Hello first tab",
          selected: true
          // this tab is true because we want it not  to be selected by default
        },
        {
          index: 1,
          text: "Hello second tab",
          selected: false
          // this tab is true because we want it not to be selected by default
        },
        {
          index: 2,
          text: "Hello third tab",
          selected: false
          // this tab is false because we want it not to be selected by default
        }
      ])


      // control is coming from the app.js, thats why we put the onclickhandler here
      const clickHandler = (clickedIndex) => {
        // console.log('you clicked tab number ${i}')
        tabs.map((tab, i)=> {
          if(clickedIndex === i){
            let t = tab;
            // we are setting t equal to tab at the index of i
            // tab is an individual item in the array
            t.selected = true;
            // tab selected is true
            setTabs([...tabs.slice(0,i),
            t,
          ].concat(tabs.slice(i +1)))
          }
        })
      }


      return (
        <div className="App">
          {
          tabs.map((tab, i) => { 
          // NOTES: We use map to cycle through our array/object in state, it seems to cycle through the whole state function
          // We make an annonomous function, MEANING A FUNCTION WITHOUT A NAME
          // what do we want to put in? Index 
            return <TabHeader index={i} key={i} selected={tab.selected} clickHandler={clickHandler}/>
          // key is just to help map, map things out, it can still work without a key, but it may complain in the console. 
          // need to return, otherwise it says failed to compile 
          // put clickHandler here in the tabheader so that when it is clicked it activates he function 
            }) 
          } 
          {/* They take our index and selected (boolean) from our props. Our components are just guidlines for a higher level of control (which is our app.js)*/}
          {/* index and selected are from the states above */}
          {
            tabs.map((tab, i) => {
              return tab.selected ? <p key = {i} >{tab.text}</p> : "";
            // Now we are cycling through the text
            // NOTE: we are returning a p tag to display text
            })
          }
        </div>
  );
}

export default App;
