import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './PollModal.css';

function PollModal() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState('text');
  const [timer, setTimer] = useState('5');
  const [textUrls, setTextUrls] = useState(['']);
  const [imageUrls, setImageUrls] = useState(['']);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const cancelModal = () => {
    setIsModalOpen(false);
  };

  const createQuestion = () => {
    // You can perform your logic to add the question to the poll here
    console.log('Question:', question);
    console.log('Options:', options);
    console.log('Timer:', timer);
    console.log('Text URLs:', textUrls);
    console.log('Image URLs:', imageUrls);

    // Close the modal
    setIsModalOpen(false);
  };

  const addTextUrlInput = () => {
    if (textUrls.length <= 4) {
      setTextUrls([...textUrls, '']);
      if (options === 'text_image' && imageUrls.length < 4) {
        setImageUrls([...imageUrls, '']);
      }
    }
  };

  const addImageUrlInput = () => {
    if (imageUrls.length <= 4) {
      setImageUrls([...imageUrls, '']);
      if (options === 'text_image' && textUrls.length < 4) {
        setTextUrls([...textUrls, '']);
      }
    }
  };

  return (
    <div className='container' >
      <button className="create-quiz-button" onClick={openModal}>
        Create Poll
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className='modal-header' >
              <button>1</button>
              <p>Max 5 questions</p>
            </div>
            <div className="options-timer">
              <div className="options-buttons">
                <input
                  type="text"
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Poll Question"
                />
              </div>
              <div className="options-buttons">
                <label htmlFor="options">Option Type</label>
                <div className="radio-buttons">
                  <label>
                    <input
                      type="radio"
                      value="text"
                      checked={options === 'text'}
                      onChange={() => setOptions('text')}
                    />
                    Text
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="image"
                      checked={options === 'image'}
                      onChange={() => setOptions('image')}
                    />
                    Image URL
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="text_image"
                      checked={options === 'text_image'}
                      onChange={() => setOptions('text_image')}
                    />
                    Text & Image URL
                  </label>
                </div>
              </div>
              
            </div>
            <div  className='mid'  >


            {options === 'text' && (
              <div  className='text-options' >
                <label htmlFor="textUrls">Text</label>
                {textUrls.map((textUrl, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={textUrl}
                      id={'text-input'}
                      placeholder='Text'
                      onChange={(e) => {
                        const updatedTextUrls = [...textUrls];
                        updatedTextUrls[index] = e.target.value;
                        setTextUrls(updatedTextUrls);
                      }}
                    />
                    {index > 0 && (
                      <FaTrash
                        onClick={() => {
                          const updatedTextUrls = [...textUrls];
                          updatedTextUrls.splice(index, 1);
                          setTextUrls(updatedTextUrls);
                        }}
                        className="delete-icon"
                      />
                    )}
                  </div>
                ))}
                {textUrls.length < 4 && (
                  <button onClick={addTextUrlInput}>+</button>
                )}
              </div>
            )}
            {options === 'image' && (
              <div>
                <label htmlFor="imageUrls">Image URL</label>
                {imageUrls.map((imageUrl, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => {
                        const updatedImageUrls = [...imageUrls];
                        updatedImageUrls[index] = e.target.value;
                        setImageUrls(updatedImageUrls);
                      }}
                    />
                    {index > 0 && (
                      <FaTrash
                        onClick={() => {
                          const updatedImageUrls = [...imageUrls];
                          updatedImageUrls.splice(index, 1);
                          setImageUrls(updatedImageUrls);
                        }}
                        className="delete-icon"
                      />
                    )}
                  </div>
                ))}
                {imageUrls.length < 4 && (
                  <button onClick={addImageUrlInput}>+</button>
                )}
              </div>
            )}
            {options === 'text_image' && (
              <div>
                <div className="text-image-inputs">
                  <div className="text-inputs">
                    {textUrls.map((textUrl, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          value={textUrl}
                          onChange={(e) => {
                            const updatedTextUrls = [...textUrls];
                            updatedTextUrls[index] = e.target.value;
                            setTextUrls(updatedTextUrls);
                          }}
                        />
                        {index > 0 && (
                          <FaTrash
                            onClick={() => {
                              const updatedTextUrls = [...textUrls];
                              updatedTextUrls.splice(index, 1);
                              setTextUrls(updatedTextUrls);
                            }}
                            className="delete-icon"
                          />
                        )}
                      </div>
                    ))}
                    {textUrls.length < 4 && (
                      <button onClick={addTextUrlInput}>+</button>
                    )}
                  </div>
                  <div className="image-inputs">
                    {imageUrls.map((imageUrl, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          value={imageUrl}
                          onChange={(e) => {
                            const updatedImageUrls = [...imageUrls];
                            updatedImageUrls[index] = e.target.value;
                            setImageUrls(updatedImageUrls);
                          }}
                        />
                        {index > 0 && (
                          <FaTrash
                            onClick={() => {
                              const updatedImageUrls = [...imageUrls];
                              updatedImageUrls.splice(index, 1);
                              setImageUrls(updatedImageUrls);
                            }}
                            className="delete-icon"
                          />
                        )}
                      </div>
                    ))}
                    {imageUrls.length < 4 && (
                      <button onClick={addImageUrlInput}>+</button>
                    )}
                  </div>
                </div>
              </div>
            )}




            <div className="timer">
                <label htmlFor="timer">Timer</label>
                
                <button
                  className={timer === '0' ? 'selected' : 'timer-button'}
                  onClick={() => setTimer('5')}
                >
                  5 seconds
                </button>
                <button
                  className={timer === '10' ? 'selected' : 'timer-button'}
                  onClick={() => setTimer('10')}
                >
                  10 seconds
                </button>

                <button
                  className={timer === 'off' ? 'selected' : 'timer-button'}
                  onClick={() => setTimer('off')}
                >
                  Off
                </button>
              </div>
            </div>
            
          <div className="buttons">
              <button className="add-question-button" onClick={createQuestion}>
                Add Question
              </button>
              <button className="cancel-button" onClick={cancelModal}>
                Cancel
              </button>
            </div>
          </div>

        </div>
      )}

      
    </div>
  );
}

export default PollModal;
