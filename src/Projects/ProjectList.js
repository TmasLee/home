import CodeChallenge from './CodeChallenge/CodeChallenge';
import Snake from './Snake/SnakeGame';

var projects = [
  {
    'project' : CodeChallenge,
    'name' : 'Code Challenge',
    'topics' : 'Async, GraphQL, API, Closure',
    'description': 'A small code challenge I found to be interesting due to closure. An algorithm was provided to calculate the win change of each ant. The algorithm took a randomly generated amount of time to output an answer. By grabbing data from a GraphQL API, I was to display each ants properties as the win chances came in.'
  },
  {
    'project' : Snake,
    'name' : 'ReactSnake ',
    'topics' : 'Javascript, Problem Solving',
    'description' : 'The classic Snake game implemented using React components and HTML canvas. I went for an algorithm that would be most efficient in terms of number of operations (big O).'
  }
];

//
//  REDUX PROJECT TOO!!!!!!!!!
//
export default projects;