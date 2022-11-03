import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import {askQuestion} from '../../actions/question.js'

const AskQuestion = () => {
    const [questionTitle,setQuestionTitle]=useState('')
    const[questionBody,setQuestionBody]=useState('')
    const[questionTags,setQuestionTags]=useState('')

    const dispatch = useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({questionTitle, questionBody,questionTags})
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name},navigate))
    }

    const handleEnter=(e)=>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }
  return (
    <div className="ask-question">
        <div className="ask-ques-container">
            <h1>Ask Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you are asking question to other person</p>
                        <input type="text" id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='eg. Is there a R function for finding the index of the element in vector' />
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea name="" id="ask-ques-body" cols="30"onKeyPress={handleEnter} onChange={(e)=>{setQuestionBody(e.target.value)}}  rows="6"></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about</p>
                        <input type="text" id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='eg. (xml typescript wordpress)' />
                    </label>
                </div>
                <input type="submit" value='Review your question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion