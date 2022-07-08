import React from "react";

export default function Form(movie) {

  const { name, available } = movie

  return (
    <form>
      <fieldset>
        <legend>{name}</legend>
        <p>{available}</p>
        <button type="button"> - </button>
        <button type="button"> + </button>
      </fieldset>
    </form>
  )
}