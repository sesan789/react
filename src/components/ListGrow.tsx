import React from 'react'

function ListGrow() {
    var cities = ["City1", "City2", "City3", "City4", "City5", "City6", "City7", "City8", "City9", "City10", "City11", "City12", "City13", "City14", "City15"];

  return (
    <div>
      <h1>List  Grow    </h1>
      <ul className='list-group'>
     { cities.map(item => (<li className="list-group-item" key={item}>{item}</li>))}
     </ul>
    </div>
  )
}

export default ListGrow
