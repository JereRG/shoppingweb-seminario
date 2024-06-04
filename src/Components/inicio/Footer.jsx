import React from 'react'
import SubscriptionForm from "./SubscriptionForm"
import { Box } from '@mui/material'

export const Footer = () => {
  return (
    <Box component={"footer"} sx={{bgcolor:"#2b2b2b", p:5, mt:5}}>
    <SubscriptionForm />
    </Box>
  )
}
