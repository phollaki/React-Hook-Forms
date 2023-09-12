import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  test: string;
  date: string;
}

// required
// min
// max
// minLength
// maxLength
// pattern
// validate
// https://react-hook-form.com/docs/useform/register
// Async validation: validate: (value) => checkUrl: async () => await fetch() || 'error message'

export default function Validated() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="firstname"
        {...register("firstName", {
          required: "First name is required",
          maxLength: {
            value: 20,
            message: "First name must be shorter than 20 chars",
          },
        })}
      />
      {errors.firstName && (
        <ErrorMessage>
          {errors.firstName?.type} {errors.firstName?.message}
        </ErrorMessage>
      )}

      <input
        placeholder="lastname"
        {...register("lastName", {
          pattern: {
            value: /^[a-z ,.'-]+$/i,
            message: "Last name is not valid",
          },
        })}
      />
      {errors.lastName && (
        <ErrorMessage>
          {errors.lastName?.type} {errors.lastName?.message}
        </ErrorMessage>
      )}

      <input
        placeholder="age"
        type="number"
        {...register("age", {
          min: { value: 18, message: "minimum age is 18" },
          max: { value: 99, message: "maximum age is 99" },
        })}
      />
      {errors.age && (
        <ErrorMessage>
          {errors.age?.type} {errors.age?.message}
        </ErrorMessage>
      )}

      <input
        {...register("test", {
          validate: (value, formValues) => value === "1" || "Value is not = 1",
        })}
      />
      {errors.test && (
        <ErrorMessage>
          {errors.test?.type} {errors.test?.message}
        </ErrorMessage>
      )}

      {/* <input
        type="date"
        {...register("date", {
          valueAsDate: true,
        })}
      />
      {errors.date && (
        <ErrorMessage>
          {errors.date?.type} {errors.date?.message}
        </ErrorMessage>
      )} */}

      {/* <input
        {...register("test1", {
          validate: {
            positive: (v) => parseInt(v) > 0 || "should be greater than 0",
            lessThanTen: (v) => parseInt(v) < 10 || "should be lower than 10",
            validateNumber: (_: number, formValues: FormValues) => {
              return (
                formValues.number1 + formValues.number2 === 3 ||
                "Check sum number"
              );
            },
            // you can do asynchronous validation as well
            checkUrl: async () => (await fetch()) || "error message", // JS only: <p>error message</p> TS only support string
          },
        })}
      /> */}

      <input type="submit" />
    </form>
  );
}
