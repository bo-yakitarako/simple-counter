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
        現在{count}レース目
      </Text>
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
