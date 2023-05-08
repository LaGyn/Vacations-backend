import { NewVacationRequest, VacationRequestStatus, VacationType } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseMessage = (message: unknown): string => {
    if (!isString(message)) {
      throw new Error('Incorrect or missing comment');
    }
    return message;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
  
const parseStartDate = (startDate: unknown): string => {
    if (!isString(startDate) || !isDate(startDate)) {
        throw new Error('Incorrect or missing start date: ' + startDate);
    }
return startDate;
};

const parseEndDate = (endDate: unknown): string => {
    if (!isString(endDate) || !isDate(endDate)) {
        throw new Error('Incorrect or missing end date: ' + endDate);
    }
    return endDate;
};

const parseCreatedDate = (created: unknown): string => {
    if (!isString(created) || !isDate(created)) {
        throw new Error('Incorrect or missing date: ' + created);
    }
return created;
};

const parsePerson = (person: unknown): string => {
    if (!isString(person)) {
      throw new Error('Incorrect or missing id number');
    }
    return person;
};

const isVacationType = (param: string): param is VacationType => {
    return Object.values(VacationType).map(v => v.toString()).includes(param);
};

const parseVacationType = (type: unknown): VacationType => {
    if (!isString(type) || !isVacationType(type)) {
        throw new Error('Incorrect or missing type: ' + type);
    }
    return type;
};

const isVacationRequestStatus = (param: string): param is VacationRequestStatus => {
    return Object.values(VacationRequestStatus).map(v => v.toString()).includes(param);
};

const parseVacationRequestStatus = (status: unknown): VacationRequestStatus => {
    if (!isString(status) || !isVacationRequestStatus(status)) {
        throw new Error('Incorrect or missing status: ' + status);
    }
    return status;
};

const toNewRequestEntry = (object: unknown): NewVacationRequest => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
    }
    if ('message' in object && 'startDate' in object && 'endDate' in object && 'created' in object && 'type' in object && 'status' in object && 'created' in object && 'person' in object) {
        const newEntry: NewVacationRequest = {
            person: parsePerson(object.person),
            startDate: parseStartDate(object.startDate),
            endDate: parseEndDate(object.endDate),
            type: parseVacationType(object.type),
            created: parseCreatedDate(object.created),
            status: parseVacationRequestStatus(object.status),
            message: parseMessage(object.message)
        };
        return newEntry;
  }
  throw new Error('Incorrect data: some fields are missing');
};

export default toNewRequestEntry;