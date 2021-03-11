export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let quoteUp = state[state.findIndex(quote => quote.id === action.quoteId)]
      quoteUp.votes += 1
      return [quoteUp]
    case "DOWNVOTE_QUOTE":
      let quoteDown = state[state.findIndex(quote => quote.id === action.quoteId)]
      quoteDown.votes == 0 ? quoteDown.votes : quoteDown.votes -= 1
      return [quoteDown]
    default:
      return state; 
  }
}
