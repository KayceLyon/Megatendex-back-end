const express = require('express');
const router = express.Router();

const Personas = require('../models/persona')

// CREATE Persona
router.post('/', (req, res)=>{
    Personas.create(req.body, (err, createPersona)=>{
        res.json(createPersona)
    })
})

// INDEX OF Persona
router.get('/', (req, res)=>{
    Personas.find({}, (err, getPersona)=>{
        res.json(getPersona)
    })
})

// DISPLAY Persona
router.get('/:id', (req, res)=>{
    Personas.findById(req.params.id, (err, getPersona)=>{
        res.json(getPersona)
    })
})


// EDIT Persona 
router.get('/:id/edit', (req, res)=>{
    Personas.findById(req.params.id, (err, editPersona)=>{
        res.json(editPersona)
    })
})



/// UPDATE Persona
router.put('/:id', (req, res)=>{
    Personas.FindByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatePersona)=>{
        res.json(updatePersona)
    })
})

//REMOVE Persona
router.delete('/:id', (req, res)=>{
    Personas.findByIdAndRemove(req.params.id, (err, deletePersona) =>{
        res.json(deletePersona)
    })
})

module.exports = router;
