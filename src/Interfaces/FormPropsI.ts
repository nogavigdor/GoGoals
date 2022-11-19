

export default interface FormPropsI  {
    //   onChange: React.MouseEventHandler<HTMLInputElement>,
    
       handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
       addGoal: (event: React.FormEvent<HTMLFormElement>) => void
     };

