import React, { useRef } from 'react'
import user from '../../assets/images/user.png'
import Social from './Social'
import { useSelector } from 'react-redux'
import jsPDF from 'jspdf';
export default function Cv() {
    const data = useSelector((state : any)=> state.userProfile.data)
    console.log(data , 'data')
    const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};
  return (
    <>
    <div className='Cv'>
        <div className='Cv_side'>
            <img src='https://res.cloudinary.com/djsrq0lom/image/upload/v1683285507/me_spzwom.jpg' className='Cv_side-photo'/>
            <div className='Cv_side_content'>
                <p className='Cv_side_content-title'>Informations</p>
                <article className='Cv_side_content-about'>
                    <p className='Cv_side_content-text'>Phone :</p>
                    <p className='Cv_side_content-soutext'>26 552 074</p>
                </article>
                <article className='Cv_side_content-about'>
                    <p className='Cv_side_content-text'>Mail :</p>
                    <p className='Cv_side_content-soutext'>hamdi.triki@yahoo.fr</p>
                </article>
                <article className='Cv_side_content-about'>
                    <p className='Cv_side_content-text'>Address :</p>
                    <p className='Cv_side_content-soutext'>Sfax</p>
                </article>
                <p className='Cv_side_content-title'>Social media</p>
                <Social key={6} icon={'fa-brands fa-github'} text={'@The_Slark'}/>
                <Social key={1} icon={'fa-brands fa-linkedin-in'} text={'Mr hamdi triki'}/>
                <Social key={2} icon={'fa-brands fa-square-facebook'} text={'Hamdi triki'}/>
                <Social key={4} icon={'fa-brands fa-instagram'} text={'hamdi medeb'}/>
                <Social key={3} icon={'fa-brands fa-twitter'} text={'Hamdiiii '}/>
            </div>
        
        </div>
        <div className='Cv_content'>
            <div  className='Cv_header'>
                    <h2 className='Cv_header-title'>Hamdi Triki</h2>
                    <p className='Cv_header-subtitle'>Full Stack Developer</p>
            </div>
            <div className='Cv_content_resume'>
                 <p className='Cv_content_resume-title'>Experience</p>
                 <p className='Cv_content_resume-description'>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic </p>
                <p className='Cv_content_resume-title'>Resume</p>
                <p className='Cv_content_resume-description'>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic </p>
            </div>
        </div>
            
    </div>
    <div className='Color_Piker'>
        <p className='Color_Piker-title'>Color Picker :</p>
        <article className='Color_Piker-inputs'>
        <input type="color" className='Color_Piker-input'/>
        <input type="color" className='Color_Piker-input'/>
        </article>
    </div>
    </>
  )
}
