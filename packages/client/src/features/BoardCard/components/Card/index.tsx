import { Avatar, color, Heading, HStack, Icon, Image, Text, Tooltip, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPaperclip } from 'react-icons/bs';
import { MdInsertComment } from 'react-icons/md';
import Button from '../../../../components/Button';
import CustomCard from '../../../../components/Card';
import { BoardListCard } from '../../../../models/board-list.model';
import { FontFamily } from '../../../../theme/constants';
import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

type Props = {
  card: BoardListCard;
};

const Card: FC<Props> = ({ card }) => {
  return (
    <CustomCard variant="board-card" width="full">
      <VStack spacing="12px" alignItems="flex-start">
        {card.cover && <Image src={card.cover} alt={`${card.title} cover`} width="full" height="130px" borderRadius="12px" />}
        <Heading fontSize={16} fontWeight={400} fontFamily={FontFamily.NotoSans}>
          {card.title}
        </Heading>
        <Wrap>
          {card.labels.map((label) => {
            return (
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
            );
          })}
        </Wrap>
        <HStack width="full" justifyContent="space-between">
          <HStack spacing="8px">
            {card.members.slice(0, 3).map((member) => (
              <Tooltip key={member.id} label={member.user.name} aria-label="A tooltip" hasArrow bg="gray.4" color="white" fontWeight={400} placement="top">
                <Avatar
                  src={member.user.picture ?? ''}
                  name={member.user.name}
                  width="28px"
                  height="28px"
                  borderRadius="8px"
                  bg={member.user.picture ? 'transparent' : 'gray.4'}
                  color="white"
                />
              </Tooltip>
            ))}
            {card.members.length > 3 && (
              <Text fontWeight={500} fontFamily={FontFamily.NotoSans} color="gray.4" fontSize={12}>
                +{card.members.length - 3} others
              </Text>
            )}
            <Button variant="primary" width="28px" height="28px" px={0}>
              <Icon as={AiOutlinePlus} color="white" fontSize={14} />
            </Button>
          </HStack>
          <HStack spacing="13px">
            <HStack spacing="7px">
              <Icon as={MdInsertComment} fontSize={13} color="gray.4" />
              <Text fontSize={10} fontWeight={500} color="gray.4" fontFamily={FontFamily.NotoSans}>
                {card.comments.length}
              </Text>
            </HStack>
            <HStack>
              <Icon as={BsPaperclip} fontSize={13} color="gray.4" />
              <Text fontSize={10} fontWeight={500} color="gray.4" fontFamily={FontFamily.NotoSans}>
                {card.attachments.length}
              </Text>
            </HStack>
          </HStack>
        </HStack>
      </VStack>
    </CustomCard>
  );
};

export default Card;
