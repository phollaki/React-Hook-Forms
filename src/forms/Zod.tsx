import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  firstName: z.string().min(1),
  age: z.number(),
})

type FormValues = z.infer<typeof schema>;

export default function Zod() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({resolver: zodResolver(schema)})

  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      {errors.firstName && <p>{errors.firstName?.message}</p>}


      <input type="number" {...register("age", {valueAsNumber: true})}/>
      {errors.age && <p>{errors.age?.message}</p>}


      <input type="submit" />
    </form>
  )
}