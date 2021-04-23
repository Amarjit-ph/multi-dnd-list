import React from 'react'
import Task from './Task'
import {Droppable} from 'react-beautiful-dnd'


export default function List({column,tasks}) {
    // console.log(column)
    // console.log(tasks)

    return (
        <div className="border mb-2"
        
        style={{
            width:'220px',
            backgroundColor:'skyblue',

            display:"flex",
            flexDirection:"column"


        }}

        >
            <h4>{column.title}</h4>
            {/* <p>{column.id}</p> */}
            
            <Droppable droppableId={column.id} type={column.id}>
             {(provided, snapshot) => {
                  

                  return(
                    <div

                    style={{
                        padding:'8px',
                        flexGrow:1,
                        minHeight:'300px'
                    }}
                
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        
                         {
                             tasks.map((t,i)=>{
                             return <Task key={t.id} task={t} index={i} />
                             })
                         }
          
                    {provided.placeholder}
                </div>
                )
             }
             
            }
            </Droppable>



            {/* {
                Object.values(tasks).map((task,i)=>{
                    return <Task id={task.id} index={i} content={task.content}/>
                     
                })
            } */}
            
        </div>
    )
    
}