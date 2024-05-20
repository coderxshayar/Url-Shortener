import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home({ login }) {
  const [formData, setFormData] = useState({ url: '' });
  const [shorturl, setShorturl] = useState(null);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/url', formData);
      console.log(response);

      if (response.status === 200) {
        setError('');
        setShorturl(`http://localhost:8001/url/${response.data.id}`);
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while generating the short URL.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shorturl);
      alert('Short URL copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // If not authenticated, return null to prevent rendering the home screen
  if (!isAuthenticated) {
    return null;
  }

  return (
    <section>
      <h1>Url Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://example.com"
        />
        <button type="submit" className="btn">Create</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {shorturl && error === '' ? (
        <div className="short-url">
          {shorturl}
          <button onClick={handleCopy} className="btn" id="cpy">Copy</button>
        </div>
      ) : null}
    </section>
  );
}

export default Home;










































