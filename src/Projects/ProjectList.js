import CodeChallenge from './CodeChallenge/CodeChallenge';
import Snake from './Snake/SnakeGame';
import Background from './ColorShift/Background';
import D3_App from './ReduxApp/D3_App';

var projects = [
  {
    'project' : CodeChallenge,
    'name' : 'Code Challenge',
    'topics' : 'Async, GraphQL, API calling, Closure',
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
  {
    'project' : D3_App,
    'name' : 'D3 Data Visualization',
    'topics' : 'D3, Redux, API calling',
    'description' : 'A simple project for learning to use D3 with React. Wrestled with combining React and D3 as they do not play well together. Learned to limit the amount of control D3 has over the DOM by passing it an <svg> container. Lesson learned, developing with both React and D3 is definitely possible and there are a few ways to get this done. The challenge is getting it all to work together seamlessly.' 
  }
];

export default projects;