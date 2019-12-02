import { connect } from 'react-redux';
import { fetchVotedPolls } from '../../actions/poll_actions';
import VotedPolls from './voted_polls';

const mapStateToProps = (state) => {
  return {
    polls: Object.values(state.entities.polls),
    currentUser: state.session.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVotedPolls: id => dispatch(fetchVotedPolls(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotedPolls)