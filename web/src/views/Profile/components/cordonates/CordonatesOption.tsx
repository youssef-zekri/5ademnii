import { TextField } from '@mui/material'
import React from 'react'
interface props {
text : string ;
type? : string,
}
export default function CordonatesOption(props:props) {
    return (
        <article className='Cordonates_option'>
            <p>{props.text}</p>
                <TextField   type={props.type} size="small" id="outlined-basic" label={props.text} variant="outlined" />
                </article>
           
      )
}
