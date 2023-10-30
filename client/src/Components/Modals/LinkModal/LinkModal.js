import React, { useState } from 'react';
import './LinkModal.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LinkModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quizLink, setQuizLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsCopied(false);
  };

  const handleLinkChange = (e) => {
    setQuizLink(e.target.value);
  };

  const copyLinkToClipboard = () => {
    const linkInput = document.createElement('input');
    linkInput.value = quizLink;
    document.body.appendChild(linkInput);
    linkInput.select();
    document.execCommand('copy');
    document.body.removeChild(linkInput);
    setIsCopied(true);

    toast.success(`Link copied to clipboard: ${quizLink}`, {
      position: "top-right",
      autoClose: 5000, 
    });

    setTimeout(() => {
      closeModal();
    }, 4000);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Congrats Your quiz <br />
             is Published!</h2>
            <input
              type="text"
              placeholder="Your link is here"
              value={quizLink}
              onChange={handleLinkChange}
              disabled={isCopied}
            /> <br />
            <button className='btn' onClick={copyLinkToClipboard} disabled={isCopied}>Share</button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default LinkModal;
