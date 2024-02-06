import React from 'react';

const ProfilePic = ({ name }) => {
  const getColorFromName = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
  };

  const getInitials = (name) => {
    const nameArray = name.split(' ');
    return nameArray.length > 1 ? nameArray[0][0] + nameArray[nameArray.length - 1][0] : nameArray[0].substring(0, 2).toUpperCase();
  };

  const userColor = getColorFromName(name);

  return (
    <div className='w-8 h-8 rounded-full' style={{ backgroundColor: userColor }}>
        <p className='text-white text-center'>{getInitials(name)}</p>
    </div>
  );
};

export default ProfilePic;
