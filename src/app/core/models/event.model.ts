export class EventModel {
  constructor(
    public title: string,
    public userId: string,
    public groupId: string,
    public location: string,
    public start: Date,
    public end: Date,
    public viewPublic: boolean,
    public allDay: boolean,
    public description?: string,
    public id?: string, // repeating events will have same id
    public _id?: string,
  ) { }
}