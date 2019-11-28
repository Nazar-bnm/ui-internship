function setTimeoutForPreloader() {
  setTimeout(() => {
    this.setState({
      isLoading: false
    });
  }, 500);
}

export default setTimeoutForPreloader;
