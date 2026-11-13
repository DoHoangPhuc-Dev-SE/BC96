import React from "react";
import { Button, Flex, Spin } from 'antd';

export default function TestAntd() {
  return (
    <Flex gap='10px'>
      <Button type="">Primary Button</Button>

      <Button color="primary" variant="filled">
            Outlined
          </Button>
          <Spin />
    </Flex>
  );
}
