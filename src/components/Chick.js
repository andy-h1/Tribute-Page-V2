import React from 'react';
   
export const Chick = ({image, name, company, title, bio, github}) => (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
                <p>Currently working at {company} as a {title}</p>
                <p>Bio: {bio}</p>
                <p>{github}</p>
        </div>
    );

    // console.log(Chick);
