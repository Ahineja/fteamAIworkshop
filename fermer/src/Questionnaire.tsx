import React, { useState } from 'react';
import axios from 'axios';

const Questionnaire: React.FC = () => {
  const [answers, setAnswers] = useState({ question1: '', question2: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/questionnaire', answers);
      alert('Results submitted successfully!');
    } catch (error) {
      console.error('Error submitting results:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Question 1:
          <input type="text" name="question1" value={answers.question1} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Question 2:
          <input type="text" name="question2" value={answers.question2} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Questionnaire;
