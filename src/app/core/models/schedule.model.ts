import { EventModel } from "./event.model";

interface Schedule_Model {
  now: string;
  editable: boolean;
  aspectRatio: number;
  scrollTime: string;
  header: {
      left: string;
      center: string;
      right: string;
  };
  defaultView: string;
  views: {
      timelineThreeDays: {
        type: string;
        duration: {days: number}
      }
  };
  resourceLabelText: string;
  resources: [{
      id: string;
      title: string;
      eventColor?: string;
  }];
  events: EventModel[];
};

export const ScheduleModel: Schedule_Model = {
  now: new Date().toISOString().slice(0,10),
  editable: true,
  aspectRatio: 1.8,
  scrollTime: '00:00',
  header: {
    left: 'today prev,next',
    center: 'title',
    right: 'timelineDay,timelineThreeDays,agendaWeek,month,listWeek'
  },
  defaultView: 'timelineDay',
  views: {
    timelineThreeDays: {
      type: 'timeline',
      duration: { days: 3 }
    }
  },
  resourceLabelText: 'Rooms',
  resources: [
    { id: 'a', title: 'Auditorium A' },
    { id: 'b', title: 'Auditorium B', eventColor: 'green' },
    { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
    { id: 'd', title: 'Auditorium D' },
    { id: 'e', title: 'Auditorium E' },
    { id: 'f', title: 'Auditorium F', eventColor: 'red' },
    { id: 'g', title: 'Auditorium G' }
  ],
  events: null
}
