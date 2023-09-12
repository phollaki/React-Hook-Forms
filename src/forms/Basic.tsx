import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage } from "../components/ErrorMessage"
import { RenderCountHeader } from "../components/RenderCountHeader";
import { useEffect } from "react";


type Inputs = {
  username: string;
  password: string;
}

let renderCount = 0;

export default function Basic() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>()
  // Typesafe data object
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('submitted data: ', data)

  renderCount++

  console.log('errors', errors)

  return (
    <div>
      <RenderCountHeader count={renderCount}/>
       {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="username" {...register('username')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {/* {errors.password && <ErrorMessage>Password is required</ErrorMessage>} */}


        <input type="submit" />
      </form>
    </div>
  )
}