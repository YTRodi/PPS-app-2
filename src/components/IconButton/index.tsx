import React from 'react';
import { IconButton as PaperIconButton } from 'react-native-paper';

type Props = React.ComponentProps<typeof PaperIconButton>;

const IconButton = (props: Props) => {
  return (
    <PaperIconButton animated {...props}>
      IconButton
    </PaperIconButton>
  );
};

export default IconButton;
