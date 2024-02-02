import images from './images';

const coffees = [
  {
    title: 'Breakfast Sandwich',
    price: '$12',
    tags: "Delicious & offered all day! The perfect, mouth watering brekkie option.",
  },
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
    price: '$6.00',
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
    title: 'Anomaly IPA',
    price: '$6.50',
    tags: 'ABV: 6.9% | Classic american style IPA | 16 oz',
  },
  {
    title: 'Wheat Bier',
    price: '$5',
    tags: "ABV: 5% | German style hefeweizen | 16 oz"
  },
  {
    title: 'Peach Wheat',
    price: '$5',
    tags: 'ABV: 3% | Sour wheat beer - tart, refreshing and juicy | 16 oz',
  },
  {
    title: '4th Street Ale',
    price: '$5',
    tags: 'ABV: 5.6% | Local hops - Varieties unknown, subtle candied citrus notes | 16 oz'
  },
 {
    title: 'Festbier',
    price: '$5',
        tags: "ABV: 5.8% | Malt driven amber lager | 16 oz"
 } ,
 {
  title: 'Hazy IPA',
  price: '$6',
  tags: "ABV: 6.7% | Hazy & Juicy | 16 oz"
 } ,
 {
  title: 'Squash Patch',
 price: '$5',
 tags: 'ABV: 6.4% | Fall time spiced ale, locally grown and roasted butternut squash | 16 oz'
},
{
  title: 'Criollo Porter',
  price: '$6',
  tags: "ABV: 6.4% | A rich, decadent portor bursting w/ heady Madagascar vanilla and house roasted cocoa nibs | 16 oz"
},
{
  title: 'Autumn Wheat',
  price: '$5',
  tags: 'ABV: 4.8% | Dark German-style wheat beer - Malty, Spicy, Fruity | 16 oz',
},
{
  title: 'Spirals in Hyperspace',
  price: '$7.50',
  tags: 'ABV: 9% | Imperial Stout aged w/ french oak spirals soaked in Brandy | 16 oz',
},
{
  title: 'West Front Stout',
  price: '$5',
  tags: "ABV: 4.5% | Irish style stout brewed w/ dark roasted malts | 16 oz"
},
{
  title: 'Winter Warmer',
  price: '$6',
  tags: 'ABV: 6.5% | Ruby colored english style ale | 16 oz',
},
{
  title: 'Angels Wings Ipa',
  price: '$6',
  tags: 'ABV: 6.4% | New zealand hops throughout| 16 oz',
},
{
  title: 'Currant Jam',
  price: '$5',
  tags: 'ABV: 3.5% | Light, refreshing wheat based beer infused w/ black currant, dry, tart w/ flavors of cranberry & blackberry | 16 oz',
},
{
  title: 'Spirals in Hyperspace',
  price: '$7.50',
  tags: 'ABV: 9% | Imperial Stout aged w/ french oak spirals soaked in Brandy | 16 oz',
},
];

//updated 02.02.24

const beers = [
 {
    title: 'Helles',
    price: '$5',
    tags: 'ABV: 5% | Crisp, light lager | 16 oz',
  },
  {
    title: 'Wheat Bier',
    price: '$5',
    tags: "ABV: 5% | German style hefeweizen | 16 oz"
  },
  {
    title: 'Euclid Abbey',
    price: '$6.00',
    tags: 'ABV: 7.5% | Belgian Styled Dubbel | 16 oz',
  },
  {
    title: 'Anomaly IPA',
    price: '$6.00',
    tags: 'ABV: 7.1% | Classic american style IPA | 16 oz',
  },
  {
    title: 'Soulfire',
    price: '$6',
    tags: 'ABV: 7.7% | Winter spiced ale brewed w/ local honey, cinnamon & orange peel. Smooth & Warming | 16 oz',
  },
];

//updated 02.02.24
const events = [
  {
    imgUrl: images.num1,
    title: 'Music by: Brooke & Kevin',
    subtitle: 'Come enjoy some live music at our brewery - Brooke & Kevin Live on Friday, February 2nd, 2024 & Saturday, February 17th, 2024 @ 7PM | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num2,
    title: 'Music: Coffeehouse Series',
    subtitle: 'Come enjoy some grand music, drink a cold one and munch on our delicious food on Wednesday, February 14th, 2024 @ 7PM, Music by: Stavia Abernatha & Sean Farley | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num3,
    title: 'Music by: Kerry Kenny Band',
    subtitle: 'Come enjoy some live music at our brewery - The Kerry Kenny Band Live on Saturday, March 23rd, 2024 @ 7PM | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num4,
    title: 'Music by: Autumn Falls Entertainment',
    subtitle: 'Join us for some live music by Autumn Falls Entertainment at our brewery on Saturday, Febuary 24th @ 7PM| Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num5,
    title: 'Trivia Nights w/ Alex Oliver',
    subtitle: 'Join the FUN Every Thursday with our quiz master Alex Oliver - 6PM | Anomaly Craft Brewing',
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
