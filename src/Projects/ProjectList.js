import CodeChallenge from './CodeChallenge/CodeChallenge';
import Snake from './Snake/SnakeGame';
import Background from './ColorShift/Background';
import D3_App from './ReduxApp/D3_App';
import D3_App_2 from './D3_Visual/D3_App_2';
import main from './MyWSJ/main';
import Macros from './Macros/MacroTracker';
import ShoppingCart from './Shopping-Cart/ShoppingCart';
import BootstrapShoppingCart from './Bootstrap-Shopping-Cart/BootstrapShoppingCart';

var projects = [
  {
    'project' : CodeChallenge,
    'name' : 'Code Challenge',
    'topics' : 'Async, GraphQL, API calling, Closure',
    'description': 
      'A small code challenge I found to be interesting due to closure. An algorithm was provided to calculate the win \
      chance of each ant. The algorithm took a randomly generated amount of time to output an answer. By grabbing data from \
      a GraphQL API, I was to display each ants properties as the win chances came in.'
  },
  {
    'project' : Snake,
    'name' : 'ReactSnake',
    'topics' : 'Javascript, Problem Solving',
    'description' : 
      'The classic Snake game implemented using React components and HTML canvas. I went for an algorithm that would be simple \
      while keeping big O in mind.'
  },
  {
    'project' : Background,
    'name' : 'Color Shifting Canvas',
    'topics' : 'HTML canvas, Closure',
    'description' : 
      'While creating a shifting color background was easy to do in CSS, I decided to implement something similar in Javascript.'
  },
  {
    'project' : D3_App,
    'name' : 'D3 Data Visualization',
    'topics' : 'D3, Redux, API calling',
    'description' : 
      'A simple project for learning to use D3 with React. Wrestled with combining React and D3 as they don\'t mix together \
      smoothly. Had to put all D3 code into a <svg> container. Lesson learned: developing with both React and D3 is definitely \
      possible. The challenge is getting it all to work together seamlessly.' 
  },
  {
    'project' : D3_App_2,
    'name' : 'Another D3 Visualization',
    'topics' : 'D3, Redux, API calling, Caching',
    'description' : 
      'Another data visual. Redux isn\'t needed in these apps as the data isn\'t being shared by a lot of different \
      components. In fact it would probably be easier to implement these apps without Redux but I opted to use Redux for \
      practice. Also another thing learned: planning is very important if you don\'t want spaghetti. A definitive end \
      product/functionality should be defined otherwise components end up being improv\'ed upon.' 
  },
  {
    'project': main,
    'name': 'My Wall Street Journal UI',
    'topics': 'React, Redux, CSS, HTML',
    'description': 
      'Something quick and a little different. This time I created my take on the WSJ page UI as a single page application. \
      I realized that I had neglected the visual aspect of front end development so I took it upon myself to work on my \
      styling capabilities.'
  },
  {
    'project': Macros,
    'name': 'Macros Tracker',
    'topics': 'SSR, AWS, React, Redux, Node, Express, MySQL, Babel, webpack, CRUD, CORS',
    'description': 
      'A server side prerendered CRUD app. This time I learned to incorporate SSR for slightly (in this case) \
      better initial loading. Visitors can search for a food, which the app fetches the nutritrional content from \
      the USDA database. The nutrients are added to a tracker which sums up the total nutrients for the day. All data is \
      stored in a MySQL database. The most challenging aspect of this project was learning about and searching for a suitable \
      environment to host a SSR app. Another interesting challenge was configuring the AWS EC2 instance to accept \
      non-simple CORS request from outside domains.'
  },
  {
    'project': ShoppingCart,
    'name': 'Shopping Cart Mock-up',
    'topics': 'React, HTML, CSS, Form, Online Shopping Cart, Responsive UI',
    'description': 
      'An online shopping cart mock-up that is responsive. The UI is hand coded in HTML and CSS. \
      Everything is made with react components. The actual list of items was coded with an HTML table\
      which is not ideal. But for this particular challenge I was unsure if the usage of other libraries, \
      like Bootstrap, was allowed. This limited how freely I could interact with the components. Due to this and \
      my attempt of limiting the number of states/stateful components I designed my self into a corner. I ended \
      up having to handle the logic of the item modal in the item and main app component. If I were to \
      redo this app, I would use Bootstrap\'s grid, flex, or table system and implement the item modal as a form.\
      It would be stateful and I could deal with the updating logic in the same component that the modal renders from.'
  },
  {
    'project': BootstrapShoppingCart,
    'name': 'Shopping Cart Mock-up with Bootstrap Update',
    'topics': 'React, HTML, CSS, Bootstrap, Form, Online Shopping Cart, Responsive UI',
    'description': 
      'Another shopping cart mock-up with a similar layout as my last project. This time, however, I updated \
      it with the changes I wanted to make. I replaced the HTML table format with Bootstrap/CSS3 grids. I also\
      updated the modal component to make it stateful. This implementation feels a lot cleaner logic and \
      HTML/CSS-wise.'
  }
];

export default projects;