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

    // Check Destiation
    if(!destination){
      return;
    }

    // Location Change check
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const columns = state.columns;


    console.log('COLUME NAME:',source.droppableId) //column-1
    console.log('COLUMN STATE:',state);


    const newTaskIds = Array.from(column.taskIds);// ['t1', 't2', 't3', 't4']
    newTaskIds.splice(source.index,1);//Remove Source item
    newTaskIds.splice(destination.index,0,draggableId);//Add item to destination

    //console.log(newTaskIds);

    const newColumn = {
      ...column,
      taskIds:newTaskIds
    };

    const newState = {
      ...state,
      columns:{
        ...columns,
        [newColumn.id]:newColumn,
      },
    };

    console.log('NEW STATE:',newState)
    setState(newState);

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
