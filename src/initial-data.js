const initialData = {
  tasks: {
    '1': { id: '1', content: 'Take out the garbage' },
    '2': { id: '2', content: 'Watch my favorite show' },
    '3': { id: '3', content: 'Charge my phone' },
    '4': { id: '4', content: 'Cook dinner' },
    '5': { id: '5', content: 'Clean dinning table' },
    '6': { id: '6', content: 'Skill development' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['1','2','3','4','5','6'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData;