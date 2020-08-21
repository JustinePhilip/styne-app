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
  const firstName = "Justine";
  const lastName = "Okonkwo";

  return(
    <h1> Hello  {lastName + " " + firstName}  you're  welcome</h1>
  )


}



ReactDOM.render(<MyInfo/>,
  // <div><h1>Hello world</h1><p>Hi</p></div>,
  document.getElementById("root")

)

ReactDOM.render(<MyName/>, document.getElementById("name"))

ReactDOM.render(<App/>, document.getElementById("nam"))

ReactDOM.render(<Appp/>, document.getElementById("pop"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
