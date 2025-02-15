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
  {
    title: 'COMING SOON: Wood Fired Pizza',
    price: '$14',
    tags: 'WE TRIED IT, YOU LOVED IT AND WE ARE GETTING IT ADDED TO THE MENU PERMENANTLY - THANKS TO PROJECT PIZZA FOR SHOWING US THE WAY. In the meantime come Friday/ Saturday to try our pizza',
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
{
  title: 'Wheat Bier',
  price: '$5',
  tags: "ABV: 5% | German style hefeweizen | 16 oz"
},
{
  title: 'Euclid Abbey',
  price: '$6',
  tags: 'ABV: 7.5% | Belgian Styled Dubbel | 16 oz',
},
{
  title: 'Anomaly IPA',
  price: '$6',
  tags: 'ABV: 7.1% | Classic american style IPA | 16 oz',
},
{
  title: 'Soulfire',
  price: '$6',
  tags: 'ABV: 7.7% | Winter spiced ale brewed w/ local honey, cinnamon & orange peel. Smooth & Warming | 16 oz',
},
{
    title: 'Irish Red',
    price: '$5',
    tags: 'ABV: 5.3% | Lager - Smooth & Simple | 16 oz'
},
{
  title: 'Criollo Porter',
  price: '$6',
  tags: "ABV: 6.4% | A rich and decadent porter infused with aromatic Madagascar Vanilla, house roasted cocoa nibs & Café Fresco cold brew  | 16 oz"
},
{
  title: 'AFO Pilsner',
  price: '$5',
  tags: 'ABV: 5.1% | German malt and hops throughout make up this very crisp, balanced, easy drinking lager beer | 16 oz',
},
{
  title: 'Anomaly IPA',
  price: '$6',
  tags: 'ABV: 7% | Classic american style IPA | 16 oz',
},
{
  title: 'Cold Brew Stout',
  price: '$5',
  tags: 'ABV: 4.2% | Coffee infused into a dark dry stout | 16 oz',
},
{
  title: 'Old Oak',
  price: '$5',
  tags: 'ABV: 3% | Gratzer Style Beer - Light, Crisp, Hoppy, Smokey | 16 oz'
},
{
  title: 'The Haze',
  price: '$6',
  tags: "ABV: 6.4% | Smooth & Silky | 16 oz"
},
{
  title: 'Cherry Weisse',
  price: '$5',
  tags: 'ABV: 3.2% | Wheat based, kettle sour ale - fermented w/ sweet cherry puree | 16 oz',
},
{
  title: 'Amberweizen',
  price: '$5',
  tags: 'ABV: 5% | German wheat beer | 16 oz',
},
{
  title: 'Rosa Salz',
  price: '$5',
  tags: "ABV: 4.2% | Gose Style, Kettle Sour Beer | 16 oz"
},
{
  title: 'Amarillo Gold',
  price: '$5',
  tags: 'ABV: 5% | Pale Ale brewed w/ citrusy amarillo hops | 16 oz'
},
{
  title: 'Rolling Hills Saison',
  price: '$5',
  tags: "ABV: 5.5% | Belgian-Style Farmhouse Ale, Crisp & Subtle | 16 oz"
},
{
  title: 'Angels Wings IPA',
  price: '$6',
  tags: 'ABV: 7.3% | Smooth, soft bitterness and full flavor | 16 oz',
},
{
  title: 'Black Ruby',
  price: '$5',
  tags: 'ABV: 4.8% | Dark Lager | 16 oz',
},
{
  title: 'Helles',
  price: '$5',
  tags: 'ABV: 5% | Crisp, light lager | 16 oz',
},
{
  title: 'The Haze',
  price: '$6',
  tags: 'ABV: 6.7% | Big Flavor, Big Aroma | 16 oz',
},
];

//updated 02.14.2025

const beers = [
  {
    title: 'Helles',
    price: '$5',
    tags: 'ABV: 5% | Crisp, light lager | 16 oz',
  },
  {
    title: 'Soulfire',
    price: '$6',
    tags: 'ABV: 7.5% | Winter spiced ale brewed w/ local honey, cinnamon & orange peel. Smooth & Warming | 16 oz',
  },
  {
    title: 'Wheat Bier',
    price: '$5',
    tags: "ABV: 5.4% | German style hefeweizen | 16 oz"
  },
  {
    title: 'Hyperspace',
    price: '$7',
    tags: 'ABV: 9.2% | Imperial Stout aged w/ french oak spirals soaked in Brandy | 16 oz',
  },
  {
    title: 'Cozy Bones',
    price: '$7',
    tags: 'ABV: 8.7% | A strong dark wheat | 16 oz'
  },
  {
    title: 'Hazy Sunrise',
    price: '$5',
    tags: 'ABV: 4.9% | Hazy pale ale | 16 oz',
  },
  {
    title: 'Dunkel Lager',
    price: '$5',
    tags: 'ABV: 5.2% | Dark lager w/ a rich complex malt | 16 oz',
  },
  {
    title: 'Salty Brownie',
    price: '$6',
    tags: 'ABV: 6% | Brown ale | 16 oz',
  },
  {
    title: 'Plant Music',
    price: '$6',
    tags: 'ABV: 6.5% | West coast IPA | 16 oz',
  },
];

//updated 02.14.2025
const events = [
  {
    imgUrl: images.num1,
    title: 'Music: Coffeehouse Series',
    subtitle: 'Come enjoy some grand music, drink a cold one and munch on our delicious food on 1: Wednesday, March 12th, 2025 @ 7PM, Music by: Big Daddy Bone & 2:Wednesday, April 9th, 2025 @ 7PM, Music by: Deb Callahan Trio & 3: Wednesday, May 14th, 2025 @ 7PM, Music by: Allan Combs II | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num2,
    title: 'Music by: Mike Silvetti ',
    subtitle: 'Come enjoy some live music by Mike Silvetti - Every Friday, Time: 6 PM | Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num3,
    title: 'Beer Run Saturday | 1 Miler * Comes back in 2025! *',
    subtitle: 'Come enjoy a fun time & drink a cold one after completing our 1 miler - Every Saturday @ 10AM| Anomaly Craft Brewing',
  },
  {
    imgUrl: images.num4,
    title: 'Bloomsburg Fair',
    subtitle: 'Come enjoy the fair with us and our firetruck, right next to Project Pizza. Drink some non-alcoholic drinks right from our TapTruck: Butterbeer, Heller`s Cider or Pumpkin Chai Coldbrew - September 19th until the 27th, 2025. Located at the corner of 12th & C, Between Gate 3 & 4 | Anomaly Firetruck',
  },
  {
    imgUrl: images.num5,
    title: 'Thursday Trivia Night',
    subtitle: 'Join the FUN Every Thursday at Anomaly - 6PM. Grab those tables early, it fills up fast - no reservations | Anomaly Craft Brewing',
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
