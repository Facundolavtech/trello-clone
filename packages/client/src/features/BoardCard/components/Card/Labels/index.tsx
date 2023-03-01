import { FC } from 'react';
import { Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FontFamily } from '../../../../../theme/constants';
import capitalizeFirstLetter from '../../../../../utils/capitalizeFirstLetter';
import { IBoardCardLabel } from '../../../../../models/board-card.model';

type Props = {
  items: IBoardCardLabel[];
};

const Labels: FC<Props> = ({ items }) => {
  return (
    <Wrap>
      {items.map((label) => (
        <WrapItem
          key={label.id}
          height="18px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={2}
          borderRadius="8px"
          backgroundColor={`${label.color}40`}
        >
          <Text fontSize={10} fontWeight={500} textTransform="capitalize" fontFamily={FontFamily.NotoSans} color={label.color}>
            {capitalizeFirstLetter(label.name)}
          </Text>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Labels;
