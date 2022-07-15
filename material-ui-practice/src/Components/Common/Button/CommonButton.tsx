import React from 'react'
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { DistributiveOmit, OverridableStringUnion } from '@mui/types';

export interface ButtonPropsColorOverrides {}
export interface ButtonPropsSizeOverrides {}
export interface ButtonPropsVariantOverrides {}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      white: true;
    }
  }

type buttonProps = {
    children?: React.ReactNode, 
    color?: 	OverridableStringUnion<
    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'|"white" , ButtonPropsColorOverrides>,
    disabled?: boolean,
    size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>,

    sx?: SxProps, 
    variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides>;
    onClick?: (a: React.MouseEvent<HTMLButtonElement>)=>void
}

function CommonButton({children, color, disabled, size, sx, variant, onClick}: buttonProps){


    return (
    <Button children={children} color={color} disabled={disabled} size={size} sx={sx} variant = {variant} onClick={onClick}></Button>
    ) 
  
}

export default CommonButton