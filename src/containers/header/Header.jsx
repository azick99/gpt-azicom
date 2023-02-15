import React from 'react'
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
import './header.styles.scss'
const Header = () => {
  return (
    <div className="gpt3__header_section_padding " id="home">
      <div className="gp3__header-content gpt3__header">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3_hader-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-contnent_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className="gpt3__header-img">
          <img src={AI} alt="ai" />
        </div>
      </div>
    </div>
  )
}

export default Header
