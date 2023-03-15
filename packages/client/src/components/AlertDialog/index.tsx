import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text,
} from '@chakra-ui/react';
import { FC, ReactElement, useRef } from 'react';
import Button from 'components/Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  actionButton: ReactElement;
  loading?: boolean;
};

const AlertDialog: FC<Props> = ({ isOpen, onClose, title, subtitle, actionButton }) => {
  const cancelRef = useRef(null);

  return (
    <ChakraAlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} preserveScrollBarGap>
      <AlertDialogOverlay backgroundColor="rgba(0,0,0,0.4)" />
      <AlertDialogContent>
        <AlertDialogHeader color="gray.1" fontSize={16} fontWeight={500}>
          {title}
        </AlertDialogHeader>
        <AlertDialogBody color="gray.3" fontSize={12} fontWeight={400}>
          {subtitle}
        </AlertDialogBody>
        <AlertDialogFooter display="flex" justifyContent="flex-end" alignItems="center" gap={4}>
          <Button variant="link" ref={cancelRef} onClick={onClose}>
            <Text fontSize={12} color="gray.3" fontWeight={500}>
              Cancel
            </Text>
          </Button>
          {actionButton}
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;
