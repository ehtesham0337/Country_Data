import React from "react";

function Countries({ countriesToShow, setCountriesToShow }) {
  // if(countriesToShow.length === 1) return null
// <CountryData countriesToShow={country}/>

  return countriesToShow.map((country) => (
    <div key={country.name.official} className='flex gap-2 mb-4 justify-between'>
      <p className="text-xl text-zinc-100">{country.name.common}</p> 
      <button className="border-2 rounded-md border-red-600 px-1 text-xs bg-slate-600 text-gray-200" onClick={ () => setCountriesToShow([country]) }> Show </button>
      

    </div>
  ));
}

export default Countries;
