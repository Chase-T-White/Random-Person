import defaultImage from "../dsynth.jpg";
import {
  FaUserAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaLock,
} from "react-icons/fa";

import Loading from "./Loading";
import Error from "./Error";

const PersonCard = ({
  loading,
  person,
  title,
  display,
  fetchPerson,
  handleValue,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (person === null || person === undefined) {
    return <Error />;
  }

  return (
    <section className='person'>
      <img
        src={(person && person.image) || defaultImage}
        alt={(person && person.name) || "Random Person"}
        className='person-image'
      />
      <div className='personal-info'>
        <div className='container'>
          <h3 className='info'>My {title} is</h3>
          <p>{display}</p>
        </div>
        <div className='info-selector-container'>
          <FaUserAlt
            className='icon'
            data-label='name'
            onMouseOver={handleValue}
          />
          <FaEnvelope
            className='icon'
            data-label='email'
            onMouseOver={handleValue}
          />
          <FaCalendarAlt
            className='icon'
            data-label='age'
            onMouseOver={handleValue}
          />
          <FaMapMarkedAlt
            className='icon'
            data-label='location'
            onMouseOver={handleValue}
          />
          <FaPhoneAlt
            className='icon'
            data-label='phone'
            onMouseOver={handleValue}
          />
          <FaLock
            className='icon'
            data-label='password'
            onMouseOver={handleValue}
          />
        </div>
      </div>
      <div className='container'>
        <button className='btn' onClick={() => fetchPerson()}>
          Random Person
        </button>
      </div>
    </section>
  );
};

export default PersonCard;
