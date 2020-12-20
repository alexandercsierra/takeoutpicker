import React from "react";
import styled from 'styled-components';

const FoodGenre = ({genre, options, handleChange, handleClick}) => {

  const FoodOption = styled.div`
  display:flex;
  justify-content: center;
  align-items: flex-end;
  margin: 4%;
`;

  const labelStyle = {display:"flex", flexDirection: "column", justifyContent:'center', alignItems:'center', fontSize: '1.5rem'}
    console.log('status', options[genre.name].status)
  return(
    <FoodOption>
        <label style={labelStyle} htmlFor={genre.name}><span>{genre.emoji}</span><span>{genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}</span> {options[genre.name].status ? '✅' : '❌'}</label>
        <input
        style={{display:'none'}}
          id={genre.name}
          onClick={() => handleClick(genre.name)}
          type="checkbox"
          name={genre.name}
          checked={options[genre.name].status}
          onChange={handleChange}
        />
        </FoodOption>
  )
}

export default FoodGenre;