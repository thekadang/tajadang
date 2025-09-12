import React from 'react';

interface InputFieldProps {
  input: string;
  isCompleted: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ input, isCompleted }) => {
  return (
    <div className="input-section">
      <div className={`input-container ${isCompleted ? 'completed' : ''}`}>
        <div className="input-field">
          <span id="input-text" className={isCompleted ? 'completed' : ''}>
            {input}
          </span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default InputField;
