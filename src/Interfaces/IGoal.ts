import { RandomUUIDOptions } from "crypto"

//This is an interface in order to define the property types to be used in the goal object
export default interface IGoal {
    id: string,
    goal:string,
    deadline:number,
    isCompleted:Boolean
 
}

