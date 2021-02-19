import React from 'react'

import styled from 'styled-components'
import {About} from '../styles'

// icon
import clock from '../img/clock.svg'
import  money from '../img/money.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

const ServicesSections = () => {
  return (
    <Services>
      <div className="description">
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm"/>
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </div>
      <div className="image">
        <img src={home2} alt="camera gear"/>
      </div>
    </Services>
  )
}
const Services=styled(About)`
  h2{
    padding-bottom:5rem;
  }
  p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
  }
`;
const Cards=styled.div`
  display:flex;
  flex-wrap:wrap;
  /* background-color:red; */
`
const Card=styled.div`
  flex-basis:50%;
  cursor: pointer;
  .icon{
    display:flex;
    align-items:center;
  }
  h3{
    margin-left:1rem;
    background-color:var(--color-button);
    color:#000;
    padding:1rem;
  }
`

export default ServicesSections
