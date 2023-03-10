import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';

export const App: React.FC = () => {
  const [count, setCount] = useState(1);
  return (
    <Flex draggable>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </Button>
      <Text>現在{count}戦目</Text>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
    </Flex>
  );
};

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Text = styled(Typography)`
  font-size: 4rem;
  font-weight: bold;
`;
