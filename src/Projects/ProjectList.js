import CodeChallenge from './CodeChallenge/CodeChallenge';
import Snake from './Snake/SnakeGame';
import Background from './ColorShift/Background';
import D3_App from './ReduxApp/D3_App';
import D3_App_2 from './D3_Visual/D3_App_2';
import main from './MyWSJ/main';
<<<<<<< HEAD
import Macros from './Macros/Macros';
=======
import Macros from './Macros/macros';
>>>>>>> 452265c4a5ab0835022db9e44744e0c61a8e6249

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
<<<<<<< HEAD
    'project': Macros,
=======
    'project': macros,
>>>>>>> 452265c4a5ab0835022db9e44744e0c61a8e6249
    'name': 'Macros Tracker',
    'topics': 'SSR, AWS, React, Redux, Node, Express, MySQL, Babel, webpack, CRUD, CORS',
    'description': 
      'A server side prerendered CRUD app. This time I learned to incorporate SSR for slightly (in this case) \
      better initial loading. Visitors can search for a food, which the app fetches the nutritrional content from \
      the USDA database. The nutrients are added to a tracker which sums up the total nutrients for the day. All data is \
      stored in a MySQL database. The most challenging aspect of this project was learning about and searching for a suitable \
      environment to host a SSR app. Another interesting challenge was configuring the AWS EC2 instance to accept \
      non-simple CORS request from outside domains.'
  }
];

export default projects;