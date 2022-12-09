const express = require('express');
const router = express.Router();

const Shadow = require('../models/shadow')

// CREATE Shadow
router.post('/', (req, res)=>{
    Shadow.create(req.body, (err, createShadow)=>{
        res.json(createShadow)
    })
})

// INDEX OF Shadow
router.get('/', (req, res)=>{
    Shadow.find({}, (err, getShadow)=>{
        res.json(getShadow)
    })
})

// DISPLAY Shadow
router.get('/:id', (req, res)=>{
    Shadow.findById(req.params.id, (err, getShadow)=>{
        res.json(getShadow)
    })
})


// EDIT Shadow 
router.get('/:id/edit', (req, res)=>{
    Shadow.findById(req.params.id, (err, editShadow)=>{
        res.json(editShadow)
    })
})


/// UPDATE Shadow
router.put('/:id', (req, res)=>{
    Shadow.FindByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateShadow)=>{
        res.json(updateShadow)
    })
})

//REMOVE Shadow
router.delete('/:id', (req, res)=>{
    Shadow.findByIdAndRemove(req.params.id, (err, deleteShadow) =>{
        res.json(deleteShadow)
    })
})

module.exports = router;

