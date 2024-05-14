class Users {
    private _email: string;
    private _password: string
    private _name: string;
    private _lastName: string;
    constructor(
        email: string, password: string, name: string,
        lastName: string
    ) {
        this._email = email;
        this._password = password
        this._name = name;
        this._lastName = lastName;
    }
    get email(): string{
        return this._email
    }
    get password(): string{
        return this._password
    }
    get name(): string{
        return this._name
    }
    get lastName(): string{
        return this._lastName
    }
    

    set email(email:string){
        this._email = email
    }
    set password(password:string){
        this._password = password
    }
    set name(name:string){
        this._name = name
    }
    set lastName(lastName:string){
        this._lastName = lastName
    }
    


}

export default Users;