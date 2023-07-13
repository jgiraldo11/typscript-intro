interface IEmployee {
  id: number 
  fName: string
  lName: string
  age: number
  cool?: boolean
  apps: {appName: string; production: boolean }
}

interface IManager extends IEmployee {
  salaryTier: number
}

// const employees:IEmployee[] = [{object}]

let student1: IEmployee = {
  id: 12, 
  fName: 'John',
  lName: 'Smith',
  age: 25,
  cool: true,
  apps: {appName: 'CF Akeneo', production: true},
}
//@ts-ignore 
// or use any in place of IManager
let manager1: IManager = {
  fName: 'John',
  lName: 'Smith',
  age: 25,
  cool: true,
  apps: {appName: 'CF Akeneo', production: true},
  salaryTier: 2,
}