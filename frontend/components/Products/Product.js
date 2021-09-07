import PropTypes from 'prop-types';

export default function Product({ product }) {
  return <p>{product.name}</p>;
}

Product.propTypes = {
  product: PropTypes.object,
};
