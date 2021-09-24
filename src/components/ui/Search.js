import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChangeHandler = (event) => {
    setText(event.target.value)
    getQuery(event.target.value)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={onChangeHandler}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
