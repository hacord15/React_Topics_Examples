import React, { useState } from 'react';

const SearchBarFilter = ({ items }) => {
  const [searchItem, setSearchItem] = useState('');

  // Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder='Search...'
        onChange={(e) => setSearchItem(e.target.value)} // Update search term on change
        className="border p-2 rounded" 
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li> // Display message if no items match
        )}
      </ul>
    </div>
  );
};

export default SearchBarFilter;
