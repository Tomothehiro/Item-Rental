export class RsvpModel {
  constructor(
    public userId: string,
    public eventId: string,
    public attending: boolean,
    public comments?: string,
    public _id?: string,
  ) { }
}
