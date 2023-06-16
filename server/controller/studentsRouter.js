const express = require('express');
const router = express.Router()
const Student = require('../Models/student');
// const student = require('../Models/student');
// const person = require('../models/person');

router.get('/', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (e) {
        console.log(e)
    }
})

router.get('/studentsProfile', async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    const students = await Student.findOne({ email: email }, { password: password })
    res.json(students)
})

router.post('/studentsLogin', async (req, res) => {
    try {
        // console.log(req.body)
        const { email, password } = req.body;
        // console.log(email, password)
        const student = await Student.findOne({ email, password })

        // console.log(student)
        
        // const student = await Student.findOne({ email: email }, { password: password })
        // res.json(students)
        if (!student) {
            return res.status(404).json({ message: 'User not found' });
        }else{
            res.status(200).json({ student })
        }

    } catch (e) {
        // console.log(e)
        res.status(500).json({ message: 'An error occurred' })
    }

})

router.post('/studentsRegistration', async (req, res) => {
    console.log("jaffa")
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })
    // console.log(student)
    // const s1 = await student.save()
    // res.json(s1)

    // res.send('post method')

    try {
        if (student.password === student.confirmPassword) {

            const s1 = await student.save() // add here server response status and object on success
            res.json(s1)
            console.log("password successfull")
        }
    } catch (err) {
        res.send('error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        person.email = req.body.email
        person.passowrd = req.body.password
        const p1 = await person.save()
        res.send(p1)
    } catch (err) {
        res.send('error')
    }
})


module.exports = router ;