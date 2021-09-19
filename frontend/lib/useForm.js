import { useEffect, useState } from 'react';

export default function useForm(initialFormState = {}) {
  const [inputs, setInputs] = useState(initialFormState);
  const inputValues = Object.values(inputs).join('');

  // useEffect(() => {
  //   setInputs(initialFormState);
  // }, [inputValues]);

  function handleInputChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
      console.log(value);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
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
    clearForm,
    resetForm,
  };
}
