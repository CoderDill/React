const Bouncer = (props) => {
  return (
    <div>
      <p>
        <b>Bouncer:</b> How old are you?
      </p>
      <p>
        <b>You: </b> I am {props.age} years old.
      </p>
      <p>
        <b>Bouncer:</b> {props.age > 21 ? "Come on in" : "You're too young"}!
      </p>
    </div>
  );
};
