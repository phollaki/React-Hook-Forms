import { RenderCountHeader } from "../components/RenderCountHeader";
import { useState } from "react";

let renderCount = 0;

export default function Basic() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Typesafe data object
  const onSubmit = (data: React.FormEvent) => {
    data.preventDefault()
    console.log('username', (data.target as any)[0].value)
    console.log('password', (data.target as any)[1].value)
  }

  renderCount++


  return (
    <div>
      <RenderCountHeader count={renderCount}/>
       {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={(e)=>onSubmit(e)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input value={username} onChange={(e) => setUsername(e.target.value)} />

        {/* include validation with required or other standard HTML validation rules */}
        <input required value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* errors will return when field validation fails  */}
        {/* {errors.password && <ErrorMessage>Password is required</ErrorMessage>} */}


        <input type="submit" />
      </form>
    </div>
  )
}