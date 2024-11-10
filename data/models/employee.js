class Employee{
    constructor(id, nombre, apellido, edad, cargo){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cargo = cargo;
    }

    static fromRequestBody(body){
        return new Empleado(body.id, body.nombre, body.apellido, body.edad, body.cargo);
    }
}