import {
    FC,
    ReactNode,
} from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout:FC<LayoutProps> = ({
    children,
}): JSX.Element => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/data'>Data</Link></li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;