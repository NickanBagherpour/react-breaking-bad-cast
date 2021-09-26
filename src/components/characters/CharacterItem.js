import React from 'react'
import {useHistory} from 'react-router-dom'

const CharacterItem = ({ item }) => {

  let history = useHistory();

  const cardClickHandler = () => {
    history.push(`/profile/${item.char_id}`)
  }

  return (
    <div className='card' onClick={cardClickHandler}>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
