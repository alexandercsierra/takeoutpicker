import React, { useState, useEffect } from "react";
import { places } from "../util";
import styled from 'styled-components';
import FoodGenre from './FoodGenre'

const RestOptions = ({ placesList, setPlacesList, setIsDisabled }) => {


  const [options, setOptions] = useState({
    subs: {
      name: 'subs',
      emoji: '🥪',
      status: true
    },
    diners: {
      name: 'diners',
      emoji: '☕',
      status: true
    },
    burgers: {
      name: 'burgers',
      emoji: '🍔',
      status: true
    },
    pizza: {
      name: 'pizza',
      emoji: '🍕',
      status: true
    },
});

  const handleChange = (e) => {
   setOptions({
     ...options,
     [e.target.name]: {
       ...options[e.target.name],
       status: !options[e.target.name].status
     }
   })
  };

  const handleClick = (type) => {
    if (options[type].status) {
      const filteredList = placesList.filter((place) => place.type !== type);
      setPlacesList(filteredList);
    } else {
      const filteredPlaces = places.filter((place) => place.type === type);
      setPlacesList([...placesList, ...filteredPlaces]);
    }
  };

  useEffect(() => {
    const vals = Object.values(options).filter(opts=>{
      return opts.status === true
    })
    if(vals.length > 0){
      setIsDisabled(false)
    } else{
      setIsDisabled(true)
    }
  }, [options]);

  const labelStyle = {display:"flex", flexDirection: "column", justifyContent:'center', alignItems:'center', fontSize: '1.5rem'}

  return (
    <div>
      <Form>
        {Object.values(options).map(opt => <FoodGenre genre={{name:opt.name, emoji: opt.emoji}} options={options} handleChange={handleChange} handleClick={handleClick}/>)}
      </Form>
    </div>
  );
};

export default RestOptions;

const Form = styled.form`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;


