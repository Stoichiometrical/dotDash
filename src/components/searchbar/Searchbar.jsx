
import { InputAdornment, IconButton, Input, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import './search.scss'; // Import your SCSS file

const Searchbar = () => {
    return (
        <Paper elevation={3} className="search-bar">
            <Input
                placeholder="Search..."
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton>
                            <Search className="search-icon" />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Paper>
    );
};

export default Searchbar;
