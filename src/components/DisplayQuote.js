import React, { useState, useEffect } from 'react';
import './Calculator.css';

function DisplayQuote() {
  const [quoteData, setQuoteData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const category = 'education';
        const apiKey = 'aYoRyKL5ZoweqVzTKGb6LA==iom5JU2ZIcNnttw1';
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const quoteJson = await response.json();
        if (quoteJson.length > 0) {
          setQuoteData(quoteJson[0]);
        } else {
          setErrorText('No quotes available in this category');
        }
      } catch (err) {
        setErrorText('Something went wrong while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div className="spinner" />;
  }

  if (errorText) {
    return <div>{errorText}</div>;
  }

  return (
    <div className="quoteDisplay">
      <h2 className="string">{quoteData.quote}</h2>
      <h3 className="stringAuthor">{quoteData.author}</h3>
    </div>
  );
}

export default DisplayQuote;
