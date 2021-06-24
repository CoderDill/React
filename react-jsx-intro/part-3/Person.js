const Person = ({ name = "name", age = 18, hobbies = [] }) => {
  const voterAge = age >= 18 ? "please go vote!" : "you must be 18";
  const shortenedName = name.length > 8 ? name.slice(0, 5) : name;

  return (
    <div>
      <p>
        Learn some imformation about this person: {shortenedName.trim()}, {age},{" "}
        {voterAge}
      </p>
      <p>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};
