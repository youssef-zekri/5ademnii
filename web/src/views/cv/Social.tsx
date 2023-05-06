import React from 'react'
interface Props{
    icon : string,
    text : string
}
export default function Social(props : Props) {
  return (
    <article className='Cv_side_content-social'>
    <i className={`${props.icon} Cv_side_content-social-icons`}/>
       <p className='Cv_side_content-social-discription'>{props.text}</p>
    </article>
  )
}
