import { connect } from 'react-redux';
import { fetchPolls } from '../../actions/poll_actions';
import VotedPolls from './voted_polls';
import { selectVotedPolls } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  let polls = selectVotedPolls(state, state.session.user.voted);
  
  return {
    currentUser: state.session.user,
    polls
  }
}

const mdtp = dispatch => {
  return {
    fetchPolls: () => dispatch(fetchPolls())
  }
}


export default connect(mapStateToProps, mdtp)(VotedPolls);