import React from 'react';

const TShirt = ({tShirt}) => {
    const {_id,picture,name,price}=tShirt
    return (
        <div>
      <div>
            <img src={picture} />

      </div>
        </div>
    );
};

export default TShirt;