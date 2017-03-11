import R from 'ramda';

import * as Contents from 'modules/redux/contents';

const mapDispatchToProps = dispatch => ({
  update: R.compose(dispatch, Contents.fetchList),
});

export default mapDispatchToProps;
