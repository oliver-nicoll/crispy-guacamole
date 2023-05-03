import images from './images';

const coffees = [
  {
    title: 'Raspberry Chocolate',
    price: '$6',
    tags: "Made with our homemade raspberry syrup. Death by chocolate iced coffee and topped with whipped cream & heart sprinkles | 8 oz.",
  },
  {
    title: 'The Naughty List',
    price: '$6',
    tags: 'A chai latte stemed w/ 2 shots of espresso topped w/ cinnamon & nutmeg | 8oz',
  },
  {
    title: 'Anomaly Harvest',
    price: '$6',
    tags: 'Coffee combined w/ warm spices, chai tea & pumpkin pie syrup. All steamed w/ cream to perfection | 8oz',
  },
  {
    title: 'The Nice List',
    price: '$6',
    tags: 'Oatmilk steamed w/ 2 shots of espresso mixed w/ honey & cinnamon, topped w/ whip cream & cinnamon | 8 oz',
  },
];

const allbeers = [
  {
    title: 'Stout',
    price: '$5',
    tags: 'ABV: 5.7% | Dark Full bodied w/ roasted malts, english hops & celtic sea salt | 16 oz',
  },
  {
    title: 'Irish Red',
    price: '$5',
    tags: 'ABV: 5.4% | Smooth & Simple | 16 oz',
  },
  {
    title: 'Euclid Abbey',
    price: '$6.50',
    tags: 'ABV: 7.5% | Belgian Styled Dubbel | 16 oz',
  },
  {
    title: "Hazy IPA",
    price: '$6',
    tags: 'ABV: 6.7%  | Hazy & Juicy w/ Citra, Simcoe & Galaxy hops | 16 oz',
  },
  {
    title: 'IPA',
    price: '$6',
    tags: 'ABV: 6.8% | Smooth & Balanced - Simcoe, Amarillo & Galaxy hops | 16 oz',
  },
  {
    title: 'Helles',
    price: '$5',
    tags: 'ABV: 5.4% | Crisp w/ German malts & hops | 16 oz',
  },
  {
    title: 'German Wheat',
    price: '$6',
    tags: 'ABV: 4.6% | Notes of banna & clove w/ German wheat, hops & malts | 16 oz',
  },
  {
    title: 'Criollo Porter',
    price: '$6',
    tags: 'ABV: 6.7% | Strong Porter | 16 oz',
  },
  {
    title: 'Criollo Porter',
    price: '$6',
    tags: 'ABV: 6.1% | Rich & Decadent - Porter infused w/ cocoa nibs & vinilla beans | 16 oz',
  },
  {
    title: 'Pale Ale - Wai Mea',
    price: '$5',
    tags: 'ABV: 6.2% | Blended w/ New Zealand hops, smooth & balanced. Notes of orange & pine | 16 oz',
  },
  {
    title: 'Dunkleweisen',
    price: '$5',
    tags: 'ABV: 5% | Dark Amber Wheat | 16 oz',
  },
  {
    title: 'Winter Warmer',
    price: '$6',
    tags: 'ABV: 6.7% | Sweet Vermouth | 16 oz',
  },
  {
    title: 'SoulFire',
    price: '$6.50',
    tags: 'ABV: 7.7% | Honey spiced | 16 oz',
  },
  {
    title: 'Cold Brew Stout',
    price: '$5',
    tags: 'ABV: 4.2% | Coffee infused into a dark dry stout | 16 oz',
  },
  {
    title: 'Rauchbier',
    price: '$5',
    tags: 'ABV: 5.4% | Bamburg style lager, decoction mashed w/ munich & beechwood smoked malt | 16 oz',
  },
  {
    title: 'AFO Pilsner',
    price: '$5',
    tags: 'ABV: 5.3% | Fruity, Spicy, Full Bodied | 16 oz',
  },
];

//updated 5/03/23

const beers = [
 {
    title: 'Helles',
    price: '$5',
    tags: 'ABV: 5% | Crisp w/ German malts & hops | 16 oz',
  },
  {
    title: 'New World Lager',
    price: '$5',
    tags: 'ABV: 3.4% | Session I.P.L w/ big american hop character & a low ABV | 16 oz',
  },
  {
    title: 'Saison',
    price: '$5',
    tags: 'ABV: 6.3% | A full flavored Belgian style ale - peppery, fruity, dry | 16 oz',
  },
  {
    title: 'Pale Ale',
    price: '$5',
    tags: 'ABV: 6.2% | Blended w/ New Zealand hops, smooth & balanced. Notes of orange & pine | 16 oz'
  },
  {
    title: 'Euclid Abbey',
    price: '$6.50',
    tags: 'ABV: 7.5% | Belgian Styled Dubbel | 16 oz',
  },
];

//updated 03.25
const events = [
  {
    imgUrl: images.num1,
    title: 'Brooke & Kevin ',
    subtitle: 'Here at our home location,  May 12th @ 7pm - Brooke & Kevin  | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num2,
    title: 'Coffeehouse Series - Live Music at Anomaly Craft Brewing',
    subtitle: 'Here at our home location, May 10th @ 7pm - Deb Callahan Band | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num3,
    title: 'Lions Gate Club House - Sip & Shop',
    subtitle: 'Find us at the Lions Gate Club May 7th from 11am - 3pm | Anomaly Firetruck',
  },
  {
    imgUrl: images.num4,
    title: 'Worship Night W/ Lauren Ney',
    subtitle: 'Everyone is welcomed - Join us at Anomaly for our first ever worship night May 11th @ 6pm | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num5,
    title: 'Bloomsburg Fair',
    subtitle: 'Catch us at the 2023 Berwick RiverFest | Anomaly Firetruck',
  },
];

const mugClubInfo = [
  {
    imgUrl: images.num1,
    title: 'A custom made 20 oz. mug',
    subtitle: 'That is an additional +4 fl. ounces more than our regular cup - Mugs made by: @a.peaceful.potter',
  },
  {
    imgUrl: images.num2,
    title: 'First fill of mug free of charge',
    subtitle: 'Each mug will be numbered with your own unique member number',
  },
  {
    imgUrl: images.num3,
    title: 'Use the mug for COFFEE OR BEER',
    subtitle: 'Best of both worlds!',
  },
  {
    imgUrl: images.num4,
    title: 'Charity donation',
    subtitle: '$5 donated to local charity  with every membership sign up',
  },
  {
    imgUrl: images.num5,
    title: 'Member Only Events',
    subtitle: 'Exclusive members only events w/ access to new beers sooner',
  },
  {
    imgUrl: images.num6,
    title: 'Complimentary Birthday Meal',
    subtitle: 'Enjoy a meal on us!',
  },
]

export default { coffees, beers, events, mugClubInfo };
