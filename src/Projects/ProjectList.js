import CodeChallenge from './CodeChallenge/CodeChallenge';
import Snake from './Snake/SnakeGame';
import Background from './ColorShift/Background';
import Main from './ReduxApp/Main';

var projects = [
  {
    'project' : CodeChallenge,
    'name' : 'Code Challenge',
    'topics' : 'Async, GraphQL, API, Closure',
    'description': 'A small code challenge I found to be interesting due to closure. An algorithm was provided to calculate the win chance of each ant. The algorithm took a randomly generated amount of time to output an answer. By grabbing data from a GraphQL API, I was to display each ants properties as the win chances came in.'
  },
  {
    'project' : Snake,
    'name' : 'ReactSnake',
    'topics' : 'Javascript, Problem Solving',
    'description' : 'The classic Snake game implemented using React components and HTML canvas. I went for an algorithm that would be simple while keeping big O in mind.'
  },
  {
    'project' : Background,
    'name' : 'Color Shifting Canvas',
    'topics' : 'HTML canvas, Closure',
    'description' : 'While creating a shifting color background was easy to do in CSS, I decided to implement something similar in Javascript.'
  },
    'project' : Main,
    'name' : 'D3 Data Visualization',
    'topics' : 'D3, Redux',
    'description' : '__'
];

export default projects;