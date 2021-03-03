import React from 'react';
import { Button } from 'antd';

const WeaponComponent = ({image, text, onClickCallBack}) => {

  return (
    <div>
      <img 
        src={image} 
        alt={text}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      />
      <Button
        onClick={onClickCallBack}
      >
        {text}
      </Button>
    </div>

  )
};

export default WeaponComponent