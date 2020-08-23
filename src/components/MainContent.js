import React from 'react'
import TodoItem from './TodoItem'
import TodoPlan from './TodoPlan'


function MainContent(){

    return(

       <main className = "main">
            <p className="here">here is a paragraph</p>
        
        <div className = "todo-list">
          < TodoItem />
          < TodoItem />
          < TodoItem />
          < TodoItem />
          <TodoItem/>

          <TodoPlan/>
        </div>

          

       </main>

    )
}



export default MainContent