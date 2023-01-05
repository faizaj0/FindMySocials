import React, { Component }  from 'react';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar() {
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
          color = "white"
          variant='flushed'
          onChange={(event) => {
            // Handle the user's input
          }}
        />
      </InputGroup>
    </div>
  );
}
