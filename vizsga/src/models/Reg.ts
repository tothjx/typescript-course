// regisztracio
export class Reg
{
    public id: number;
    public idEvent: number;
    public idUser: number;

    constructor(id: number, idEvent: number, idUser: number)
    {
        this.id = id;
        this.idEvent = idEvent;
        this.idUser = idUser;
    }
}
