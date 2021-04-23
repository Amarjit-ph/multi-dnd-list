const initialData = {
  tasks: {
    't1': { id: 't1', content: 'Take out the garbage' },
    't2': { id: 't2', content: 'Watch News' },
    't3': { id: 't3', content: 'Charge my phone' },
    't4': { id: 't4', content: 'Cook dinner' },
    't5': { id: 't5', content: 'Clean my Room' },
    't6': { id: 't6', content: 'Skill development' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['t1','t2','t3','t4','t5','t6'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ['column-1','column-2','column-3'],
};

export default initialData;