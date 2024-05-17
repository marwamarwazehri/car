
import React, { useState } from 'react';
import './Questions.css';
import car from '../img/blue-back-car.jfif';
import { data } from './data';
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";

const Questions = () => {
  const [questions, setQuestions] = useState(data.map(question => ({ ...question, isOpen: false })));

  const toggleAnswer = (index) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = prevQuestions.map((item, i) => ({
        ...item,
        isOpen: index === i ? !item.isOpen : false // Toggle isOpen for clicked question, close others
      }));
      return updatedQuestions;
    });
  };

  return (
    <div className="questions">
      <div className='question-left'>
        <img src={car} alt="Car" />
      </div>

      <div className='question-right'>
       <div className='question-right-title'>
        <h4>FAQ</h4>
        <h1>Frequently Asked Questions</h1>
        <p>Frequently Asked Questions about the car rental booking process on our website: Answers to common concerns and inquiries.</p>
        </div>
        <div className='quetions-set'>
        {questions.map((item, index) => {
          const { question, answer, isOpen } = item;
          return (
            <div className='ques-answer' key={index}>
             <div className={`question ${isOpen? "color":""}`}>
                <h4>{index + 1}.{question}</h4>
                <IoIosArrowDown
                  className="openarrow"
                  onClick={() => toggleAnswer(index)}
                />
              </div>
              {isOpen && <div className='answer'>
                
                <span>{answer}</span>
              </div>}
            </div>
          )
        })}
        </div>
        </div>
      
    </div>
  )
}

export default Questions;
