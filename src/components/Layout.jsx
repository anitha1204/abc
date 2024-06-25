import React, { useState } from 'react';
import Popup from './Popup'; // Adjust the path as necessary

const ParentComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={openPopup}
      >
        Open Popup
      </button>
      {isPopupVisible && <Popup closePopup={closePopup} />}
    </div>
  );
};

export default ParentComponent;
