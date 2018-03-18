export default function Apple(context,state){

  return {
    draw(){
      context.fillStyle='red';
      context.fillRect(state.appleX, state.appleY,
                       state.playerSize, state.playerSize);
    }
  } 
}