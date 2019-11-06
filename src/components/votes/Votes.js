import React, { useState } from 'react'
import MaterialIcon from 'material-icons-react'
import './Votes.css'

const Votes = props => {
	let [votes, vote] = useState(props.data.votes)
	let [userVote, userReVote] = useState(0)

	const handleVote = newVote => {
		if (Math.abs((userVote += newVote)) <= 1) {
			vote((votes += newVote))
			userReVote((userVote += newVote))
		}
	}

	return (
		<div className="vote-box">
			<MaterialIcon
				size="medium"
				onClick={() => handleVote(1)}
				icon="arrow_upward"
			/>
			{votes}
			<MaterialIcon
				size="medium"
				onClick={() => handleVote(-1)}
				icon="arrow_downward"
			/>
		</div>
	)
}

export default Votes
