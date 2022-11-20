

export default interface IFormProps  {
    //   onChange: React.MouseEventHandler<HTMLInputElement>,
    
       handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
       addGoal: (event: React.FormEvent<HTMLFormElement>) => void,
       goal: string,
       deadline:number
     };

