export interface Ischedules {
    userUid:   string;
    schedules: IschedulesSchedule[];
}

export interface IschedulesSchedule {
    id:          string;
    title:       string;
    description: string;
    subjects:    Subject[];
}

export interface Subject {
    subjectId: string;
    name:      string;
    code:      string;
    teacher:   null | string;
    schedules: SubjectSchedule[];
}

export interface SubjectSchedule {
    day:       string;
    startTime: string;
    endTime:   string;
}
