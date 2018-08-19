export const tileData = [
  'color-coral',
  'color-ultramarine',
  'color-deepblue',
  'color-mustard',
  'color-ash',
  'color-peach',
  'color-wine',
  'color-moss',
  'color-mint'
];

export const YahooWeatherUrl = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='new york, ny')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
