import React,{useState,useEffect} from 'react'
import { DragDropContext} from "react-beautiful-dnd";

import initialData from './initial-data'
import List from './components/List'

export default function App() {

  const [state,setState] = useState(initialData);

  useEffect(()=>{
    //console.log(state.columns["column-2"]);
  })

  const onDragEnd = (result) => {
    const { destination, source,draggableId } = result;

    //! 1 Check Destiation
    if(!destination){
      return;
    }

    //! 2 Change location check
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    //const columns = state.columns;


    console.log('COLUME NAME:',source.droppableId)
    console.log('COLUMN STATE:',state);

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]


    if(start === finish){
      const newTaskIds = Array.from(column.taskIds);// ['t1', 't2', 't3', 't4']
      newTaskIds.splice(source.index,1);//Remove Source item
      newTaskIds.splice(destination.index,0,draggableId);//Add item to destination

      const newColumn = {
        ...column,
        taskIds:newTaskIds
      };

      const newState = {
        ...state,
        columns:{
          ...state.columns,
          [newColumn.id]:newColumn,
        },
      };

      console.log('NEW STATE:',newState)
      setState(newState);
      return;
    }

    

  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='container'
      style={{display:'flex'}}
      >
        
        {
          state.columnOrder.map(columnId => {
            const column = state.columns[columnId]; // Column Object
            const tasks = column.taskIds.map(
              taskId => state.tasks[taskId],
            ); // Array of Tasks object

            return <List key={column.id} column={column} tasks={tasks} />;
          })
        }

</div>
    

      {/* <Droppable droppableId={state.columns}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            { <List tasks={state.tasks}/>}
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}

    </DragDropContext>
  )
}
