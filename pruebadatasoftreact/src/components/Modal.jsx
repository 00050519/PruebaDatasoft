import React from "react";

const Modal = ({ closeModal, data }) => {
  const handleCloseModal = (e) => {
    // Check if the click is outside the modal content
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay"
      onClick={handleCloseModal}
    >
      <div className="relative bg-white p-8 max-w-md w-full text-center rounded-md">
        <img src={data.image} alt={data.name} className="w-full mb-4 h-48 object-cover" />
        <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
        <p className="text-gray-700 mb-2">{data.description}</p>
        <p className="text-green-600 font-bold">${data.price}</p>
        <div className="flex justify-center mt-4">
          <button
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 w-1/2"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
