export class RoomModel {
  constructor(
    public name: string,
    public capacity: string,
    public groupId: string,
    public description?: string,
    public _id?: string
  ) { }
}
