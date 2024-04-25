// SearchBar.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    onSearch(city);
  };

  return (
    <div>
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
