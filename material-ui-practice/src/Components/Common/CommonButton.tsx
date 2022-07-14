import React from 'react'
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { DistributiveOmit, OverridableStringUnion } from '@mui/types';

export interface ButtonPropsColorOverrides {}
export interface ButtonPropsSizeOverrides {}
export interface ButtonPropsVariantOverrides {}


type buttonProps = {
    children?: React.ReactNode, 
    color?: 	OverridableStringUnion<
    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' , ButtonPropsColorOverrides>,
    disabled?: boolean,
    size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>,

    sx?: SxProps, 
    variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides>;
}

function CommonButton({children, color, disabled, size, sx, variant}: buttonProps){


    return (
    <Button children={children} color={color} disabled={disabled} size={size} sx={sx} variant = {variant}></Button>
    ) 
  
}

export default CommonButton