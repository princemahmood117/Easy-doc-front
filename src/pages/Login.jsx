import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  
  const [name, setName] = useState("");
  
  const [password, setPassword] = useState("");

  const [blood, setBlood] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    // <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
    //     <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">

    //         <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : "Login"}</p>
    //         <p>{state === 'Sign Up' ? 'sign up' : "log in"} to book an appointment</p>

    //         {
    //             state === 'Sign Up' && 
    //             <div className="w-full">
    //                 <p>Full name</p>
    //                 <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="text" value={name} onChange={(e)=> setName(e.target.name)} required/>
    //             </div>
    //         }


    //         <div className="w-full">
    //             <p>Email</p>
    //             <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
    //         </div>

    //         <div className="w-full">
    //             <p>Full name</p>
    //             <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
    //         </div>

    //         <button className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-500 transition-all duration-300">{state === 'Sign Up' ? 'Create Account' : "Login"}</button>

    //         {
    //             state === 'Sign Up' ? <p>Already have an account? <span onClick={()=> setState('Login')} className="text-blue-700 underline cursor-pointer">Login here</span> </p> : <p>Create a new account? <span  onClick={()=> setState('Sign Up')} className="text-blue-700 derline cursor-pointer">Click here</span> </p>
    //         }
    //     </div>
    // </form>

         <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">

            <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : "Login"}</p>
            <p>{state === 'Sign Up' ? 'sign up' : "log in"} to book an appointment</p>

            {
                state === 'Sign Up' && 
                <div className="w-full">
                    <p>Full name</p>
                    <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="text" value={name} onChange={(e)=> setName(e.target.name)} required/>
                </div>
            }


            <div className="w-full">
                <p>Email</p>
                <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            </div>

            <div className="w-full">
                <p>Blood Group</p>
                <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="text" value={blood} onChange={(e)=> setBlood(e.target.value)} required/>
            </div>

            <div className="w-full">
                <p>Password</p>
                <input className="border border-zinc-300 rounded w-full mt-1 p-1.5" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
            </div>

            <button className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-500 transition-all duration-300">{state === 'Sign Up' ? 'Create Account' : "Login"}</button>

            {
                state === 'Sign Up' ? <p>Already have an account? <span onClick={()=> setState('Login')} className="text-blue-700 underline cursor-pointer">Login here</span> </p> : <p>Create a new account? <span  onClick={()=> setState('Sign Up')} className="text-blue-700 derline cursor-pointer">Click here</span> </p>
            }
        </div>
    </form>
 
  );
};

export default Login;
