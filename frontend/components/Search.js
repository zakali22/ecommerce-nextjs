/* eslint-disable react/jsx-props-no-spreading */
import { useLazyQuery } from '@apollo/client';
import { useCombobox, resetIdCounter } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { SearchStyles, DropDown, DropDownItem } from './styles/DropDown';

const SEARCH_TERM_QUERY = gql`
  query SEARCH_TERM_QUERY($searchTerm: String!) {
    searchItems: products(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      description
      price
      status
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  resetIdCounter();
  const [searchItems, { data, loading, error }] = useLazyQuery(
    SEARCH_TERM_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );

  const router = useRouter();

  const debouncedSearchItems = debounce(searchItems, 350);
  const items = data?.searchItems || [];

  const {
    isOpen,
    closeMenu,
    inputValue,
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      debouncedSearchItems({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item?.name || '',
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an item',
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              {...getItemProps({ item })}
              highlighted={index === highlightedIndex}
              onClick={() => {
                closeMenu();
                router.push({
                  pathname: `/product/${item.id}`,
                });
              }}
            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.photo.altText}
                width="150px"
              />
              {item.name}
            </DropDownItem>
          ))}

        {isOpen && !items.length && !loading && (
          <DropDownItem>
            Sorry, there are no results for {inputValue}
          </DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
