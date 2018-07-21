import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render () {
    return (
      <div>
        Hi
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, polls, users }, { match }) {
  const { id } = match.params
  const poll = polls[id]
  const author = users[poll.author]
  const user = users[authedUser]
  // If user tries to access a poll that doesn't exist
  if (!poll) {
    return {
      poll: null
    }
  }

  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
    if (vote !== null) {
      return vote[0]
    }

    return poll[key].includes(authedUser)
      ? key
      : vote
  }, null)



  return {
    poll,
    author,
    user,
  }
}

export default connect(mapStateToProps)(Poll)