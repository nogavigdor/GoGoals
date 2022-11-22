import IGoal from './IGoal';

export default interface IShowGoals {
    GoalsList:IGoal[],
  //  deleteGoal:(event:React.MouseEvent<HTMLButtonElement>)=>void
    deleteGoal:(id:string)=>void,
    completeGoal:(goalCompleted:string)=>void
 };
 