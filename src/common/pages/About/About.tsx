import { Box, Typography } from "@mui/material"

const About = () => {
  return (
    <Box m="30px auto" height={'50vh'} sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: '10px',
      width: '80%',
    }}>
      <Typography sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
      }} >
        About
      </Typography>
      <Typography sx={{
        fontSize: '1rem',
        marginBottom: '20px'
      }} >
        KuzeyArtist is a E-commerce website to sell the modern Clothes from famous brands.
      </Typography>
    </Box>
  )
}

export default About