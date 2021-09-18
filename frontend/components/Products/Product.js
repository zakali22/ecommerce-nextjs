/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from '../styles/ItemStyles';
import PriceTag from '../styles/PriceTag';
import formatPrice from '../../lib/formatPrice';

const ItemTitleStyle = styled.h2`
  background: var(--red);
  font-size: 3.5rem;
  text-align: center;
  align-self: center;
  padding: 1rem;
  color: white;
  position: absolute;
  margin: 0;
  bottom: 89px;
  transform: skewX(-6deg) rotate(-1deg);
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.7); */
`;

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
        <ItemTitleStyle>{product?.name}</ItemTitleStyle>
        <p>{product?.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: {
                id: product?.id,
              },
            }}
          >
            Edit 📝
          </Link>
        </div>
      </ItemStyles>
    </Link>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
