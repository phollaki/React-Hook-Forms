import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


type FormValues = {
  firstName: string
  age: number;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()


export default function Yup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValues) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      {errors.firstName && <p>{errors.firstName?.message}</p>}


      <input {...register("age")} />
      {errors.age && <p>{errors.age?.message}</p>}


      <input type="submit" />
    </form>
  )
}