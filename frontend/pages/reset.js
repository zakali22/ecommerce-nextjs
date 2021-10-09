import PropTypes from 'prop-types';
import RequestResetForm from '../components/RequestResetForm';
import ResetForm from '../components/ResetForm';

export default function ResetPage({ query }) {
  console.log(query);
  if (!query?.token) return <RequestResetForm />;

  return <ResetForm token={query.token} />;
}

ResetPage.propTypes = {
  query: PropTypes.object,
};
