/* eslint-disable import/extensions */
import React from 'react';

export interface AvatarProps {
  name?: string | 'Kitty chan',
  className?: string | 'p-avatar',
  imageUrl? : string | '',
  onClick?: () => void,
}

const FirstName = (value: string) => {
  let valueReturn = '';
  let valueArray: any = value.split(' ', 2);
  if  ( valueArray !== undefined && valueArray.length >= 1 ) {
    for (let i = 0; i < valueArray.length ; i++) {

      valueReturn = valueReturn + valueArray[ i ].substring(0, 1);
    }
  } else {
    valueReturn = valueArray.substring(0, 1);
  }
  return valueReturn;
};


const HPHAvatar: React.FC<AvatarProps> = ({
  name = 'kitty chan',
  className = "",
  imageUrl = '',
  onClick
}) : any => {
  return (
    <>
        <div className={`avatar-wrapper ${className}`} onClick={onClick}>
            <div className='avatar-label'>
                {((Array.isArray(imageUrl) && imageUrl.length) || (typeof imageUrl === 'string' && imageUrl !== '')) ? <img src={imageUrl} alt={"Avatar"}/> : FirstName(name)}
            </div>
        </div>
    </>
  );
};
export default HPHAvatar;