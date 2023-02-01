import http from '../../../../config/http';
import { ApiRoutes } from '../../../../config/routes';
import { IBoard } from '../../../../models/board.model';

const useBoard = () => {
	const getBoardById = async (id: string): Promise<IBoard> => {
		const response = await http.api.get(`${ApiRoutes.BOARD}/${id}`);
		return response.data;
	};

	return {
		getBoardById,
	};
};

export default useBoard;
