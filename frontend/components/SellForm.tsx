import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $status: String
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        status: $status
        price: $price
        photo: { create: { image: $image } }
      }
    ) {
      id
      name
      description
      status
      price
    }
  }
`;

export default function SellForm() {
  const {
    inputs,
    handleInputChange,
    isSubmitted,
    clearForm,
    resetForm,
    handleSubmit,
  } = useForm({
    name: '',
    description: '',
    price: 0,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset aria-busy={isSubmitted} disabled={isSubmitted}>
        <label htmlFor="image">
          Image
          <input
            required
            id="image"
            name="image"
            type="file"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
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
        <button type="submit" onClick={handleSubmit}>
          + Add product
        </button>
        <button type="submit" onClick={clearForm}>
          Clear form
        </button>
        <button type="submit" onClick={resetForm}>
          Reset form
        </button>
      </fieldset>
    </Form>
  );
}
