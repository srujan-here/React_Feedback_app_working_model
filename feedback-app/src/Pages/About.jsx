import React from 'react'
import Card from '../components/shared/Card'
function About() {
  return (
    <div className="about">
    <Card reverse={false}> 
    <h2>About the App</h2>
    <p>This is a React app to leave a feedback for a product or service. </p>
    <p>Version : 1.1.0</p>
    <a href="/">Back to home</a>
    </Card>
  
    </div>
  )
}

export default About