/**
 * Props interface which has the properties of the functions handleChange 
 * (triggerd by each stroke of the keyboard) and addGoal (triggered by the submission button)
 * and the goal and deadline variables which are inputs from the use
 */

export default interface IFormProps  {
       handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
       addGoal: (event: React.FormEvent<HTMLFormElement>) => void,
       goal: string,
       deadline:number
     };

