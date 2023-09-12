import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import Input from "@material-ui/core/Input"


interface IFormInput {
  firstName: string;
  iceCreamType: { label: string; value: string }
}


export default function ExternalLibrary () {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: 'default first name',
      iceCreamType: {},
    },
  })


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input style={{ borderRadius: '7px', backgroundColor: 'white' }} {...field} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  )
}