import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from './components/MyInfo'
import MyName from './components/MyName'

// function MyApp(){


//   return(
 
//       <ul>
//       <li>One</li>
//       <li>Two</li>
//       <li>Three</li>
//     </ul>
  

//   )
// }

function Appp(){
  // const firstName = "Justine";
  // const lastName = "Okonkwo";

  const date = new Date(2020, 5, 20, 1)
  const hours = date.getHours()
  let timeOfDay
  const look ={
    fontSize: 50,
  }

  if(hours < 12){
    timeOfDay = "morning"
    look.color = "#ff9012"
  }else if(hours >= 12 && hours < 17){
    timeOfDay = "Afternoon"
    look.color = "#003ff6"
  }else{
    timeOfDay = "night"
    look.color = "#00df"
  }

  // const look ={
  //   color:"#ff9012", 
  //   backgroundColor:"#00dff6",
  //   fontSize: 50,
  //   fontWeight: "bold",
  //   textTransform: "upper"
  // }
  return(
    <h1 style = {look}> Good  {timeOfDay} you're  welcome</h1>
  )


}



ReactDOM.render(<MyInfo/>,
  // <div><h1>Hello world</h1><p>Hi</p></div>,
  document.getElementById("root")

)

ReactDOM.render(<MyName/>, document.getElementById("name"))

ReactDOM.render(<App/>, document.getElementById("nam"))

ReactDOM.render(<Appp/>, document.getElementById("pop"))
// ReactDOM.render(<now/>, document.getElementById("now"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
