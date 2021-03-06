import React from 'react';
import { Card } from 'antd';

const WeaponComponent = ({image, text, onClickCallBack}) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255, .5)',
        border: 'none'
      }}
      cover={<img 
        src={image} 
        alt={text}
        style={{
          width: '100px',
          height: '100px',
        }}
      />}
      onClick={onClickCallBack}
    >
      <Meta
        title={text}
      />
    </Card>

  )
};

export default WeaponComponent