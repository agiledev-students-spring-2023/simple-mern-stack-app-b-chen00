import { useState, useEffect } from 'react'
import Me from './me.jpg';
import axios from 'axios'

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {

  }, [])

  return (
    <>
      <h1>About Me</h1>
      <img src={Me} style={{maxHeight:"250px", width:"auto"}}/>
      <p style={{ width: '35%', margin: 'auto', lineHeight: '2'}}>
        Hello! My name is Brandon and I am currently a junior majoring in computer science. I have lived and gone to school in NYC all 
        of my life but recently I've been wanting to explore new places and activities. Some things I enjoy doing are playing games, drawing, 
        and swimming though I haven't been doing much of that. I also listen to a lot of music. There isn't a specific genre that I focus on 
        so I would love some recommendations because Spotify's discover weekly isn't enough. Other than that, I am always looking to meet new
        people and make new friends so feel free to contact me on Discord or anything else. Thats all I have for now.<br></br> Thank you!
      </p>

    </>
  )
}

export default About