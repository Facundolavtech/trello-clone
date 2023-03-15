import { useRef } from 'react';
import { Icon, Input, Text, useToast } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from 'components/Button';
import config from 'config';
import bytesToMegabytes from 'utils/bytesToMegabytes';
import useUploadAttachment from 'features/BoardCard/hooks/useUploadAttachment';

const Upload = () => {
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const toast = useToast();

  const uploadMutation = useUploadAttachment();

  const handleChange = async (e) => {
    const file: File = e.target.files[0];

    if (file.size > config.FILES.maxSize) {
      hiddenFileInput.current && (hiddenFileInput.current.value = '');

      return toast({
        status: 'error',
        title: 'Error',
        description: `The file is very large, the maximum allowed is ${bytesToMegabytes(config.FILES.maxSize)} MB`,
        isClosable: false,
        position: 'top-right',
      });
    }

    try {
      await uploadMutation.mutateAsync({ file });
    } catch {
    } finally {
      hiddenFileInput.current && (hiddenFileInput.current.value = '');
    }
  };

  return (
    <>
      <Button
        loading={uploadMutation.isLoading}
        disabled={uploadMutation.isLoading}
        onClick={() => hiddenFileInput.current!.click()}
        style={{ gap: '10px' }}
        width="62px"
        height="24px"
        variant="outline"
        color="gray.3"
      >
        <Icon as={AiOutlinePlus} fontSize={10} />
        <Text fontSize={10} fontWeight={500}>
          Add
        </Text>
      </Button>
      <Input type="file" ref={hiddenFileInput} onChange={handleChange} display="none" />
    </>
  );
};

export default Upload;
