/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from '../styles/ItemStyles';
import PriceTag from '../styles/PriceTag';
import formatPrice from '../../lib/formatPrice';

export default function Product({ product }) {
  console.log(product);
  return (
    <Link href={`/product/${product.id}`}>
      <ItemStyles>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product?.photo?.altText}
        />
        <PriceTag>{formatPrice(product?.price)}</PriceTag>
        <p>{product?.description}</p>
      </ItemStyles>
    </Link>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
