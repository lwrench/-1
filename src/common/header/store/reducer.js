const initState = {
  focused: false
}

const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'search_focused':
      return { ...state, focused: true }
    case 'search_blur':
      return { ...state, focused: false }
    default:
      return { ...state }
  }
}

export default headerReducer