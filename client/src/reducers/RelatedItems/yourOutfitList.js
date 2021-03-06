const yourOutfitListReducer = (state = [], action) => {
  switch ( action.type ) {

  case 'ADD_YOUR_OUTFIT_LIST':
    // let addId = Number.parseInt(action.addingItem.id);
    // let newState = state.slice;
    // // console.log('!state:', state)
    // if (!state.length) {
    //   return [ action.addingItem ];
    // } else {
    //   for (let i = 0; i < state.length; i++) {
    //     if ( state[i].id === addId ) {
    //       return state;
    //     } else {
    //       return [ ...state, action.addingItem ];
    //     }
    //   }
    // }
    return [ ...state, action.addingItem ];

  case 'DELETE_YOUR_OUTFIT_LIST':
    let deleteId = Number.parseInt(action.deletingItemId);
    let deleteState = state.slice();
    for ( let i = 0; i < deleteState.length; i++ ) {
      if ( state[i].id === deleteId ) {
        deleteState.splice(i, 1);
        break;
      }
    }
    return [...deleteState];

  default : return state;
  }
};

export default yourOutfitListReducer;