import { VacationRequest, VacationRequestStatus, VacationType } from "../src/types";

const requestData: VacationRequest[] = [
    {
        "id": 1,
        "person": "12345",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": 'VACATION' as VacationType,
        "created": "01.02.2023",
        "status": "APPROVED" as VacationRequestStatus,
        "message": "Holiday please"
    },
    {
        "id": 2,
        "person": "23456",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": "UNPAID_LEAVE" as VacationType,
        "created": "01.02.2023",
        "status": "APPROVED" as VacationRequestStatus,
        "message": "Holiday please"
    },
    {
        "id": 3,
        "person": "34567",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": "VACATION" as VacationType,
        "created": "01.02.2023",
        "status": "PENDING" as VacationRequestStatus,
        "message": "Holiday please"
    },
    {
        "id": 4,
        "person": "456789",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": "VACATION" as VacationType,
        "created": "01.02.2023",
        "status": "APPROVED" as VacationRequestStatus,
        "message": "Holiday please"
    },
    {
        "id": 5,
        "person": "456789",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": "VACATION" as VacationType,
        "created": "01.02.2023",
        "status": "APPROVED" as VacationRequestStatus,
        "message": "Holiday please"
    },
    {
        "id": 6,
        "person": "456789",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": "VACATION" as VacationType,
        "created": "01.02.2023",
        "status": "APPROVED" as VacationRequestStatus,
        "message": "Holiday please"
    },
    {
        "id": 7,
        "person": "456789",
        "startDate": "11.02.2023",
        "endDate": "15.02.2023",
        "type": "VACATION" as VacationType,
        "created": "01.02.2023",
        "status": "APPROVED" as VacationRequestStatus,
        "message": "Holiday please"
    }

];

export default requestData;