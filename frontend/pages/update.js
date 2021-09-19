import PropTypes from 'prop-types';
import UpdateProduct from '../components/Products/UpdateProduct';

export default function UpdatePage({ query: { id } }) {
  return <UpdateProduct id={id} />;
}

UpdatePage.propTypes = {
  query: PropTypes.object,
};
