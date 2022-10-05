import { useState, useEffect } from "react";
import PersonCard from "./components/PersonCard";

const url = "https://randomuser.me/api/";

function App() {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("name");
  const [display, setDisplay] = useState("Random Person");

  const fetchPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const person = data.results[0];
      const { email, phone } = person;
      const { age } = person.dob;
      const { city, state, country } = person.location;
      const { password } = person.login;
      const { first, last } = person.name;
      const { large: image } = person.picture;
      const newPerson = {
        email,
        phone,
        age,
        password,
        image,
        name: `${first} ${last}`,
        location: `${city}, ${state}, ${country}`,
      };
      setPerson(newPerson);
      setDisplay(newPerson.name);
      setLoading(false);
    } catch (error) {
      console.error();
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setDisplay(person[newValue]);
      setTitle(newValue);
    }
  };

  return (
    <main className='random-person'>
      <article className='person-card'>
        <div className='upper-card'></div>
        <PersonCard
          loading={loading}
          person={person}
          title={title}
          display={display}
          fetchPerson={fetchPerson}
          handleValue={handleValue}
        />
      </article>
    </main>
  );
}

export default App;
