import { FC } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { IBoardCardLabel } from '../../../../../../../../models/board-card.model';
import { FontFamily } from '../../../../../../../../theme/constants';
import capitalizeFirstLetter from '../../../../../../../../utils/capitalizeFirstLetter';
import { useDeleteLabelIsMutating } from '../../../../../../hooks/useDeleteLabel';
import Delete from '../Actions/Delete';

type Props = {
  label: IBoardCardLabel;
};

const Label: FC<Props> = ({ label }) => {
  const isMutating = useDeleteLabelIsMutating({ id: label.id });

  return (
    <Box _hover={{ backgroundColor: `${label.color}99` }} position="relative" role="group" px={3} py={0.5} borderRadius="8px" backgroundColor={`${label.color}40`}>
      {isMutating ? (
        <Spinner size="xs" color={label.color} />
      ) : (
        <>
          <Delete id={label.id} />
          <Text _groupHover={{ opacity: 0, visibility: 'hidden' }} fontFamily={FontFamily.NotoSans} fontWeight={500} fontSize={10} color={label.color}>
            {capitalizeFirstLetter(label.name)}
          </Text>
        </>
      )}
    </Box>
  );
};

export default Label;
