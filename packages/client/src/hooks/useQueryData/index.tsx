import { useQueryClient } from '@tanstack/react-query';

const useQueryData = (key: string) => {
	const queryClient = useQueryClient();

	return queryClient.getQueryData<any>([key]);
};

export default useQueryData;
