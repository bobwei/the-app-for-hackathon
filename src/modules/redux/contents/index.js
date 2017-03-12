import { createAction, handleActions } from 'redux-actions';
import R from 'ramda';
import axios from 'axios';

export const modulePrefix = 'modules/redux/contents';

/*
  Sync actions
*/
export const setList = createAction(`${modulePrefix}:setList`);

/*
  Async actions
*/
export const fetchList = () => dispatch =>
  axios
    .get('/api/instagram/v1/locations/search?lat=48.858844&lng=2.294351&access_token=110379.60788ca.022de8f0f7a546afb64a6dd1746c5895')
    .then(R.compose(dispatch, setList, R.path(['data', 'data'])));

export const initialState = {
  list: [
    {
      image: 'https://bobwei.github.io/helloworld-assets/1280px-Coron_Med_mission_1.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/2013_Fireworks_on_Eiffel_Tower_28.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Bjørnafjorden_in_moonlight.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Budapest.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Budapest_Parliament_amk.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Castle_Neuschwanstein.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Cheetah_with_cubs.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Cidade_Maravilhosa.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Dubai_Tourism.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/El_Nido_Palawan_2.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Glacier_Point_at_Sunset,_Yosemite_NP,_CA,_US_-_Diliff.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/GnusAndZebrasInMaraMasai.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Istanbul_(8274724020).jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Korea-Busan-Busan_Tower-01.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/IMG_0389.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Kozanji_Kyoto_Kyoto11s5s4592.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Kremlin_Moscow.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/KyotoFushimiInariLarge.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Louvre_Pyramid.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Machu_Picchu,_Peru.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Matrimandir.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Moraine_Lake_17092005.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/New_york_times_square-terabass.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Panoramic_view_of_the_Dnieper_River_right_bank._Kiev,_Ukraine,_Eastern_Europe.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Potala_palace21.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/PudongSkyline-pjt.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Sherwin_Range,_Benton_Crossing.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Sydney_Opera_House_-_Dec_2008.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Taipei_101_from_afar.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Taipei_Rushhour_birdseye.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/Wakatobi_beach_2006.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/gwangan-bridge-at-nights-lighted-up-in-busan-south-korea.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/mountains-clouds-forest-fog.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/ocean-view-11277567586KFPz.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/pexels-photo-24491.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/pexels-photo.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/taipei-101-at-late-dusk.jpg',
    },
    {
      image: 'https://bobwei.github.io/helloworld-assets/天安门夜景.jpg',
    },
  ],
};

export default handleActions({
  [setList]: (state, action) => ({
    ...state,
    list: [...action.payload],
  }),
}, { ...initialState });
