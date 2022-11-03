import mongoose from 'mongoose'

import Questions from '../models/Questions.js'

export const postAnswer = async (req, res) => {

    const { id: id } = req.params;
    const { no0fAnswers, answerBody, userAnswered } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');

    }
    updateNoOfQuestions(_id, no0fAnswers)
    try {
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $addToSet: { 'answer': [{ answerBody, userAnswered, userId: req.userId }] } })
        req.status(200).json(updatedQuestion)

    } catch (error) {
        res.status(400).json(error)
    }
}

const updateNoOfQuestions = async (_id, no0fAnswers) => {

    try {

        await Questions.findByIdAndUpdate(_id, { $set: { 'no0fAnswers': no0fAnswers } })

    } catch (error) {
        console.log(error)
    }
}