import Home from './Pages/Home';

let topics_nav = [
  {
    name: 'Home',
    item: Home,
    path: '/'
  },
  {
    name: 'World',
    item: Home,
    path: '/world'
  },
  {
    name: 'U.S.',
    item: Home,
    path: '/us'
  },
  {
    name: 'Politics',
    item: Home,
    path: '/politics'
  },
  {
    name: 'Business',
    item: Home,
    path: '/business'
  },
  {
    name: 'Tech',
    item: Home,
    path: '/tech'
  },
  {
    name: 'Markets',
    item: Home,
    path: '/markets'
  },
  {
    name: 'Opinion',
    item: Home,
    path: '/opinion'
  },
  {
    name: 'Life & Arts',
    item: Home,
    path: '/life_arts'
  },
  {
    name: 'Real Estate',
    item: Home,
    path: '/real_estate'
  },
  {
    name: 'WSJ. Magazine',
    item: Home,
    path: '/wsj_mag'
  }
];

let DowJones = [
  {
    child: 'Barron\'s',
    link: 'https://www.barrons.com/'
  },
  {
    child: 'BigCharts',
    link: 'http://bigcharts.marketwatch.com/'
  },
  {
    child: 'DJX',
    link: 'https://signin.wsj.com/bundle/'
  },
  {
    child: 'Dow Jones Newswires',
    link: 'https://www.dowjones.com/'
  },
  {
    child: 'Factiva',
    link: 'https://auth.accounts.dowjones.com/login?client=zgQkNiR9DBqamZBqIi6D0NaIvzLKkh3q&protocol=oauth2&redirect_uri=https%3A%2F%2Fglobal.factiva.com%2Ffactivalogin%2Fcallback.aspx&scope=openid%20pib%20email&response_type=code&connection=DJPIB&ui_locales=en-us-x-global-0-0&login_hint=35e79b4f39767c58441a8ec2f4670a1e227797bd91a8ea26002aa1ab5ffe0ec3e86248512381fdd3af2a1bb715c25e34efdd3ac4754e563830f13f864b08639b521dc0d2788b08007456a81afdc10b73b16cbc977d2801fa9b56b228a00038ba&state=QMzFSR5C9Im6UKad6a-6cZXogGNdn37u#!/signin'
  },
  {
    child: 'Financial News',
    link: 'https://www.fnlondon.com/'
  },
  {
    child: 'Mansion Global',
    link: 'https://www.mansionglobal.com/'
  },
  {
    child: 'Market Watch',
    link: 'https://www.marketwatch.com/'
  },
  {
    child: 'NewsPlus',
    link: 'https://signin.wsj.com/login.asp?productname=newsplus&landingpage=https://newsplus.wsj.com/'
  },
  {
    child: 'Private Markets',
    link: 'https://www.barrons.com/'
  },
  {
    child: 'Risk Compliance',
    link: 'https://djlogin.dowjones.com/login.asp?productname=rnc'
  },
  {
    child: 'WSJ Conference',
    link: 'https://www.wsj.com/news/types/journal-reports-conferences'
  },
  {
    child: 'WSJ Pro',
    link: 'https://www.wsj.com/pro/centralbanking'
  },
  {
    child: 'WSJ Video',
    link: 'https://www.wsj.com/video/royal-wedding-how-will-meghan-markle-adapt-to-life-in-britains-monarchy/B7284D6A-A9B1-4E09-915E-07F26A5D98E4.html'
  },
  {
    child: 'WSJ.com',
    link: 'https://www.wsj.com/'
  }
]

let NewsCorp = [
  {
    child: 'Big Decisions',
    link: 'http://www.bigdecisions.com/'
  },
  {
    child: 'Business Spectator',
    link: 'https://www.theaustralian.com.au/business/business-spectator'
  },
  {
    child: 'Checkout51',
    link: 'https://www.checkout51.com/?utm_source=wsj&utm_medium=digitalhousead&utm_campaign=wsjspotlight'
  },
  {
    child: 'Harper Collins',
    link: 'https://www.harpercollins.com/'
  },
  {
    child: 'New York Post',
    link: 'https://nypost.com/'
  },
  {
    child: 'News America Marketing',
    link: 'http://www.newsamerica.com/'
  },
  {
    child: 'PropTiger',
    link: 'https://www.proptiger.com/'
  },
  {
    child: 'REA',
    link: 'https://www.rea-group.com/IRM/content/default.aspx'
  },
  {
    child: 'realtor.com',
    link: 'https://www.realtor.com/'
  },
  {
    child: 'Storyful',
    link: 'http://storyful.com/'
  },
  {
    child: 'The Australian',
    link: 'https://www.theaustralian.com.au/'
  },
  {
    child: 'The Sun',
    link: 'https://www.thesun.co.uk/'
  },
  {
    child: 'The Times',
    link: 'https://www.thetimes.co.uk/'
  },
  {
    child: 'Unruly',
    link: 'https://unruly.co/'
  },
]

export {
  topics_nav,
  DowJones,
  NewsCorp,
}