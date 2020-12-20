import React, { useState, useEffect } from "react";
import { places } from "../util";

const RestOptions = ({ placesList, setPlacesList, setIsDisabled }) => {
  const [options, setOptions] = useState({
    subs: true,
    diner: true,
    burgers: true,
  });

  const handleChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: !options[e.target.name],
    });
  };

  const handleClick = (type) => {
    if (options[type]) {
      const filteredList = placesList.filter((place) => place.type !== type);
      setPlacesList(filteredList);
    } else {
      const filteredPlaces = places.filter((place) => place.type === type);
      setPlacesList([...placesList, ...filteredPlaces]);
    }
  };

  useEffect(() => {
    const optVals = Object.values(options);
    if (!optVals.includes(true)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [options]);

  return (
    <div>
      <form>
        <label htmlFor="subs">Subs</label>
        <input
          id="subs"
          onClick={() => handleClick("subs")}
          type="checkbox"
          name="subs"
          checked={options.subs}
          onChange={handleChange}
        />
        <label htmlFor="diner">Diners</label>
        <input
          id="diner"
          onClick={() => handleClick("diner")}
          type="checkbox"
          name="diner"
          checked={options.diner}
          onChange={handleChange}
        />
        <label htmlFor="burgers">Burgers</label>
        <input
          id="burgers"
          onClick={() => handleClick("burgers")}
          type="checkbox"
          name="burgers"
          checked={options.burgers}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default RestOptions;
