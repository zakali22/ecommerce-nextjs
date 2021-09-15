import { useState } from 'react';

export default function useForm(initialFormState = {}) {
  const [inputs, setInputs] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleInputChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    setIsSubmitted(true);
  }

  function clearForm() {
    const blankFormState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankFormState);
  }

  function resetForm() {
    setInputs(initialFormState);
    console.log(inputs);
  }

  return {
    inputs,
    handleInputChange,
    handleSubmit,
    isSubmitted,
    clearForm,
    resetForm,
  };
}
