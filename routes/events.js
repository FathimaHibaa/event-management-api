const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const eventsFilePath = path.join(__dirname, '..', 'data', 'events.json');

function readEvents() {
    const data = fs.readFileSync(eventsFilePath);
    return JSON.parse(data);
}

function writeEvents(events) {
    fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
}

module.exports = router;        

//POST /api/events 

router.post('/', (req, res) => {
    const events = readEvents();
    const newEvent = req.body;
    events.push(newEvent);
    writeEvents(events);
    res.status(201).json(newEvent);
});

//GET / api/events

router.get('/', (req, res) => {
    const events = readEvents();
    res.json(events);
});

//GET / api/events/:id

router.get('/:id', (req, res) => {
    const events = readEvents();
    const eventId = req.params.id;
    const event = events.find(event => event.id === eventId);
    if (event) {
        res.json(event);
    } else {
        res.status(404).json({ message: 'Event not found'});
    }
});

// PUT /api/events/:id

router.put('/:id', (req, res) => {
    const events = readEvents();
    const eventId = req.params.id;
    const updatedEvent = req.body;
    const eventIndex = events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
        events[eventIndex] = updatedEvent;
        writeEvents(events);
        res.json(updatedEvent);
    } else {
        res.status(404).json({ message: 'Event not found'});
    }
});

//DELETE /api/events/:id

router.delete('/:id', (req, res) => {   
    const events = readEvents();
    const eventId = req.params.id;
    const eventIndex = events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
        events.splice(eventIndex, 1);
        writeEvents(events);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Event not found'});
    }
});