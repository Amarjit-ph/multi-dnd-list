import React from 'react'
import {Draggable} from "react-beautiful-dnd";

export default function Task({task,index}) {
    return (

        <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
          className="card mb-2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
               <div className="p-3">
               <p className='m-0 h6'> Id : {task.id}</p>
            <p className='m-0 h5'> {task.content} </p>
  </div>
            
          </div>
        )}
      </Draggable>
      
        
    )
}
