import './App.css'
import { rate, nextQuestion } from './rating';
import React from 'react';
import Modal from './Modal';

function App() {

  return (
    <>
      <div className="body">
      {/* <div className="header">
        <div className="logo"><img src="logo.png" className="behind-logo-img" alt="logo" /></div>
      </div> */}
      
      <div className="profile">
        <div className="profile-top">
          <div className="image-container">
            <img src="Democracy-pics/democracy.jpeg" className="image-behind-profile" alt="profile" />
          </div>
          <div className="profile-bottom">
            <div className="profile-bottom-1">
              <img src="Designer.png" className="profile-img" alt="profile" />
            </div>
            <div className="info-container">
              <p className="name">Mr. Politician A</p>
              <p className="designation">MP from Patna, Bihar</p>
              <p className="place">From Patna, Bihar</p>
            </div>
            <div className="rating">
              <p className="overall-rating">Overall Rating: <span className="rating-span"></span></p>
            </div>
          </div>
        </div>
      
        <div className="profile-description">
          <p><strong>Biography:</strong> Mr. Politician A, born on March 11, 1954, in Mumbai, India, is a prominent Indian politician who has been serving as the Prime Minister of India since May 2014. Before his premiership, he was the Chief Minister of Maharashtra from 2003 to 2014 and is currently the Member of Parliament for Mumbai South.</p>
          <p>As Chief Minister of Maharashtra, A's administration was noted for its policies towards economic development, but his tenure was also marked by controversy, particularly the 2008 Mumbai attack. His leadership style and governance model have been both praised and criticized.</p>
          <p>A's tenure as Prime Minister has seen significant policy decisions, including the implementation of the Goods and Services Tax (GST), demonetization of high-value currency notes, and efforts to improve infrastructure and digitalization in India.</p>
        </div>
      </div>
      
      <div className="politician-data">
        <div className="data-field1">
        <div className="data-left">
            <Modal buttonText="Personal Details" className="modal-button">
              <div className='pop-up'>
                <img className="data-img" src="box-svgrepo-com.svg" alt="data" />
                <p className="data-title"><strong>Personal Details</strong></p>
              </div>
              
              <ul>
                <li>Name: Mr. Politician A</li>
                <li>Age: 70</li>
                <li>Sex: Male 70</li>
                <li>Political Party: Party A</li>
                <li>Residence: South Bombay, Maharashtra</li>
              </ul>
        
            </Modal>
      
            <p className="data-description">View the politician's personal information such as age, education, and career background.</p>
          </div>
      
          <div className="data-right">
            <Modal buttonText="Criminal Records" className="modal-button">
              <div>
                <img className="data-img" src="box-svgrepo-com.svg" alt="data" />
                <p className="data-title"><strong>Criminal Records</strong></p>
              </div>
              
              <ul>
                <li><strong>Serious Crimes:</strong> No such criminal daata exists</li>
                <li><strong>Non-Serious Crimes:</strong> No such criminal daata exists</li>
              </ul>
            </Modal>
      
            <p className="data-description">Access any criminal records or legal issues associated with the politician.</p>
          </div>
        </div>
      
        <div className="data-field2">
          <div className="data-left">
            <Modal buttonText="Achievements" className="modal-button">
              <div>
                <img className="data-img" src="box-svgrepo-com.svg" alt="data" />
                <p className="data-title"><strong>Achievements</strong></p>
              </div>
        
              <ul>
                <li>Became <strong>Prime Minister</strong> of India in May, 2014</li>
                <li><strong>Economy: </strong>Made India 5th largest Economy</li>
                <li>Mr A's highest educational degree is of <strong>PhD</strong></li>
              </ul>
            </Modal>

            <p className="data-description">View the politician's achievementsin his political carrier.</p>
          </div>
      
          <div className="data-right">
            <Modal buttonText="Promises Made" className="modal-button">
              <div>
                <img className="data-img" src="box-svgrepo-com.svg" alt="data" />
                <p className="data-title"><strong>Promises Made</strong></p>
              </div>

            <ul>
              <li>Promised to make India 3rd Largest Economy</li>
              <li>Prommised to give 1000000 jobs per year</li>
              <li>Promised to double farmer's income</li>
              <li>Promised to improve India's road infrastructure and make it to world's level</li>
              <li>Promised to provide Electricty to every household of India</li>
              <li>Promised to provide tap water to every household of India</li>
            </ul>
            </Modal>
            <p className="data-description">See the promises the politician has made during their campaign or time in office.</p>
          </div>
        </div>
        
        <div className="data-field2">
          <div className="data-left">
            <Modal buttonText="Promises Fulfilled" className="modal-button">
              <div>
                <img className="data-img" src="box-svgrepo-com.svg" alt="data" />
                <p className="data-title"><strong>Promises Fulfilled</strong></p>
              </div>

              <ul>
                <li><strong>Partially Fullfilled: </strong>Improving road infrastructure</li>
                <li><strong>Partially Fullfilled: </strong>Doubling farmer's income</li>
                <li><strong>Partially Fullfilled: </strong>Making India 3rd largest Economy</li>
                <li><strong>Fullfilled: </strong>Access to electricity to every household of India</li>
                <li><strong>Fullfilled: </strong>Access to tap water to every household of India</li>
              </ul>
            </Modal>
      
            <p className="data-description">Track the promises that the politician has fulfilled and upheld his promises to the publiic.</p>
          </div>
      
          <div className="data-right">
            <Modal buttonText="Promises Unfulfilled" className="modal-button">
              <div>
                <img className="data-img" src="box-svgrepo-com.svg" alt="data" />
                <p className="data-title"><strong>Promises Unfulfilled</strong></p>
              </div>
          
            <ul>
              <li>Providing 100000 jobs per year</li>
              <li>Reducing Corruption</li>
              <li>Reducing use of black money</li>
            </ul>
            </Modal>

            <p className="data-description">Track the promises that the politician has failed to fulfill and hold them accountable.</p>
          </div>
        </div>
      </div>
      
      <div className="rating-parent-container">
        <div className="rating-container">
          <p className="question">On a scale of 1-10, how satisfied are you with the promises made by this politician?</p>
          <div className="ratings">
            <button className="btn rating-no_1-4" onClick={() => rate(1)}>1</button>
            <button className="btn rating-no_1-4" onClick={() => rate(2)}>2</button>
            <button className="btn rating-no_1-4" onClick={() => rate(3)}>3</button>
            <button className="btn rating-no_1-4" onClick={() => rate(4)}>4</button>
            <button className="btn rating-no_5-7" onClick={() => rate(5)}>5</button>
            <button className="btn rating-no_5-7" onClick={() => rate(6)}>6</button>
            <button className="btn rating-no_5-7" onClick={() => rate(7)}>7</button>
            <button className="btn rating-no_8-10" onClick={() => rate(8)}>8</button>
            <button className="btn rating-no_8-10" onClick={() => rate(9)}>9</button>
            <button className="btn rating-no_8-10" onClick={() => rate(10)}>10</button>
          </div>
          <p className="required-text"></p>
          <button onClick={() => nextQuestion()} className="next-button">Next</button>
        </div>
      </div>
    </div>   
      


    </>
  )
}

export default App
