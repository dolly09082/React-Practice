import React from 'react'

function Title({ title, collageName, contactNumber, schoolName, rollNo }) {
  return (
    <div>
      <div>
        <div>
          <h1 style={{ fontSize: 100, color: "red" }}>{title}</h1>
        </div>
      </div>

      <h1 style={{ fontSize: 100, color: "blue" }}>{contactNumber}</h1>
      <h1 style={{ fontSize: 100, color: "blue" }}>{collageName}</h1>
      <h1 style={{ fontSize: 100, color: "blue" }}>{schoolName}</h1>
      <h1 style={{ fontSize: 100, color: "blue" }}>{rollNo}</h1>
    </div>
  )
}

export default Title
