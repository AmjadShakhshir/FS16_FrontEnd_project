import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowLeftIcon  from "@mui/icons-material/KeyboardDoubleArrowLeft"
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <Box m="30px 0">
      <Typography>
        404 Not Found 
        <br />
        The page you are looking for might have been removed or is temporarily
        unavailable. Please check the URL and try again.
      </Typography>
      <Button
        startIcon={<KeyboardDoubleArrowLeftIcon />}
        onClick={handleClick}
        sx={{ display: "flex", margin: "0 auto" }}
      >
        Go back
      </Button>
    </Box>
  )
}

export default ErrorPage