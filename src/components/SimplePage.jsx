import { Card, Box, Typography } from '@mui/material'
import React from 'react'

function SimplePage() {
  return (
        <Box >
            <Card  sx={{ p: 2, m: 2 }}>
                <Typography variant='h4'>Simple Page</Typography>
                <Typography variant='body1'>This is a simple page.</Typography>
            </Card>
        </Box>
  )
}

export default SimplePage