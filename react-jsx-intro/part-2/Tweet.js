const Tweet = ({ username = "username", date, message }) => {
  return (
    <div>
      <p>
        {username} - {date}
        <br></br>
        Message: {message}
      </p>
    </div>
  );
};
