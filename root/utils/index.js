import {PermissionsAndroid} from 'react-native';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return granted;
    } else {
      console.log('NOT GRANTED');
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
}
function capitalize(fecha) {
  return fecha.charAt(0).toUpperCase() + fecha.slice(1);
}
function groupDays(weatherDays) {
  let devolver = {};
  weatherDays.forEach(time => {
    let day = time.dt_txt.slice(0, 10);
    if (devolver.hasOwnProperty(day)) {
      devolver[day].push(time);
    } else {
      devolver[day] = [time];
    }
  });

  return devolver;
}
const dataToday = {
  coord: {
    lon: -58.7744,
    lat: -34.4007,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 283.4,
    feels_like: 282.44,
    temp_min: 282.02,
    temp_max: 286.09,
    pressure: 1018,
    humidity: 75,
  },
  visibility: 10000,
  wind: {
    speed: 3.09,
    deg: 20,
  },
  clouds: {
    all: 0,
  },
  dt: 1660180724,
  sys: {
    type: 2,
    id: 2031574,
    country: 'AR',
    sunrise: 1660128009,
    sunset: 1660166453,
  },
  timezone: -10800,
  id: 3480730,
  name: 'Maquinista Savio',
  cod: 200,
};

const allTimeToday = {
  coord: {
    lon: -58.7744,
    lat: -34.4007,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n',
    },
  ],
  base: 'stations',
  main: {
    temp: 283.4,
    feels_like: 282.44,
    temp_min: 282.02,
    temp_max: 286.09,
    pressure: 1018,
    humidity: 75,
  },
  visibility: 10000,
  wind: {
    speed: 3.09,
    deg: 20,
  },
  clouds: {
    all: 0,
  },
  dt: 1660180724,
  sys: {
    type: 2,
    id: 2031574,
    country: 'AR',
    sunrise: 1660128009,
    sunset: 1660166453,
  },
  timezone: -10800,
  id: 3480730,
  name: 'Maquinista Savio',
  cod: 200,
};

