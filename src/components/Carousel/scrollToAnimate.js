function scrollTo(params) {
  const { element, to, duration, scrollDirection } = params;
  const start = element.current[scrollDirection];
  const change = to - start;
  const increment = ( 1000 / 50 );

  const animatedScroll = (elapsedTime) => {
    elapsedTime += increment;
    const position = easeInOut(elapsedTime, start, change, duration);
    element.current[scrollDirection] = position;
    if (elapsedTime < duration) {
      window.requestAnimationFrame(animatedScroll.bind(null, elapsedTime));
      // setTimeout(function() {
      //   animatedScroll(elapsedTime)
      // }, increment);
    }
  };

  // animatedScroll(0);
  window.requestAnimationFrame(animatedScroll.bind(null, 0));
}

function easeInOut(currentTime, start, change, duration) {
  currentTime /= duration / 2;

  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

export default scrollTo;
