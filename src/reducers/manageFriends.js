export function manageFriends(state = {numberOfPresents: 0}, action){
  switch (action.type) {
    case "Increase":
      return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})
    default:
      return state; 
  }
}
