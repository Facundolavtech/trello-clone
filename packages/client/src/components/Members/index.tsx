import { CSSProperties, FC } from 'react';
import { Box, Tooltip, Text, AvatarProps } from '@chakra-ui/react';
import { FontFamily } from 'theme/constants';
import Avatar from 'components/Avatar';
import { IBoardMember } from 'models/board.model';

type Props = {
  members: IBoardMember[];
  maxMembers?: number;
  avatarProps: AvatarProps;
  lastBoxStyles?: CSSProperties;
  useTooltip?: boolean;
};

const MemberList: FC<Props> = ({ members, maxMembers = 4, avatarProps = {}, lastBoxStyles = {}, useTooltip = true }) => {
  return (
    <>
      {members.slice(0, maxMembers).map((member) =>
        useTooltip ? (
          <Tooltip closeOnClick key={member.id} label={member.user.name} aria-label="A tooltip" hasArrow bg="gray.4" color="white" fontWeight={400} placement="top">
            <Box>
              <Avatar {...avatarProps} src={member.user.picture || ''} name={member.user.name} />
            </Box>
          </Tooltip>
        ) : (
          <Avatar width={avatarProps.width} height={avatarProps.height} key={member.id} src={member.user.picture || ''} name={member.user.name} />
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
