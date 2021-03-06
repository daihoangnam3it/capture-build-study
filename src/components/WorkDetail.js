import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {MovieState} from '../MovieState'

import Award from './Work/Award'
const WorkDetail = () => {
  const history=useHistory();
  const url=history.location.pathname;
  const [details,setDetails]=useState(MovieState())
  const [detail,setDetail]=useState();
  // console.log(details);

  useEffect(()=>{
    const currentDetail=details.filter(item=>item.url===url);
    setDetail(currentDetail[0]);
  },[url])

  if(detail){
    return (
      <Details>
        <HeadLine>
          <h2>{detail.title}</h2>
          <img src={detail.mainImg} alt={detail.title}/>
        </HeadLine>
        <Awards>
          {detail.awards.map(award=>{
            return <Award title={award.title} description={award.description} key={award.title}/>
          })}
        </Awards>
        <ImageDisplay>
          <img src={detail.secondaryImg} alt={detail.title}/>
        </ImageDisplay>
      </Details>
    )
  }
  return(
    <Details>
      Loading......
    </Details>
  )
 
}



// Styles
const Details=styled.div`
  color:#fff;
`
const HeadLine=styled.div`
  min-height:90vh;
  padding-top:20vh;
  position:relative;
  h2{
    position:absolute;
    top:10%;
    left:50%;
    transform:translate(-50%,-10%);
    }
   img{
     width:100%;
     height:70vh;
     object-fit:cover;
   } 
`
const Awards=styled.div`
  min-height:80vh;
  display:flex;
  margin:5rem 10rem;
  align-items:center;
  justify-content:space-around;
`
const ImageDisplay=styled.div`
  min-height:50vh;
  img{
    width:100%;
    height:100vh;
    object-fit:cover;
    }
`
export default WorkDetail
