import React from 'react'
import company from '../../../../assets/images/company-logo.png'
import { toast } from 'react-toastify';
export default function Job() {
    const sendWithsuccess = ()=>{
        toast.success("successfully sent !", { autoClose: 600 });
    }
  return (
    <div className='Job'>
<div className='Job_header'>
    <img className='Job_header-logo' src={company} alt="logo"/>
    <p className='Job_header-name'>infinity bug</p>
</div>
<p className='Job-title'>Description:</p>
<div className='Job_discription'>
    <p className='Job_discription-content'>we need a full stack developers to bla bla 
    bla  bla bla bla bla bla bla bla bla bla</p>

</div>
<p className='Job-title'>requirements:</p>
<div className='Job_requirements'>
    <p className='Job_requirements-option experience'>+ 7 years of experience</p>
    <p className='Job_requirements-option react'>React</p>
    <p className='Job_requirements-option ts'>Ts</p>
    <p className='Job_requirements-option js'>Js</p>
    <p className='Job_requirements-option angular'>Angular</p>

</div>
<div className='Job_after'  onClick={()=>sendWithsuccess()}>
    <p className='Job_Footer-btn'>apply for it !</p>
</div>
    </div>
  )
}
