import { Avatar, Button } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Wrap justify="space-between">
        <WrapItem>
          <Avatar size="md" src="https://bit.ly/broken-link" bg="gray.300" />
        </WrapItem>
        <WrapItem>
            <Button className="btn-grad">Socials Nearby</Button>
        </WrapItem>
      </Wrap>
    </div>
  );
}
