import '../stylesheet/progressbar.css'; import React, { useState, useEffect } from 'react';

function FetchQuote() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    setProgress(20);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'h51HAduSmK3j8nDhJsGZ7g==UOrxjLtOdw50QXKB',
        },
      });

      setTimeout(() => setProgress(50), 500);

      const responseData = await response.json();
      if (response.ok) {
        setIsLoading(false);
        setError(false);
        setProgress(100);
        setData(responseData[0]);
      } else {
        setIsLoading(false);
        setProgress(100);
        setError(responseData);
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
      setProgress(100);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="quote-container">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  if (error) return <div className="quote-container">Something went wrong!</div>;

  if (data) {
    return (
      <div className="quote-container">
        <p className="quote">
          &quot;
          {data.quote}
          &quot;
        </p>
      </div>
    );
  }
}

export default FetchQuote;
