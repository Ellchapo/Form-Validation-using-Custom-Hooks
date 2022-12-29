
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const { value:enteredName,
    isValid:enteredNameIsValid,
     hasError:nameInputHasError,
     valueChangeHandler:nameChangeHandler, 
     blurHandler:nameBlurHandler,
     reset:resetNameInput,
    } = useInput((value)=>value.trim() !== '');

    const { value:enteredEmail,
      isValid:enteredEmailIsValid,
       hasError:emailInputHasError,
       valueChangeHandler:emailChangeHandler, 
       blurHandler:emailBlurHandler,
       reset:resetEmailInput,
      } = useInput((value)=>value.includes('@')); 
  
   let formIsValid=false;

   if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid=true;}

 
  const formSubmissionHandler=(event)=>{
       event.preventDefault();
       
       if(!enteredNameIsValid){
       return;
  };
 resetNameInput();
 resetEmailInput();
  };
 
  const nameInputClasses= nameInputHasError?"form-control invalid":"form-control";
  const emailInputClasses= emailInputHasError?"form-control invalid":"form-control";
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onBlur={nameBlurHandler}
        onChange={nameChangeHandler}
        value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Your Name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
        type='email' 
        id='email' 
        onBlur={emailBlurHandler}
        onChange={emailChangeHandler}
        value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Please Enter a Valid Email</p>}
      </div>
      <div className={emailInputClasses}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
