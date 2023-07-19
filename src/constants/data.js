import images from './images';

const coffees = [
  {
    title: 'Pretzel & Beer Cheese',
    price: '$11',
    tags: "Soft pretzel served w/ our homemade beer cheese",
  },
  {
    title: 'Nachos',
    price: '$11',
    tags: 'Salsa, beer cheese, jalapeños, olives',
  },
  {
    title: 'Quesadilla',
    price: '$11',
    tags: 'Tortillas, sharp cheese, spinach, jalapeños, beer cheese, side of chips & salsa',
  },
  {
    title: 'Smoked Brisket/Pork/Chicken Sandwich',
    price: '$12',
    tags: 'Your choice of smoked meat on a roll | side of chips or upgrade your side',
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
    title: 'Saison',
    price: '$5',
    tags: 'ABV: 6.3% | A full flavored Belgian style ale - peppery, fruity, dry | 16 oz'
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
  {
    title: 'Euclid Abbey',
    price: '$6.50',
    tags: 'ABV: 7.5% | Belgian Styled Dubbel | 16 oz',
  },
  {
    title: 'Pale Ale',
    price: '$5',
    tags: 'ABV: 6.2% | Blended w/ New Zealand hops, smooth & balanced. Notes of orange & pine | 16 oz'
  },
  {
    title: 'Bouza',
    price: '$5',
    tags: "ABV: 3.5% | Wheat based, fermented w/ sourdough cultures, nfused w/ mixed berries - it's purple | 16 oz"
  },
  {
    title: 'New World Lager',
    price: '$5',
    tags: 'ABV: 3.4% | Session I.P.L w/ big american hop character & a low ABV | 16 oz',
  },
  {
    title: 'Willowtree White',
    price: '$5',
    tags: 'ABV: 4.6% | Belgian Styled White | 16 oz',
  },
];

//updated 07/18/23

const beers = [
 {
    title: 'Helles',
    price: '$5',
    tags: 'ABV: 5% | Crisp w/ German malts & hops | 16 oz',
  },
  {
    title: 'Rosa Salz',
    price: '$5',
    tags: 'ABV: 4.2% | Gose style - Tart, refreshing saltiness | 16 oz',
  },
  {
    title: 'Summer Dusk Porter',
    price: '$5',
    tags: "ABV: 4.2% | A mild, dark beer w/ flavors of caramel, toffee & chocolate | 16 oz"
  },
  {
    title: 'Wheat Bier',
    price: '$5',
    tags: "ABV: 5% | German style hefeweizen | 16 oz"
  },
  {
    title: 'Anomaly IPA',
    price: '$6.50',
    tags: 'ABV: 6.9% | Classic american style IPA. | 16 oz',
  },
];

//updated 05.27
const events = [
  {
    imgUrl: images.num1,
    title: 'Music by: Dan Hess, Brooke & Kevin',
    subtitle: 'Here at our home location,  July 21, 2023 @ 6PM & August 4 @ 7PM | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num2,
    title: 'BBQ & Brews',
    subtitle: 'Catch us at the Bloomsburg Fairgrounds, August 25 - 27 | Anomaly Firetruck',
  },
  {
    imgUrl: images.num3,
    title: 'Skook Brew Fest',
    subtitle: 'Find us at the Skook in Pottsville on Saturday, July 22nd @ 2PM | Anomaly Firetruck',
  },
  {
    imgUrl: images.num4,
    title: 'Celebrate Berwick',
    subtitle: 'Come catch us at Celebrate Berwick on August 5th with the firetruck | Anomaly Firetruck',
  },
  {
    imgUrl: images.num5,
    title: 'Bloomsburg Fair',
    subtitle: 'Catch us at the 2023 Bloomsburg Fair | Anomaly Firetruck',
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
