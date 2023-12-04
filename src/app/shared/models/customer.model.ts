export interface Customer{
  id:number,
  lastname:string,
  firstname:string,
  username?:string,
  password?:string,
  email:string,
  phoneNumber:string,
  address:string
  roles?: string[]
}
