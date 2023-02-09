export class User {
    //características, informações --> ATRIBUTOS

    // id:string
    // name :string
    // email: string
    // password: string

    // ações, funções

    constructor(

        private id:string,
        private name: string,
        private email: string,
        private password:string
    ){}

    public getId():string{
        return this.id
    }
    public setId(newId:string):void{
         this.id=newId
    }



    public getName():string{
        return this.name
    }
    public setName(newName:string):void{
        this.id=newName
   }



   public getEmail():string{
        return this.email
    }
   public setEmail(newEmail:string):void{
        this.id=newEmail
    }



    public getPassword():string{
        return this.password
    }
    public setPassword(newPassword:string):void{
        this.id=newPassword
   }




}

    // INSTANCIAR 

    const user1 = new User("u001","Luiz","luiz@email.com","12345")

    const user2 = new User("u001","Thalita","thalita@email.com","12345")

    console.log(user1.getId())
    user1.setId("u010")





