import React, { useRef } from 'react';


export default function Slider({ title = '', description = '', page = 0, isVisible = false }) {
  const titleRef = useRef(null);
  const refs = useRef();
  console.log(titleRef.current);
  console.log(refs.myRef)
  return (
    <div className={isVisible ? 'show' : 'hide'}>
      <h2 ref={titleRef}>{title}</h2>
      <p ref={el => refs['myRef'] = el}>{description}</p>
      <b>{page}</b>
    </div>
  )
}
