import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { AppDispatch } from '../../data/Store/Store';
import { hidePopUp } from '../../data/Reducers/popup';
import Button from '@mui/material/Button';
import { MultiSelect } from "react-multi-select-component";
import { TextField, TextareaAutosize } from '@mui/material';
import useWindowDimensions from '../../Hooks/useWindowSize';
export default function PopUp () {
    const dispatch = useDispatch<AppDispatch>();
    const options = [
        { value: 'Js', label: 'Js' },
        { value: 'angular', label: 'angular' },
        { value: 'react', label: 'react' },
        { value: 'typescript', label: 'ts' },
      ]
      const [selected, setSelected] = useState([]);
      const dim:any = useWindowDimensions()
return (
<section className='PopUP'>
<div className='PopUP_Backdrop' onClick={()=>dispatch(hidePopUp())}>

</div>
<div className='PopUP_Element'>
    <div className='PopUP_Element_header'>
    <i className="fa-solid fa-unlock-keyhole icon--logo"></i>
    <i className="fa-solid fa-x icon icon" onClick={()=>dispatch(hidePopUp())}></i>
    </div>
<div className='PopUP_Element_content'>
    <p className='PopUP_Element_content-title'>jobe Offer</p>
    <TextareaAutosize
      aria-label="description"
      minRows={1}
      placeholder="Minimum 1 rows"
      style={{  width: dim.width >1000 ?400 : 260  , height:100 , borderRadius : '12px' , padding :'1rem'}}
    />
    requirements :
    <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    <article> years Of experience : <input type='number' className='PopUP_Element_content-number'/></article>
   </div>
    <div className='PopUP_Element_buttons'>
        <button className='PopUP_Element_button' onClick={()=>dispatch(hidePopUp())}>Cancel</button>
        <button className='PopUP_Element_button Postbtn'>Post</button>
    </div>
</div>
</section>
)
}