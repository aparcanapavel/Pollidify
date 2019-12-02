export const selectPolls = (state, pollIds) => {
  let polls = [];
  if(pollIds){
    pollIds.forEach(pollId => {
      polls.push(state.entities.polls[pollId]);
    })
  }

  return polls;
}