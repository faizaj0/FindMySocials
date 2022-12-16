import React, { Component }  from 'react';
export default function ProfileImage({ imgSrc }) {
  return (
    <div>
      <img className={"profileImage"} src={imgSrc} />
    </div>
  );
}
