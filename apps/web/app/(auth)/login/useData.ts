import { SignInAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { authenticate } from "../actions";

export const useData = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInAuthInputs) => {
    event?.preventDefault();

    if (errors.root) return;
    await formAction(JSON.stringify(data));
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    state,
  };
};
