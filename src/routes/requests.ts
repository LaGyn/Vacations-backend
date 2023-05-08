/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import requestService from '../services/requestService';
import toNewRequestEntry from '../utils';

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
  
export default requestRouter;