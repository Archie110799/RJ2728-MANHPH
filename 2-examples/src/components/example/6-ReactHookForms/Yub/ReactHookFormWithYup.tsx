import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  name: string;
  phone: string;
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, "The Name must be unique and between 3 - 128 characters")
      .max(128, "The Name must be unique and between 3 - 128 characters")
      .required("The Name is not blank"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  })
  .required();

const ReactHookFormWithYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <input {...register("phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <input type="submit" />
    </form>
  );
};

export default ReactHookFormWithYup;
