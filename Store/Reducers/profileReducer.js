const initialState = {
        pseudo:"Le Rid",
        idObj: 3,
        sexe:"M",
        dateN:"29-11-1993",
        idTxAct:1,
        idTxCible:3,
        idForm:0,
        taille:1.98,
        poids:90,
        isLogged: false
    }


function updateProfile(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'UPDATE_LOGIN':
    {
          nextState =
          {
            ...state,
            isLogged: action.value
          }
      return nextState || state
    }
    case 'UPDATE_OBJ':
    {
          nextState =
          {
            ...state,
            idObj: action.value
          }
      return nextState || state
    }

    case 'UPDATE_SEXE':
    {
          nextState =
          {
            ...state,
            sexe: action.value
          }
      return nextState || state
    }

    case 'UPDATE_DATEN':
    {
          nextState =
          {
            ...state,
            dateN: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TXACT':
    {
          nextState =
          {
            ...state,
            idTxAct: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TXCIBLE':
    {
          nextState =
          {
            ...state,
            idTxCible: action.value
          }
      return nextState || state
    }

    case 'UPDATE_FORM':
    {
          nextState =
          {
            ...state,
            idForm: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TAILLE':
    {
          nextState =
          {
            ...state,
            taille: action.value
          }
      return nextState || state
    }

    case 'UPDATE_POIDS':
    {
          nextState =
          {
            ...state,
            poids: action.value
          }
      return nextState || state
    }
  default:
    return state
  }
}

export default updateProfile
