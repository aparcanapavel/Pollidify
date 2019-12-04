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
      loading: true,
      time: new Date(),
      timeRemaining: "",
      countDownDate: null
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    let votesHash = {};

    if (!this.props.inherited) {
      this.props.fetchPoll(this.props.pollId).then(() => {
        this.props.fetchChoices(this.props.pollId).then(choices => {

          this.setState({
            ...this.state,
            choices: Object.values(choices.choices.data)
          }, () => {
            this.state.choices.forEach(choice => {
              this.props.fetchVotes(choice._id).then(votes => {
                votesHash[choice.response] = Object.values(votes.votes.data).length;

                if (Object.values(votesHash).length === this.state.choices.length) {
                  this.setState({votes: votesHash});
                  this.setState({
                    countDownDate: new Date(this.props.poll.expiration_date).getTime()
                  });
                  this.intervalId = setInterval(this.tick, 1000);
                  this.setState({ loading: false });
                }
              })
            })
          });
        })
      })
    };
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    
    let rightNow = new Date().getTime();
    let distance = this.state.countDownDate - rightNow;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let remaining =
     "Expires in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    this.setState({ timeRemaining: remaining });
  }
  
  render() {
    if (!this.props.poll && this.state.loading) {
      return <h1>loading</h1>
    }

    let choices = (this.props.inherited || (new Date(this.props.poll.expiration_date) < new Date())) ? null : <ChoicesContainer pollId={this.props.pollId} history={this.props.history} poll={this.props.poll} />;
    let pollQuestion = this.props.poll.question;
    let responsesArr = [];
    let votesArr = [];
    this.state.choices.forEach(choice => {
      
      responsesArr.push("-" + choice.response + "-");
      votesArr.push(this.state.votes[choice.response]);
    });

    let expirationDate;
    if (new Date(this.props.poll.expiration_date) > new Date()) {
      expirationDate = (
        <h4 className="unexpired">
          {this.state.timeRemaining}
        </h4>
      );
    } else {
      expirationDate = <h4 className="expired">EXPIRED</h4>
    }

    let graph = (this.props.noGraph || new Date(this.props.poll.expiration_date) > new Date()) ? null : (
      <div>
        <Plot
          data={[{ type: "bar", x: responsesArr, y: votesArr, text: votesArr.map(String), textposition: 'auto', hoverinfo: 'none', 
            marker: {color: 'rgb(115, 153, 139)', opacity: 0.6, line: { color: 'rgb(8,48,107)', width: 1.5}}, base: 0
          }]}
          className="poll-graph"

          layout={{ width: 500, height: 360, title: pollQuestion, yaxis: {range: [0, (Math.max(...votesArr) + 1)]}}}
        />
        <h1 className="total-votes">Total Votes: {votesArr.reduce((a,b) => a + b, 0)}</h1>
      </div>
    );

    return (
      <div className="poll-show-render">
        <img className="poll-show-image" src={"/bps.png"}/>

      <section className="poll-show-container">
        <h3>{pollQuestion}</h3>
        {expirationDate}
        {choices}
        <div className="poll-show-graph">
          {graph}
        </div>
      </section>
      </div>
    );
  }
}