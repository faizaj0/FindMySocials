import React, { Component, useEffect, useState }  from 'react';
import { useNavigate } from "react-router-dom";

import { Grid, Text } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

import { paths } from '../constants/paths';
import { getDistance } from '../constants/utils';

export default function UserGrid({ users, userProfile }) {
    const navigate = useNavigate();
    const placeholder = "https://via.placeholder.com/250x250";

    return (
      <div className="userGrid">
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          {users ?
            users.map((item, index) => (
              <div key={index} className="userlistitem">            
                  <Image
                    src={placeholder}
                    onClick={() => {
                      navigate(paths.USER_DETAIL_INDEX.replace(':index', index))
                    }}
                  />
                  <Text fontSize='sm' fontWeight={'bold'}>
                    {item.general_info.first_name}
                  </Text>
                  <Text fontSize={'xs'}>
                    {getDistance(
                      userProfile.location.latitude,
                      userProfile.location.longitude,
                      item.location.latitude,
                      item.location.longitude
                    )} km
                  </Text>
              </div>
            ))
            :
            <p>No Users Found</p>
          }
        </Grid>
      </div>
  );
}
