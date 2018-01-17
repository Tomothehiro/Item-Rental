export class GroupModel {
  constructor(
    public name: string,
    public userId: string,
    public admin: boolean,
    public _id?: string,
  ) { }
}
