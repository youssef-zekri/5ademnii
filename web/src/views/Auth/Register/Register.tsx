import { Input, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import styled from 'styled-components'
import ContactOption from '../../Profile/components/contacts/ContactOption'
import instagrame from '../../../assets/images/insta.png'
import gmail from '../../../assets/images/Gmail-PNG-Free-Image.png'
import phone from '../../../assets/images/phone.png'
import done from '../../../assets/images/done.png'
const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background: #4a154b;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) =>
      step === 'completed' ? '#4A154B' : '#F3E7F3'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #4a154b;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #4a154b;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`

const steps = [
  {
    label: '1',
    step: 1,
  },
  {
    label: '2',
    step: 2,
  },
  {
    label: '3',
    step: 3,
  },
  {
    label: '4',
    step: 4,
  },
]

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }
const [toggleselect , settoggelc1]=useState(false)

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }
  const options = [
    { value: 'Web Dev', label: 'Web Dev' },
    { value: 'Digital marketing', label: 'dm' },
    { value: 'sponsoring', label: 'sponsore' },
    { value: 'online pay', label: 'op' },
  ]
  const [selected, setSelected] = useState([]);
  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
        <div className='Register'>
            {activeStep===1 ?
            <>
            <p className='Register-welcome'>Welcome</p><p>you are a ?</p>
            <div className='Register-category'>
                <article onClick={() => { settoggelc1(!toggleselect) } } className={toggleselect ? 'Register-category-select' : 'Register-category-select c1'}>company</article>
                <article onClick={() => { settoggelc1(!toggleselect) } } className={toggleselect ? 'Register-category-select c2' : 'Register-category-select'}>client</article>
            </div>
            </>
            :activeStep===2 ?
            <div className='Register-about'>
            <p className='Register-welcome'>About {toggleselect ? 'You' : 'Your Company'}</p>
            <div className='Register-info'>
            <TextField  size="small" id="outlined-basic" label='Name' variant="outlined" />
            <p>Foundation Date :</p>
            <input type='date'/>
            <p>speciality :</p><MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
            </div>
            <>
            <div>
        </div>
        </></div>
        :activeStep===3 ?
        <div className='Register-contact'>
        <p className='Register-welcome'>Your {toggleselect ? 'contact' : 'Company contact'}</p>
        <ContactOption icon={gmail} text='Gmail'/>
        <ContactOption icon={phone} text='phone'/>
        <ContactOption icon={instagrame} text='instagrame'/>
        </div>
            :
            <div className='Register-done'>
            <p className='Register-welcome'>Well Done !</p>
              <img src={done} alt="done" className="done" />
            </div>
        }
        </div>        

      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          Next
        </ButtonStyle>
      </ButtonsContainer>
    </MainContainer>
  )
}

export default ProgressSteps