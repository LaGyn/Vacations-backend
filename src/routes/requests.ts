/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { request } from 'express';
import requestService from '../services/requestService';
import toNewRequestEntry from '../utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Request = require('../models/request');

const requestRouter = express.Router();

requestRouter.get('/', (_req, res) => {
    res.send(requestService.getRequests());
});
  
requestRouter.get('/:person', (req, res) => {
    const request = requestService.filterByPerson(String(req.params.person));
    if (request) {
        res.send(request);
    } else {
        res.sendStatus(404);
    }
});

requestRouter.get('/:person/:id', (req, res) => {
    const request = requestService.filterById(String(req.params.person), Number(req.params.id));
    if (request) {
        res.send(request);
    } else {
        res.sendStatus(404);
    }
});

requestRouter.post('/', (req, res) => {
    try {
        const newVacationRequest = toNewRequestEntry(req.body);
        const addedEntry = requestService.addRequest(newVacationRequest);
        res.json(addedEntry);
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
requestRouter.delete('/:person/:id', async (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const removedRequest = await Request.findByIdAndRemove(request.params.id);
    res.status(204).end();
    console.log(removedRequest);
});
  
export default requestRouter;