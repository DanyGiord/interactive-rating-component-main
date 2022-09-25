import { useState } from 'react';
import star from './icon-star.svg';
import thanks from './images/illustration-thank-you.svg'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState('')

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="rounded"
      >
        {number}
      </button>
    )
  }
  return (
    <>
      {!isSubmitted && <div className="App">
        <div className='container'>
          <div className='content'>
            <div className='star'><img src={star} alt='star' className='star-img' /></div>
            <h1>How did we do ?</h1>
            <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <ul className='number-container'>
              <li> <Button number={1} /></li>
              <li> <Button number={2} /></li>
              <li> <Button number={3} /></li>
              <li> <Button number={4} /></li>
              <li> <Button number={5} /></li>
            </ul>
            <div className='button-container'>
              <a href='#' onClick={() => setIsSubmitted(true)} className='button'>SUBMIT</a>
            </div>
          </div>
        </div>
      </div>}
      {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted} />}
    </>
  );
}

const ThankYou = ({ items, setIsSubmitted }) => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='content'>
          <img src={thanks} alt='' className='thanks-img'></img>
          <div className='flex1'>
            <p className='selected-1'>You selected {items} out of 5</p>
          </div>
          <h2 className='center'>Thank you!</h2>
          <p className='paraf'>We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!</p>
          <div className='button-container'>
            <a href='#' onClick={() => setIsSubmitted(false)} className='button'>SUBMIT</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
