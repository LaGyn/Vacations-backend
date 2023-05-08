import requestData from '../../data/vacationRequests';
import { VacationRequest, NewVacationRequest } from '../types';

const vacationRequests: VacationRequest[] = requestData;

const getRequests = (): VacationRequest[] => {
    return vacationRequests.map(({id, person, startDate, endDate, type, status, created, message}) => ({
      id,
      person,
      startDate,
      endDate,
      type,
      status,
      created,
      message
    }));
  };
  
  const addRequest = ( request: NewVacationRequest ): VacationRequest => {
    const newVacationRequest = {
      id: Math.max(...vacationRequests.map(r => r.id)) + 1,
      ...request
    };
    vacationRequests.push(newVacationRequest);
    return newVacationRequest;
  };
  
  const filterByPerson = (person: string) => {
    const entries = vacationRequests.filter(request => request.person === person);
    return entries;
  };

  export default {
    getRequests,
    addRequest,
    filterByPerson
  };