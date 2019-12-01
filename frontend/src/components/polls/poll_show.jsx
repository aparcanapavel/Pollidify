import React from 'react';
import './poll_show.css';
import Plot from 'react-plotly.js';
import ChoicesContainer from "../choices/choices_container";

export default class PollShow extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      votes: [],
      loading: true
    }
  }

  componentDidMount() {
    let votesArr = [];
    if (!this.props.inherited) {
      this.props.fetchPoll(this.props.pollId).then(() => {
        this.props.fetchChoices(this.props.pollId).then(choices => {
          this.setState({choices: choices.choices.data});
        }).then(() => {
          this.state.choices.forEach(choice => {
            this.props.fetchVotes(choice._id).then(votes => {
              votesArr.push(votes.votes.data.length);
              this.setState({votes: votesArr});
              if (this.state.votes.length === this.state.choices.length) {
                this.setState({ loading: false});
              }
            })
          });
        })
      })
    };
  }

  
  render() {
    if (!this.props.poll && this.state.loading) {
      return <h1>loading</h1>
    }

    // this.setState({ loading: false }); 
    let choices = this.props.inherited ? null : <ChoicesContainer pollId={this.props.pollId} history={this.props.history} poll={this.props.poll} />;
    let pollQuestion = this.props.poll.question;
    let responsesArr = [];
    this.state.choices.forEach(choice => {
      responsesArr.push("-" + choice.response + "-");
    });

    let graph = this.props.noGraph ? null : (
      <Plot
        data={[{ type: "bar", x: responsesArr, y: this.state.votes }]}
        layout={{ width: 320, height: 240, title: pollQuestion }}
      />
    );

    return (
      <section className="poll-show-container">
        <h3>{pollQuestion}</h3>
        {choices}
        {graph}
      </section>
    );
  }
}