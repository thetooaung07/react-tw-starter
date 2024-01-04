import PropTypes from "prop-types";
import React from "react";
import PokemonImage from "../assets/pokemon.webp";

export const PokemonCard = ({ name, types = [], hp }) => {
  return (
    <div className="bg-white/20 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="w-full flex justify-center items-center pt-4">
        <img className="w-1/2 h-1/2 " src={PokemonImage} alt="Pokemon" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-white text-base">
          {hp} ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {types &&
          types.map((el, index) => (
            <span
              key={index}
              className="inline-block bg-black/50 rounded-full px-3 py-1 text-sm
            font-semibold text-white mr-2 mb-2"
            >
              {el}
            </span>
          ))}
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  types: PropTypes.array,
  hp: PropTypes.number,
};
