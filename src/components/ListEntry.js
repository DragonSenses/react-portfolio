import React from 'react'

export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <>
      <div>
        <h1>{title}</h1><h1>{date}</h1>
      </div>
      <ul>
        {children}
      </ul>
    </>
  )
}
