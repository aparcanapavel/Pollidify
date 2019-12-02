import { connect } from 'react-redux';
import { fetchVotedPolls } from '../../actions/poll_actions';
import VotedPolls from './voted_polls';
import { selectPolls } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    polls: selectPolls(state, state.session.user.voted)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVotedPolls: id => dispatch(fetchVotedPolls(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotedPolls)