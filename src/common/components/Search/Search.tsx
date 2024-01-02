import { Box, FormControl, Input } from '@mui/material'

const Search = () => {
    return (
        <Box component="div" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <h1>Search</h1>

            <FormControl sx={{ m: 1, width:'300px' }} variant="standard">
                <Input id="search" placeholder="Search" />
            </FormControl>
        </Box>
    )
}

export default Search