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
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/1280px-Coron_Med_mission_1.JPG',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/2013_Fireworks_on_Eiffel_Tower_28.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/497349186_1280x720.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Bjørnafjorden_in_moonlight.JPG',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Budapest,_the_Széchenyi_Baths_(1).jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Budapest_Parliament_amk.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Castle_Neuschwanstein.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Cheetah_with_cubs.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Cidade_Maravilhosa.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Dubai_Tourism.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/El_Nido_Palawan_2.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Glacier_Point_at_Sunset,_Yosemite_NP,_CA,_US_-_Diliff.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/GnusAndZebrasInMaraMasai.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Istanbul_(8274724020).jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Korea-Busan-Busan_Tower-01.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/IMG_0389.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Kozanji_Kyoto_Kyoto11s5s4592.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Kremlin_Moscow.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/KyotoFushimiInariLarge.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Louvre_Pyramid.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Machu_Picchu,_Peru.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Matrimandir.JPG',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Moraine_Lake_17092005.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/New_york_times_square-terabass.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Panoramic_view_of_the_Dnieper_River_right_bank._Kiev,_Ukraine,_Eastern_Europe.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Potala_palace21.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/PudongSkyline-pjt.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Sherwin_Range,_Benton_Crossing.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Sydney_Opera_House_-_Dec_2008.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Taipei_101_from_afar.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Taipei_Rushhour_birdseye.JPG',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Vilage_near_Çaykara,_Trabzon.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/Wakatobi_beach_2006.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/gwangan-bridge-at-nights-lighted-up-in-busan-south-korea.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/mountains-clouds-forest-fog.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/ocean-view-11277567586KFPz.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/pexels-photo-133935.jpeg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/pexels-photo-24491.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/pexels-photo-71241.jpeg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/pexels-photo-91222.jpeg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/pexels-photo.jpeg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/pexels-photo.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/taipei-101-at-late-dusk.jpg',
    },
    {
      image: 'https://s3.amazonaws.com/vr-fe-hackathon/images/天安门夜景.jpg',
    },
  ],
};

export default handleActions({
  [setList]: (state, action) => ({
    ...state,
    list: [...action.payload],
  }),
}, { ...initialState });
