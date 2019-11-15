const formatDate = (dateFromServer) => {
  const formattedDate = new Date(dateFromServer);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (`${formattedDate.getDate()} ${months[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`);
};

export default formatDate;
