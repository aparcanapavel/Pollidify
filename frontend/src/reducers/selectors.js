export const selectPolls = (state, pollIds) => {
  let polls = [];
  if(pollIds){
    pollIds.forEach(pollId => {
      polls.push(state.entities.polls[pollId]);
    })
  }

  return polls;
}

export const selectVotedPolls = (state, pollIds) => {
  let polls = [];
  if (pollIds) {
    pollIds.forEach(pollId => {
      if (!!state.entities.polls[pollId]) {
        polls.push(state.entities.polls[pollId]);
    }})
  }
  return polls;
}