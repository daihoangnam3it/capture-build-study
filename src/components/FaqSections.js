import React from 'react'
import styled from 'styled-components'

import {About,Description,Hide,Image} from '../styles'

const FaqSections = () => {
  return (
    <Faq>
        <h2>Any Question <span>FAQ</span></h2> 
        <div className="question">
          <h4>How Do I start</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus mollitia veritatis reprehenderit cupiditate recusandae dolore.</p>
          </div>
           <FaqLine></FaqLine>
        </div>
        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus mollitia veritatis reprehenderit cupiditate recusandae dolore.</p>
          </div>
          <FaqLine></FaqLine>

        </div>
        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus mollitia veritatis reprehenderit cupiditate recusandae dolore.</p>
          </div>
          <FaqLine></FaqLine>

        </div>
        <div className="question">
          <h4>Daily ScheduleSchedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus mollitia veritatis reprehenderit cupiditate recusandae dolore.</p>
          </div>
          <FaqLine></FaqLine>

        </div>
       
    </Faq>
  )
}
const Faq=styled(About)`
  display:block;
  h2{
    padding-border-bottom:2rem;
    font-weight:lighter;
  }
  .question{
    padding:3rem 0;
    cursor: pointer;
  }
  .answer{
    padding:2rem 0;
    p{
      padding:1rem 0;
    }
  }
`
const FaqLine=styled.div`
  width:100%;
  margin:1rem 0;
  height:.2rem;
  background-color:var(--color-line);
`
export default FaqSections 
  