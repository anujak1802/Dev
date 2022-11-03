import React from 'react'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate();
  const checkAuth = () => {
    if (user === null) {
      alert("Login or signin")
      navigate('/Auth')
    }
    else {
      navigate('/AskQuestion')
    }
  }

  const questionsList=useSelector(state=>state.questionsReducer)
  console.log(questionsList)
  // var questionsList = [{
  //   _id: '1',
  //   upVote: 3,
  //   downVote: 2,
  //   noOfAnswers: 2,
  //   QuestionTitle: 'What is function?',
  //   QuestionBody: 'It meant to be',
  //   questionTags: ['java', 'nodejs', 'mongodb'],
  //   userPosted: 'anu',
  //   userId: 1,
  //   time: 'Jan 10',
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }, {
  //   _id: '2',
  //   upVote: 0,
  //   downVote: 2,
  //   noOfAnswers: 2,
  //   QuestionTitle: 'How to start ML?',
  //   QuestionBody: 'Machine Learning',
  //   questionTags: ['java', 'nodejs', 'reactjs'],
  //   userPosted: 'janhvi',
  //   userId: 1,
  //   time: 'Nov 1',
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }, {
  //   _id: '3',
  //   upVote: 1,
  //   downVote: 2,
  //   noOfAnswers: 2,
  //   QuestionTitle: 'What is MERN stack?',
  //   QuestionBody: 'It includes reactjs',
  //   questionTags: ['java', 'javascript', 'reactjs'],
  //   userPosted: 'prans',
  //   userId: 1,
  //   time: 'Dec 2',
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn: "jan 10",
  //     userId: 2
  //   }]
  // }]

  const location = useLocation();
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading</h1> :
            <>
              <p>{questionsList.data.length} questions</p>
              <QuestionsList questionsList={questionsList.data} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar