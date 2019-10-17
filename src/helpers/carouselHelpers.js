function easeInOut(currentTime, start, change, duration) {
  const newCurrentTime = currentTime / (duration / 2);

  if (newCurrentTime < 1) {
    return (change / 2) * newCurrentTime * newCurrentTime + start;
  }
  const otherwiseCurrentTime = newCurrentTime - 1;
  return (-change / 2) * (otherwiseCurrentTime * (otherwiseCurrentTime - 2) - 1) + start;
}

function scrollTo(params) {
  const {
    element,
    to,
    duration,
    scrollDirection
  } = params;
  const start = element.current[scrollDirection];
  const change = to - start;
  const increment = (500 / 50);

  const animatedScroll = (time) => {
    const elapsedTime = time + increment;
    const position = easeInOut(elapsedTime, start, change, duration);
    element.current[scrollDirection] = position;

    if (elapsedTime < duration) {
      window.requestAnimationFrame(animatedScroll.bind(null, elapsedTime));
    }
  };

  window.requestAnimationFrame(animatedScroll.bind(null, 0));
}


export default scrollTo;
