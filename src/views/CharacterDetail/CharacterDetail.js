import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import axios from 'axios';
import './CharacterDetail.css';

function CharacterDetail({ match }) {
	// console.log('MATCH', match);
	let charID = match.params.id;
	const [character, setCharacter] = useState([]);
	console.log('PERSONAJE', character);
	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${charID}`).then((res) =>
			// console.log(res.data)
			setCharacter(res.data)
		);
	}, [charID]);

	return (
		<div className='CharacterDetail' style={{ padding: 40 }}>
			<h1>Character Detail</h1>
			{character.map((char) => {
				return (
					<Card key={char.char_id}>
						<Image src={char.img} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{char.name}</Card.Header>
							<Card.Meta>
								<span className='date'>{char.birthday}</span>
							</Card.Meta>
							<Card.Description>{char.nickname}</Card.Description>
						</Card.Content>
					</Card>
				);
			})}
		</div>
	);
}

export default CharacterDetail;
