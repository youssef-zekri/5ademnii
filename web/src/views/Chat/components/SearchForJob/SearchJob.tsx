import React from 'react'
import job from '../../../../assets/images/job.png'
import { useDispatch } from 'react-redux'
import { showPopUp } from '../../../../data/Reducers/popup'
export default function SearchJob() {
    const dispatch = useDispatch()
  return (
    <div className='SearchJob' onClick={()=>dispatch(showPopUp())}>Post for job <img src={job} alt="img" className='SearchJob-icon'/></div>
  )
}
