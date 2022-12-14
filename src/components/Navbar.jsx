import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './';

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
            position: 'sticky',
            background: '#000',
            justifyContent: 'space-between',
            top: '0',
            zIndex: 100
        }}
    >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" height="45px" />
        </Link>

        <SearchBar />
    </Stack>
);

export default Navbar;
