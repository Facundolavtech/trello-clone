import { CSSProperties, FC } from 'react';
import { Box, Tooltip, Text } from '@chakra-ui/react';
import { FontFamily } from '../../theme/constants';
import Avatar, { AvatarWithRef } from '../Avatar';
import { IBoardMember } from '../../models/board.model';

type Props = {
  members: IBoardMember[];
  maxMembers?: number;
  avatarStyles?: CSSProperties;
  lastBoxStyles?: CSSProperties;
  useTooltip?: boolean;
};

const MemberList: FC<Props> = ({ members, maxMembers = 4, avatarStyles = {}, lastBoxStyles = {}, useTooltip = true }) => {
  return (
    <>
      {members.slice(0, maxMembers).map((member) =>
        useTooltip ? (
          <Tooltip key={member.id} label={member.user.name} aria-label="A tooltip" hasArrow bg="gray.4" color="white" fontWeight={400} placement="top">
            <Box>
              <AvatarWithRef src={member.user.picture} name={member.user.name} style={avatarStyles} />
            </Box>
          </Tooltip>
        ) : (
          <Avatar key={member.id} src={member.user.picture} name={member.user.name} style={avatarStyles} />
        )
      )}
      {members.length > maxMembers && (
        <Box display="flex" alignItems="center" justifyContent="center" width="32px" height="32px" borderRadius="8px" bg="lightgray.1" style={lastBoxStyles}>
          <Text fontWeight={500} fontFamily={FontFamily.NotoSans} color="gray.4" fontSize={12}>
            +{members.length - maxMembers}
          </Text>
        </Box>
      )}
    </>
  );
};

export default MemberList;
