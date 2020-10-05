export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now(),
      completeBy: "3 Hours",
      itemArray: [],
    },
    
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD-TODO":
        return [...state, action.payload];
      case "COMPLETED":
        return state.map((e) =>
          e.id === action.id ? { ...e, completed: !e.completed } : e
        );
      case "REMOVE":
        return state.filter((e) => !e.completed);
  
      default:
        return state;
    }
  };
