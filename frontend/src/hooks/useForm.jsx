import { useState } from "react";

const useForm = (initForm, validateForm) => {
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setError(validateForm(e.target));
  };

  return {
    form,
    error,
    handleChange,
    handleBlur,
  };
};

export default useForm;
