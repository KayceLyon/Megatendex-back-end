const express = require('express');
const router = express.Router();

const Fusion = require('../models/fusion')


// CREATE Fusion
router.post('/', (req, res)=>{
    Fusion.create(req.body, (err, createFusion)=>{
        res.json(createFusion)
    })
})

// INDEX OF Fusion
router.get('/', (req, res)=>{
    Fusion.find({}, (err, getFusion)=>{
        res.json(getFusion)
    })
})

// DISPLAY Fusion
router.get('/:id', (req, res)=>{
    Fusion.findById(req.params.id, (err, getFusion)=>{
        res.json(getFusion)
    })
})


// EDIT Fusion 
router.get('/:id/edit', (req, res)=>{
    Fusion.findById(req.params.id, (err, editFusion)=>{
        res.json(editFusion)
    })
})



/// UPDATE Fusion
router.put('/:id', (req, res)=>{
    Fusion.FindByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateFusion)=>{
        res.json(updateFusion)
    })
})

//REMOVE Fusion
router.delete('/:id', (req, res)=>{
    Fusion.findByIdAndRemove(req.params.id, (err, deleteFusion) =>{
        res.json(deleteFusion)
    })
})

module.exports = router;