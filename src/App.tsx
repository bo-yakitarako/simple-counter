import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';

export const App: React.FC = () => {
  const [count, setCount] = useState(1);
  return (
    <Flex draggable>
      <Text
        onClick={() => setCount(count + 1)}
        onContextMenu={(e) => {
          e.preventDefault();
          setCount(count - 1);
        }}
      >
        今のコウモリ討伐数: {count}
      </Text>
    </Flex>
  );
};

const Flex = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
`;

const Text = styled(Typography)`
  font-size: 4rem;
  font-weight: bold;
`;
