/* eslint-disable global-require */
import Layout from '../components/Layout';
import Search from '../containers/Search';

module.exports = {
  path: '/',
  component: Layout,
  childRoutes: [
    {
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('../containers/Home').default);
          });
        },
      },
    },
    {
      path: 'search/:lat/:lng',
      component: Search,
      childRoutes: [
        {
          indexRoute: {
            component: require('../containers/Search/CitySearch').default,
          },
        },
        {
          path: 'days',
          component: require('../containers/Search/Days').default,
        },
      ],
    },
  ],
};
