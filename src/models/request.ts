import mongoose from 'mongoose';
import { VacationRequestStatus, VacationType } from '../types';

const requestSchema =  new mongoose.Schema({
    id: Number,
    person: String,
    startDate: String,
    endDate: Number,
    type: VacationType,
    created: String,
    status: VacationRequestStatus,
    message: String
});

requestSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Request', requestSchema);