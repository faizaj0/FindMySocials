import { Avatar, Button, Text } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

export default function Header({ name }) {
  return (
    <div>
      <Wrap justify="space-between">
        <WrapItem alignItems={'center'} justifyContent={'center'}>
          <Avatar size="md" src="https://bit.ly/broken-link" bg="gray.300" />
          <Text marginLeft={'1em'}>{ name }</Text>
        </WrapItem>
        <WrapItem>
            <Button className="btn-grad">Socials Nearby</Button>
        </WrapItem>
      </Wrap>
    </div>
  );
}
