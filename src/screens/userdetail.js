import { Icon, Stack, Button, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineStop } from "react-icons/ai";

import Socialmodal from "../components/socialmodal";

export default function Userdetail({ item }) {
  console.log(item);
  return (
    <div className="flex-container userdetail">
     
      <div>
        <h1>
          {item.generalinfo.first_name} {item.generalinfo.last_name}
        </h1>
        {/* to be changed: */}
        <p>Distance: 100m</p>
        <Socialmodal />
      </div>
      <div className='swipebuttons flex-container'>
      {/* <Stack direction="row" spacing={4}>
        <IconButton
            size='lg'
            fontSize='50px'
            bg='none'
            icon={<Icon w={8} h={8} as={AiOutlineStop} />}
          />
          <IconButton
            size='lg'
            bg='none'
            icon={<StarIcon w={8} h={8} color="yellow.300"  />}
          />
        </Stack> */}
        </div>
    </div>
  );
}
