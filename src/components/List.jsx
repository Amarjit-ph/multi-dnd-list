import React from 'react'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'


export default function List({column,tasks}) {
    // console.log(column)
    // console.log(tasks)

    return (
        <div>
            <h2>{column.title}</h2>
            {/* <p>{column.id}</p> */}
            
            <Droppable droppableId={column.id} type={column.id}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
        {
            tasks.map((t,i)=>{
                return <Task key={t.id} task={t} index={i} />
            })
        }
      
      {provided.placeholder}
    </div>
  )}
</Droppable>



            {/* {
                Object.values(tasks).map((task,i)=>{
                    return <Task id={task.id} index={i} content={task.content}/>
                     
                })
            } */}
            
        </div>
    )
    
}