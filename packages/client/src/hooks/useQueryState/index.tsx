import { useQueryClient, QueryState } from '@tanstack/react-query';

function useQueryState<T>(key: string): QueryState<T, unknown> {
	const queryClient = useQueryClient();

	return queryClient.getQueryState<T>([key]) as QueryState<T, unknown>;
}

export default useQueryState;