const dataWeatherWeek = [
  [
    {
      dt: 1660176000,
      main: {
        temp: 300.2,
        feels_like: 300.43,
        temp_min: 299.36,
        temp_max: 300.2,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1017,
        humidity: 47,
        temp_kf: 0.84,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.23,
        deg: 314,
        gust: 4.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-11 00:00:00',
    },
    {
      dt: 1660186800,
      main: {
        temp: 295.83,
        feels_like: 295.69,
        temp_min: 293.44,
        temp_max: 295.83,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 59,
        temp_kf: 2.39,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3,
        deg: 311,
        gust: 4.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-11 03:00:00',
    },
    {
      dt: 1660197600,
      main: {
        temp: 290.67,
        feels_like: 290.46,
        temp_min: 290.67,
        temp_max: 290.67,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1018,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.62,
        deg: 290,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-11 06:00:00',
    },
    {
      dt: 1660208400,
      main: {
        temp: 289.68,
        feels_like: 289.45,
        temp_min: 289.68,
        temp_max: 289.68,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1018,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.14,
        deg: 284,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-11 09:00:00',
    },
    {
      dt: 1660219200,
      main: {
        temp: 288.8,
        feels_like: 288.59,
        temp_min: 288.8,
        temp_max: 288.8,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.6,
        deg: 274,
        gust: 1.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-11 12:00:00',
    },
    {
      dt: 1660230000,
      main: {
        temp: 291.21,
        feels_like: 290.95,
        temp_min: 291.21,
        temp_max: 291.21,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 0.92,
        deg: 288,
        gust: 1.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-11 15:00:00',
    },
    {
      dt: 1660240800,
      main: {
        temp: 298.37,
        feels_like: 298.02,
        temp_min: 298.37,
        temp_max: 298.37,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1017,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.41,
        deg: 313,
        gust: 2.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-11 18:00:00',
    },
    {
      dt: 1660251600,
      main: {
        temp: 302.02,
        feels_like: 300.92,
        temp_min: 302.02,
        temp_max: 302.02,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.57,
        deg: 310,
        gust: 3.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-11 21:00:00',
    },
    {
      dt: 1660262400,
      main: {
        temp: 299.56,
        feels_like: 299.56,
        temp_min: 299.56,
        temp_max: 299.56,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 4.41,
        deg: 308,
        gust: 4.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-12 00:00:00',
    },
    {
      dt: 1660273200,
      main: {
        temp: 292.9,
        feels_like: 292.58,
        temp_min: 292.9,
        temp_max: 292.9,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.8,
        deg: 302,
        gust: 4.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-12 03:00:00',
    },
    {
      dt: 1660284000,
      main: {
        temp: 290.1,
        feels_like: 289.81,
        temp_min: 290.1,
        temp_max: 290.1,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.4,
        deg: 274,
        gust: 2.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-12 06:00:00',
    },
    {
      dt: 1660294800,
      main: {
        temp: 289.17,
        feels_like: 288.86,
        temp_min: 289.17,
        temp_max: 289.17,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.15,
        deg: 266,
        gust: 1.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-12 09:00:00',
    },
    {
      dt: 1660305600,
      main: {
        temp: 288.49,
        feels_like: 288.19,
        temp_min: 288.49,
        temp_max: 288.49,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.95,
        deg: 261,
        gust: 1.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-12 12:00:00',
    },
    {
      dt: 1660316400,
      main: {
        temp: 290.65,
        feels_like: 290.36,
        temp_min: 290.65,
        temp_max: 290.65,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.37,
        deg: 287,
        gust: 2.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-12 15:00:00',
    },
    {
      dt: 1660327200,
      main: {
        temp: 298.13,
        feels_like: 297.75,
        temp_min: 298.13,
        temp_max: 298.13,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.45,
        deg: 312,
        gust: 3.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-12 18:00:00',
    },
    {
      dt: 1660338000,
      main: {
        temp: 301.38,
        feels_like: 300.46,
        temp_min: 301.38,
        temp_max: 301.38,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.93,
        deg: 310,
        gust: 4.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-12 21:00:00',
    },
    {
      dt: 1660348800,
      main: {
        temp: 299.51,
        feels_like: 299.51,
        temp_min: 299.51,
        temp_max: 299.51,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.16,
        deg: 308,
        gust: 4.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-13 00:00:00',
    },
    {
      dt: 1660359600,
      main: {
        temp: 292.95,
        feels_like: 292.53,
        temp_min: 292.95,
        temp_max: 292.95,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.85,
        deg: 295,
        gust: 4.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-13 03:00:00',
    },
    {
      dt: 1660370400,
      main: {
        temp: 290.08,
        feels_like: 289.66,
        temp_min: 290.08,
        temp_max: 290.08,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.25,
        deg: 263,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-13 06:00:00',
    },
    {
      dt: 1660381200,
      main: {
        temp: 289.3,
        feels_like: 288.88,
        temp_min: 289.3,
        temp_max: 289.3,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.18,
        deg: 251,
        gust: 1.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-13 09:00:00',
    },
    {
      dt: 1660392000,
      main: {
        temp: 288.47,
        feels_like: 288.07,
        temp_min: 288.47,
        temp_max: 288.47,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 0.99,
        deg: 254,
        gust: 1.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-13 12:00:00',
    },
    {
      dt: 1660402800,
      main: {
        temp: 291.15,
        feels_like: 290.73,
        temp_min: 291.15,
        temp_max: 291.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.64,
        deg: 246,
        gust: 1.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-13 15:00:00',
    },
    {
      dt: 1660413600,
      main: {
        temp: 299.24,
        feels_like: 299.24,
        temp_min: 299.24,
        temp_max: 299.24,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.84,
        deg: 312,
        gust: 2.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-13 18:00:00',
    },
    {
      dt: 1660424400,
      main: {
        temp: 303.48,
        feels_like: 301.83,
        temp_min: 303.48,
        temp_max: 303.48,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 24,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.45,
        deg: 304,
        gust: 3.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-13 21:00:00',
    },
    {
      dt: 1660435200,
      main: {
        temp: 300.59,
        feels_like: 299.94,
        temp_min: 300.59,
        temp_max: 300.59,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.12,
        deg: 304,
        gust: 4.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-14 00:00:00',
    },
    {
      dt: 1660446000,
      main: {
        temp: 293.01,
        feels_like: 292.64,
        temp_min: 293.01,
        temp_max: 293.01,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.85,
        deg: 289,
        gust: 3.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-14 03:00:00',
    },
    {
      dt: 1660456800,
      main: {
        temp: 290.09,
        feels_like: 289.8,
        temp_min: 290.09,
        temp_max: 290.09,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.74,
        deg: 265,
        gust: 2.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-14 06:00:00',
    },
    {
      dt: 1660467600,
      main: {
        temp: 289.06,
        feels_like: 288.77,
        temp_min: 289.06,
        temp_max: 289.06,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'algo de nubes',
          icon: '02n',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.32,
        deg: 251,
        gust: 1.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-14 09:00:00',
    },
    {
      dt: 1660478400,
      main: {
        temp: 288.35,
        feels_like: 288.01,
        temp_min: 288.35,
        temp_max: 288.35,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'algo de nubes',
          icon: '02n',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.08,
        deg: 214,
        gust: 1.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-14 12:00:00',
    },
    {
      dt: 1660489200,
      main: {
        temp: 290.55,
        feels_like: 290.15,
        temp_min: 290.55,
        temp_max: 290.55,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 0.9,
        deg: 223,
        gust: 1.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-14 15:00:00',
    },
    {
      dt: 1660500000,
      main: {
        temp: 298.77,
        feels_like: 298.41,
        temp_min: 298.77,
        temp_max: 298.77,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.27,
        deg: 303,
        gust: 1.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-14 18:00:00',
    },
    {
      dt: 1660510800,
      main: {
        temp: 303.03,
        feels_like: 301.79,
        temp_min: 303.03,
        temp_max: 303.03,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.09,
        deg: 306,
        gust: 2.73,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-14 21:00:00',
    },
    {
      dt: 1660521600,
      main: {
        temp: 300.64,
        feels_like: 300.28,
        temp_min: 300.64,
        temp_max: 300.64,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.81,
        deg: 300,
        gust: 3.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-15 00:00:00',
    },
    {
      dt: 1660532400,
      main: {
        temp: 292.75,
        feels_like: 292.52,
        temp_min: 292.75,
        temp_max: 292.75,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.58,
        deg: 290,
        gust: 3.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-15 03:00:00',
    },
    {
      dt: 1660543200,
      main: {
        temp: 290.35,
        feels_like: 290.14,
        temp_min: 290.35,
        temp_max: 290.35,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.49,
        deg: 255,
        gust: 2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-15 06:00:00',
    },
    {
      dt: 1660554000,
      main: {
        temp: 289.52,
        feels_like: 289.28,
        temp_min: 289.52,
        temp_max: 289.52,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 1.11,
        deg: 225,
        gust: 1.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-15 09:00:00',
    },
    {
      dt: 1660564800,
      main: {
        temp: 288.83,
        feels_like: 288.52,
        temp_min: 288.83,
        temp_max: 288.83,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.07,
        deg: 199,
        gust: 1.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-15 12:00:00',
    },
    {
      dt: 1660575600,
      main: {
        temp: 291.22,
        feels_like: 290.86,
        temp_min: 291.22,
        temp_max: 291.22,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.92,
        deg: 212,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-15 15:00:00',
    },
    {
      dt: 1660586400,
      main: {
        temp: 299.78,
        feels_like: 299.78,
        temp_min: 299.78,
        temp_max: 299.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.94,
        deg: 299,
        gust: 0.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-15 18:00:00',
    },
    {
      dt: 1660597200,
      main: {
        temp: 304.47,
        feels_like: 303.03,
        temp_min: 304.47,
        temp_max: 304.47,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 2.87,
        deg: 307,
        gust: 2.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-15 21:00:00',
    },
  ],
];

const ICON_LIST = {
  '01n': 'moon',
  '02n': 'cloudy-night',
  '03n': 'cloudy',
  '04n': 'cloudy',
  '09n': 'rainy',
  '10n': 'rainy',
  '11n': 'rainy',
  '13n': 'snow',
  '50n': 'cloudy',
  '01d': 'sunny',
  '02d': 'cloudy',
  '03d': 'cloudy',
  '04d': 'cloudy',
  '09d': 'rainy-outline',
  '10d': 'rainy-outline',
  '11d': 'rainy-outline',
  '13d': 'snow',
  '50d': 'cloudy',
};
export {
  requestLocationPermission,
  dataWeatherWeek,
  groupDays,
  capitalize,
  dataToday,
  ICON_LIST
};
