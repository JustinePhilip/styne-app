import React from 'react';
import Contact from './components/Contact';
import house from './house.png';

function App(){
  return(
 <div className="contact"> 
      <Contact name="Emele Emeka"
              imgUrl="house.png"
              email="EmeleE@gmail.com"
              phone="07054234509"
      />

    <Contact name="Eze Peace"
              imgUrl="house.png"
              email="Ezepeace90@gmail.com"
              phone="08054234509"
    />
    
    <Contact name="Kalu Uche"
              imgUrl="house.png"
              email="kaluche@gmail.com"
              phone="09054234509"
    />

    <Contact name="Agwu Uka"
              imgUrl="house.png"
              email="Agwu4real@gmail.com"
              phone="08154234509"
    />
  </div>
  )
}
export default App;
