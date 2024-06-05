

/*import React, { useState } from 'react';
import axios from 'axios';
import './AI.css';

const AIModelInteraction = () => {
  const [response, setResponse] = useState('');
  const [question, setQuestion] = useState('');

  const handleAsk = async () => {
    try {
      const res = await axios.post('http://localhost:5000/ask', { question });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error asking the AI', error);
      setResponse('There was an error contacting the AI.');
    }
  };

  return (
    <div className="ai-interaction">
      <h2>Interact with Our AI Model</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleAsk}>Ask the AI</button>
      {response && <p className="response">{response}</p>}
    </div>
  );
};

export default AIModelInteraction;
*/

import React, { useState } from 'react';
import './AI.css';

const AIModelInteraction = () => {
  const [response, setResponse] = useState('');
  const [question, setQuestion] = useState('');

  const handleAsk = async () => {
    try {
      const res = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error asking the AI', error);
      setResponse('There was an error contacting the AI.');
    }
  };

  return (
    <div className="ai-interaction">
      <h2>Interact with Our AI Model</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleAsk}>Ask the AI</button>
      {response && <p className="response">{response}</p>}
    </div>
  );
};

export default AIModelInteraction;
