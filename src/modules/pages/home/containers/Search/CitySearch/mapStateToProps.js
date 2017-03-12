import R from 'ramda';

const mapStateToProps = (state, { location: { query: { selectedCity = '' } } }) => ({
  photos: R.filter(R.compose(
    R.contains(selectedCity),
    R.prop('name'),
  ))(state.photos.list),
});

export default mapStateToProps;
