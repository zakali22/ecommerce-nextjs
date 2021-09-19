/* eslint-disable import/no-cycle */
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import PropTypes from 'prop-types';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { UPDATE_PRODUCT_MUTATION } from './Products/UpdateProduct';
import { PRODUCT_QUERY } from './Products/SingleProduct';

export default function EditForm({
  product: { id, name, description, price, status, photo },
}) {
  const { inputs, handleInputChange, clearForm, resetForm } = useForm({
    name,
    description,
    price,
    status,
  });

  const [updateProduct, { data, loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      variables: {
        id,
        name: inputs.name,
        description: inputs.description,
        price: inputs.price,
        status: inputs.status,
      },
      refetchQueries: [
        {
          query: PRODUCT_QUERY,
          variables: {
            id,
          },
        },
      ],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(inputs);
        const res = await updateProduct();
        console.log(res.data);
        // Router.push({
        //   pathname: `/product/${res.data?.updateProduct?.id}`,
        // });
      }}
    >
      <fieldset aria-busy={loading} disabled={loading}>
        {/* <label htmlFor="image">
          Image
          <input
            required
            id="image"
            name="image"
            type="file"
            onChange={(e) => handleInputChange(e)}
          />
        </label> */}
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={inputs.name}
            placeholder="Enter name of product"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={inputs.price}
            placeholder="Enter price of product"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            placeholder="Enter description of product"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label htmlFor="description">
          Status
          <select
            id="status"
            name="status"
            onChange={(e) => handleInputChange(e)}
          >
            <option value="AVAILABLE">Available</option>
            <option value="IN_PROGRESS">In progress</option>
            <option value="UNAVAILABLE">Unavailable</option>
          </select>
        </label>
        <button type="submit">Update product</button>
        <button type="button" onClick={clearForm}>
          Clear form
        </button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </fieldset>
    </Form>
  );
}

EditForm.propTypes = {
  product: PropTypes.object,
};
