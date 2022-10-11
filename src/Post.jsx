import React from 'react'

export default function Post(props) {
  return (
    <div>
      <p>{props.author}</p>
      <strong>{props.content}</strong>
    </div>
  )
}
