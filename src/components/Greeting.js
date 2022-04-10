import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/reducers/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((store) => store.greetingReducer);
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const fetchAnotherGreeting = () => {
    dispatch(fetchGreetings());
    document.getElementById('greeting').innerText = randomGreeting.text;
  };

  return (
    <div>
      <button type="button" className="getGreetingsBtn" onClick={() => fetchAnotherGreeting()}>Magic button</button>
      <p id="greeting" />
    </div>
  );
};

export default Greeting;
