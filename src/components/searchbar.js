import React, { Component }  from 'react';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar({ nearbyUsers, setNearbyUsers }) {
  
  function handleChange(e) {
    const searchString = e.target.value.toLowerCase();
    const arr = nearbyUsers.map((user) => {
      const userFirstName = user.general_info.first_name.toLowerCase();
      return (
        {
          ...user,
          visible: userFirstName.includes(searchString),
        }
      )
    })
    setNearbyUsers(arr);
  }

  return (
    <div className="search-bar">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.2em"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Search..."
          size="md"
          variant='flushed'
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
}
