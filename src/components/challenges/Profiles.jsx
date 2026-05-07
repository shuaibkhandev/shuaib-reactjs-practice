import React from 'react'
import Profile from './Profile'

const Profiles = () => {
  return (
    <div>
      Profiles
      <Profile name="Alice" age={26} greeting={<div><strong>Hi Alice, have a wonderful day!</strong></div>}>
      <p>Hobbies: Coding, Hiking, Cricket, Watching Movies</p>
      <button>Contact</button>
      </Profile>
    </div>
  )
}

export default Profiles
