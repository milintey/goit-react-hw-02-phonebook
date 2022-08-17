import PropTypes from 'prop-types';

export function Filter({ handleFilter }) {
  return <input type="text" onChange={handleFilter} />;
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
