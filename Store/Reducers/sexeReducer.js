const initialState = { sexe: "" }


function toggleSexe(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_SEXE':
          nextState =
          {
            ...state,
            sexe: action.value
          }
      return nextState || state
  default:
    return state
  }
}

export default toggleSexe
