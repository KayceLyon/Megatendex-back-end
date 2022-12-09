const express = require('express');
const router = express.Router();

const Skills = require('../models/skills')

// CREATE SKILLS
router.post('/', (req, res)=>{
    Skills.create(req.body, (err, createSkill)=>{
        res.json(createSkill)
    })
})

// INDEX OF SKILLS
router.get('/', (req, res)=>{
    Skills.find({}, (err, getSkills)=>{
        res.json(getSkills)
    })
})

// DISPLAY SKILLS
router.get('/:id', (req, res)=>{
    Skills.findById(req.params.id, (err, getSkill)=>{
        res.json(getSkill)
    })
})


// EDIT SKILLS 
router.get('/:id/edit', (req, res)=>{
    Skills.findById(req.params.id, (err, editSkill)=>{
        res.json(editSkill)
    })
})


/// UPDATE SKILLS
router.put('/:id', (req, res)=>{
    Skills.FindByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateSkill)=>{
        res.json(updateSkill)
    })
})

//REMOVE SKILLS
router.delete('/:id', (req, res)=>{
    Skills.findByIdAndRemove(req.params.id, (err, deleteSkill) =>{
        res.json(deleteSkill)
    })
})

module.exports = router;
