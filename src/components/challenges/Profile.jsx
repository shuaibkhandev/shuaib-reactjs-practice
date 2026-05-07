import React from 'react'

const Profile = (props) => {
  console.log(props);
  
  return (
    <>
      Profile
      <h2>name: {props.name}</h2>
      <p>age: {props.age}</p>
      <div>{props.greeting}</div>
      <div>{props.children}</div>
    </>
  )
}

export default Profile
