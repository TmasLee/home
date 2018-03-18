export default function Snake(context,state){

  return {
    draw(){
      context.fillStyle='#00ff00';

      var historySize = state.history.length;

      for (var i=0; i<historySize; i++){
        context.fillRect(state.history[i][0], state.history[i][1],
          state.playerSize, state.playerSize);
      }
    },
    update(){
      state.playerX += state.xVel;
      state.playerY += state.yVel;
    }
  } 
}