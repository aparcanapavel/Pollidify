import React from 'react';

class Choices extends React.Component {

  componentDidMount () {
    this.props.fetchChoices(this.props.pollId)
  }

  render () {
    if (!this.props.choices) {
      return null
    }
    const pollChoices = this.props.choices.map(choice => <li className="choice-response">{choice.response}</li>)


    return (
      <div className="poll-choices">
        <ul className="choice-responses">
          {pollChoices}
        </ul>
      </div>
    )
  }
}


export default Choices;