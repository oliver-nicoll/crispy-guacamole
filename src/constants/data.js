import images from './images';

const coffees = [
  {
    title: 'Peppermint Mocha',
    price: '$5',
    tags: "A traditional peppermint mocha latte topped w/ whip cream & peppermint pieces | 8 oz.",
  },
  {
    title: 'The Naughty List',
    price: '$5',
    tags: 'A chai latte stemed w/ 2 shots of espresso topped w/ cinnamon & nutmeg | 8oz',
  },
  {
    title: 'Anomaly Harvest',
    price: '$5',
    tags: 'Coffee combined w/ warm spices, chai tea & pumpkin pie syrup. All steamed w/ cream to perfection | 8oz',
  },
  {
    title: 'The Nice List',
    price: '$5',
    tags: 'Oatmilk steamed w/ 2 shots of espresso mixed w/ honey & cinnamon, topped w/ whip cream & cinnamon | 8 oz',
  },
];

const allbeers = [
  {
    title: 'Stout',
    price: '$5',
    tags: 'APV: 5.7% | Dark Full bodied w/ roasted malts, english hops & celtic sea salt | craft beer | 16 oz',
  },
  {
    title: "Hazy IPA",
    price: '$6',
    tags: 'APV: 6.7%  | Hazy & Juicy w/ Citra, Simcoe & Galaxy hops | 16 oz',
  },
  {
    title: 'IPA',
    price: '$6',
    tags: 'APV: 6.8% | Smooth & Balanced - Simcoe, Amarillo & Galaxy hops | 16 oz',
  },
  {
    title: 'Helles',
    price: '$5',
    tags: 'APV: 5.4% | Crisp w/ German malts & hops | 16 oz',
  },
  {
    title: 'German Wheat',
    price: '$6',
    tags: 'APV: 4.6% | Notes of banna & clove w/ German wheat, hops & malts | Campari | 16 oz',
  },
  {
    title: 'Criollo Porter',
    price: '$6',
    tags: 'APV: 6.1% | Rich & Decadent - Porter infused w/ cocoa nibs & vinilla beans | Campari | 16 oz',
  },
  {
    title: 'Pale Ale - Wai Mea',
    price: '$5',
    tags: 'APV: 6.2% | Blended w/ New Zealand hops, smooth & balanced. Notes of orange & pine | Campari | 16 oz',
  },
  {
    title: 'Dunkleweisen',
    price: '$5',
    tags: 'APV: 5% | Fruity, Spicy, Full Bodied | Campari | 16 oz',
  },
  {
    title: 'Winter Warmer',
    price: '$6',
    tags: 'APV: 6.7% | Sweet Vermouth | Campari | 16 oz',
  },
];

const beers = [
  {
    title: 'Stout',
    price: '$5',
    tags: 'APV: 5.7% | Dark Full bodied w/ roasted malts, english hops & celtic sea salt | craft beer | 16 oz',
  },
  {
    title: 'IPA',
    price: '$6',
    tags: 'APV: 6.8% | Smooth & Balanced - Simcoe, Amarillo & Galaxy hops | 16 oz',
  },
  {
    title: 'Helles',
    price: '$5',
    tags: 'APV: 5.4% | Crisp w/ German malts & hops | 16 oz',
  },
  {
    title: 'Criollo Porter',
    price: '$6',
    tags: 'APV: 6.1% | Rich & Decadent - Porter infused w/ cocoa nibs & vinilla beans | Campari | 16 oz',
  },
  {
    title: 'Dunkleweisen',
    price: '$5',
    tags: 'APV: 5% | Fruity, Spicy, Full Bodied | Campari | 16 oz',
  },
];

const events = [
  {
    imgUrl: images.num1,
    title: 'January Live Music - Rose Ostrowski and Brooke & Kevin',
    subtitle: 'Here at our home location, January 27th @ 7pm - Rose, January 28th @ 7pm - Brooke & Kevin | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num2,
    title: 'Coffeehouse Series - Live Music at Anomaly Craft Brewing',
    subtitle: 'Here at our home location, February 8th @ 7pm - Bret Alexander, March 8th @ 7pm - The Clarence Spady Band, April 12th @ 7pm - Dave Keys & Friends | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num3,
    title: 'Lions Gate Club House - Sip & Shop',
    subtitle: 'Find us at the Lions Gate Club May 7th from 11am - 3pm | Anomaly Firetruck',
  },
  {
    imgUrl: images.num4,
    title: 'Bloomsburg Fair',
    subtitle: 'Catch us at the 2023 Bloomsburg Fair | Anomaly Firetruck & Food Trailer',
  },
  {
    imgUrl: images.num5,
    title: 'RiverFest',
    subtitle: 'Catch us at the 2023 Berwick RiverFest | Anomaly Firetruck',
  },
];

export default { coffees, beers, events };
