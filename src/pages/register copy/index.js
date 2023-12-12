// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import MuiStep from '@mui/material/Step'
import CardContent from '@mui/material/CardContent'


// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { Container, display, height } from '@mui/system'



const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const Register = ({handleNext}) => {
  // ** States
  const [showPassword, setShowPassword] = useState(false);
  
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  const [values, setValues] = useState({
    showPassword: false,
    showConfirmPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }

  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      display:'flex',
      justifyContent:'center',
    }}>
    <Box  sx={{ 
      mt: '26px' , 
      backgroundColor: 'background.paper',

      maxWidth:'85%',
      display:'flex',
      flexDirection:'column',

      // paddingLeft:'380px'
      }}>
      {/* backgroundColor: 'background.paper' */}
      
      <Box >
        <Typography variant='h3' sx={{
          mb: '20px',
          color:'rgba(0, 108, 239, 1)',
          fontSize: '26px',
          fontWeight: '600',
          lineHeight: '36px',
          letterSpacing: '0px',
          textAlign: 'left',
          fontStyle: 'normal',
          font:'Helvetica Neue',

          }}>
          Информация об аккаунте
        </Typography>
        <Typography sx={{ 
          color: 'rgba(75, 70, 92, 1)', 
          mb: '26px',
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '18px',
          letterSpacing: '0px',
          textAlign: 'left',
          }}>
            Введите данные своего аккаунта
        </Typography>
      </Box>

      <Grid container spacing={5} >
        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <CustomTextField fullWidth label='Имя пользователя' placeholder='Введите ваш e-mail' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomTextField fullWidth label='Телефон' placeholder='+7' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomTextField fullWidth  label='Фамилия' placeholder='Иванов' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomTextField fullWidth label='Имя' placeholder='Иван' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            label='Пароль'
            id='input-password'
            placeholder='············'
            type={values.showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                    <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            label='Повторите пароль'
            id='input-confirm-password'
            type={values.showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end' onMouseDown={e => e.preventDefault()} onClick={handleClickShowConfirmPassword}>
                    <Icon fontSize='1.25rem' icon={values.showConfirmPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent:'flex-end'

            // justifyContent: 'space-between' 
            }}>
            {/* <Button disabled variant='tonal' sx={{ '& svg': { mr: 2 } }}>
              <Icon fontSize='1.125rem' icon='tabler:arrow-left' />
              Previous
            </Button> */}
            <Button variant='contained' onClick={handleNext} sx={{ 
              mb: 4, height:'48px', 
              background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '17px',
              fontWeight: '500',
              lineHeight: '22px',
              letterSpacing: '0.4300000071525574px',
              textAlign: 'left',
              width: 'Hug (159px)',
              padding: '13px, 26px, 13px, 26px',
              gap: '16px',
              boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
              }}>
              Далее
              {/* <Icon fontSize='1.125rem' icon='tabler:arrow-right' /> */}
            </Button>
          </Box>
        </Grid>
        
      </Grid>
    
    </Box>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
