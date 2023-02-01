import { FC, ReactNode } from 'react';
import SEO from '../../../../components/SEO';
import DashboardLayout from '../../../../layout/Dashboard';

type Props = {
	title?: string;
	children: ReactNode;
};

const BoardLayout: FC<Props> = ({ title, children }) => {
	return (
		<>
			<SEO title={title} />
			<DashboardLayout>{children}</DashboardLayout>
		</>
	);
};

export default BoardLayout;
