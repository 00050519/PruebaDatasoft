// Card.js
import React, { useState } from "react";
import Modal from './Modal';

const Card = ({ name, image, description, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white h-full shadow-lg p-4 mb-4 flex flex-col items-center justify-around cursor-pointer transform transition-transform hover:scale-105 rounded-md" onClick={openModal}>
        <img src={image} alt={name} className="w-1/3 h-32 object-cover mb-4 mx-auto" />
        <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
        <p className="text-green-600 font-bold text-center">${price}</p>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} data={{ name, image, description, price }} />
      )}
    </>
  );
};

export default Card;
