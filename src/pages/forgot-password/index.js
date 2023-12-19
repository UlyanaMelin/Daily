// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** React Imports
import { useState } from 'react'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// Styled Components
const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  objectFit: 'cover', //от Саши
  width: '100%',
  height: '100%',
  borderRadius: '6px'
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 694
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: 'rgba(0, 108, 239, 1)',
  fontSize: theme.typography.body1.fontSize
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'пароль',
  email: 'mail@mail.com'
}

const CustomErrorComponentEmail = () => (
  <Box sx={{
    display:'flex',
    alignItems:'center',
    position: 'absolute' // от Паши
  }}>
    <Box sx={{mr:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <circle cx="12" cy="12.5" r="9" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 8.5V12.5" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9999 16.5H12.0099" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </Box>
    <span sx={{
    }}>
      Почта не найдена. Возможно нужно зарегистрироваться или подтвердить регистрацию ранее созданного аккаунта.
    </span>
  </Box>
);

const CustomErrorComponentChangePassword = () => (
  <Box sx={{
    display:'flex',
    alignItems:'center'
  }}>
    <Box sx={{mr:'5px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <circle cx="12" cy="12.5" r="9" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 8.5V12.5" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9999 16.5H12.0099" stroke="#EA5455" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </Box>
    <span sx={{
    }}>
      Пароли не совпадают. Убедитесь, что пароли соответствуют друг другу.
    </span>
  </Box>
);


const handleClickShowConfirmPassword = () => {
  setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
}

const ForgotPassword = () => {

  const [values, setValues] = useState({
    showPassword: false,
    showConfirmPassword: false
  });
  
  // ** Vars

  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('password', {
        type: 'manual',
        message: 'Пароли не совпадают. Убедитесь, что пароли соответствуют друг другу.'
      })

      setError('email', {
          type: 'manual',
          message: 'Почта не найдена. Возможно нужно зарегистрироваться или подтвердить регистрацию ранее созданного аккаунта.'
      })
    })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }

  // ЭКРАН 1 И 2 - ЗАБЫЛИ ПАРОЛЬ + ПОЧТА НЕ НАЙДЕНА 
  return (
    <Box className='content-center' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            height: '92vh', 
            flex: 1,
            maxWidth:'50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >

          <Box sx={{
            zIndex: 2,
            objectFit: 'cover', 
            width: '100%',
            height: '100%',
            borderRadius: '6px',
            background:'url(/images/pages/Container2.png)',
            backgroundPosition:'center-center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            position:'relative',

          }}>
            <Box sx={{
              position:'absolute',
              top:0,
              left:0,
              p:[5,5]
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.533 4.77737L43.2226 12.4671C49.5925 18.8369 49.5925 29.163 43.2226 35.533L35.533 43.2226C29.1631 49.5925 18.837 49.5925 12.4671 43.2226L4.77737 35.533C-1.59246 29.163 -1.59246 18.8369 4.77737 12.4671L12.4671 4.77737C18.837 -1.59246 29.1631 -1.59246 35.533 4.77737ZM10.3038 21.991C10.2867 22.4538 10.2867 23.0504 10.2867 24C10.2867 25.2719 10.2867 25.9096 10.3347 26.4478C10.8558 32.4131 15.5869 37.1441 21.5556 37.6686C22.0939 37.7166 22.7281 37.7166 24.0034 37.7166C25.2788 37.7166 25.913 37.7166 26.4513 37.6686C32.42 37.1475 37.1475 32.4166 37.6721 26.4478C37.7201 25.9096 37.7201 25.2754 37.7201 24C37.7201 23.2526 37.7201 22.7247 37.7098 22.3064C37.7029 22.0116 37.6892 21.775 37.6721 21.5522C37.1509 15.5869 32.42 10.8558 26.4513 10.3313C25.913 10.2833 25.2788 10.2833 24.0034 10.2833C22.7281 10.2833 22.0939 10.2833 21.5556 10.3313C15.5869 10.8524 10.8592 15.5835 10.3347 21.5522C10.321 21.6893 10.3141 21.8299 10.3073 21.9876L10.3038 21.991Z" fill="white"/>
              <path d="M56.2285 8.18414H68.39C72.6349 8.18414 76.1561 9.67197 78.9572 12.6511C81.7861 15.6267 83.2021 19.2983 83.2021 23.659C83.2021 28.0197 81.7861 31.6604 78.9572 34.6669C76.1561 37.6425 72.6349 39.134 68.39 39.134H56.2285V8.18414ZM61.3134 34.2693H68.3866C71.3046 34.2693 73.6772 33.2682 75.5046 31.2627C77.3629 29.2572 78.2886 26.7238 78.2886 23.659C78.2886 20.5942 77.3595 18.0573 75.5046 16.0553C73.6772 14.0498 71.3046 13.0487 68.3866 13.0487H61.3134V34.2693ZM105.283 20.1657V17.0254H110.059V39.1305H105.283V35.9457C103.486 38.4517 100.905 39.7031 97.5442 39.7031C94.5065 39.7031 91.9145 38.582 89.7613 36.3434C87.6078 34.1047 86.5347 31.3484 86.5347 28.0745C86.5347 24.8006 87.6113 22.0477 89.7613 19.8057C91.9145 17.5671 94.5065 16.4461 97.5442 16.4461C100.905 16.4461 103.483 17.6837 105.283 20.1588V20.1657ZM93.2996 33.1654C94.6265 34.492 96.2927 35.1537 98.295 35.1537C100.298 35.1537 101.964 34.492 103.291 33.1654C104.618 31.8113 105.279 30.1143 105.279 28.0814C105.279 26.0484 104.618 24.3686 103.291 23.0419C101.964 21.6878 100.298 21.009 98.295 21.009C96.2927 21.009 94.6265 21.6878 93.2996 23.0419C91.9727 24.3686 91.311 26.0484 91.311 28.0814C91.311 30.1143 91.9727 31.7804 93.2996 33.1654ZM118.73 12.8293C118.14 13.419 117.434 13.7138 116.608 13.7138C115.781 13.7138 115.061 13.419 114.441 12.8293C113.851 12.2088 113.556 11.4889 113.556 10.6627C113.556 9.83654 113.851 9.13032 114.441 8.54068C115.031 7.92018 115.754 7.61164 116.608 7.61164C117.461 7.61164 118.185 7.92018 118.775 8.54068C119.365 9.13032 119.659 9.83654 119.659 10.6627C119.659 11.4889 119.351 12.2088 118.73 12.8293ZM118.994 39.134H114.218V17.0254H118.994V39.1305V39.134ZM127.885 39.134H123.109V6.85742H127.885V39.1305V39.134ZM143.197 33.0763L148.858 17.0289H153.943L145.453 39.8433C143.331 45.5618 139.734 48.2735 134.663 47.9786V43.5116C136.138 43.6007 137.331 43.2921 138.246 42.5828C139.158 41.8765 139.926 40.7416 140.547 39.1785L140.766 38.7362L131.392 17.0289H136.611L143.201 33.0763H143.197Z" fill="white"/>
            </svg>
            </Box>
            <Typography sx={{
              textAlign: 'right',
              color:'rgba(255, 255, 255, 1)',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '22px',
              position:'absolute',
              bottom:0,
              right:0,
              p:[5,5]
            }}>
              Изображение создано с помощью нейронной сети
            </Typography>
          </Box>

        {/* <LoginIllustration alt='Container' src={`/images/pages/Container1.png`} /> */}

        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '0 0 0 3rem' //от Паши
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Box sx={{ my: 6 }}>
              <Typography 
              sx={{ 
              color: 'rgba(0, 108, 239, 1)', 
              fontSize: '26px',
              fontWeight: '600',
              lineHeight: '36px',
              letterSpacing: '0px',
              textAlign: 'left',
              marginBottom: '10px'
              }}>
                Забыли пароль? 
              </Typography>
              <Typography sx={{ 
                color: 'rgba(75, 70, 92, 1)', 
                fontFamily:'Helvetica Neue', 
                fontWeight:'400', 
                fontSize: '15px',             
                lineHeight: '18px',
                letterSpacing: '0px',
                textAlign: 'left',
              }}>
                Введите свой e-mail, и мы вышлем вам инструкции по восстановлению пароля.
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='Электронная почта'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder='Введите ваш e-mail'
                    error={Boolean(errors.email)}
                    helperText={ errors.email ? < CustomErrorComponentEmail/> : null}
                  />
                )}
              />
              <Box>
              {errors.email && 
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt:'24px'}}>
                <LinkStyled href='/login' sx={{ 
                  color: 'rgba(0, 108, 239, 1)', 
                  mr: 2 , 
                  fontWeight:'500', 
                  fontSize:'15px',
                  lineHeight:'22px',
                  mb: 3, mt: 8
                  }}>
                  <span>Регистрация</span>
                </LinkStyled>
              </Typography>
              }
              </Box>
              <Button fullWidth type='submit' variant='contained' 
              sx={{ mb: 4, height:'48px', marginTop:'24px', 
              background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
              color: 'rgba(255, 255, 255, 1)' }}>
                Отправить ссылку для сброса
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='/login' sx={{ color: 'var(--brand-bright-blue, #006CEF);', mr: 2 , fontWeight:'400', fontSize:'15px'}}>
                  <span>Вернуться ко входу</span>
                </LinkStyled>
              </Typography>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )

  // ЭКРАН 3 -ССЫЛКА ДЛЯ СБРОСА ОТПРАВЛЕНА 
  // return (
  //   <Box className='content-center' sx={{ backgroundColor: 'background.paper' }}>
  //     {!hidden ? (
  //       <Box
  //         sx={{
  //           height: '92vh', 
  //           flex: 1,
  //           maxWidth:'50%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}
  //       >

  //         <Box sx={{
  //           zIndex: 2,
  //           objectFit: 'cover', 
  //           width: '100%',
  //           height: '100%',
  //           borderRadius: '6px',
  //           background:'url(/images/pages/Container3.png)',
  //           backgroundPosition:'center-center',
  //           backgroundRepeat:'no-repeat',
  //           backgroundSize:'cover',
  //           position:'relative',

  //         }}>
  //           <Box sx={{
  //             position:'absolute',
  //             top:0,
  //             left:0,
  //             p:[5,5]
  //           }}>
  //           <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none">
  //             <path fill-rule="evenodd" clip-rule="evenodd" d="M35.533 4.77737L43.2226 12.4671C49.5925 18.8369 49.5925 29.163 43.2226 35.533L35.533 43.2226C29.1631 49.5925 18.837 49.5925 12.4671 43.2226L4.77737 35.533C-1.59246 29.163 -1.59246 18.8369 4.77737 12.4671L12.4671 4.77737C18.837 -1.59246 29.1631 -1.59246 35.533 4.77737ZM10.3038 21.991C10.2867 22.4538 10.2867 23.0504 10.2867 24C10.2867 25.2719 10.2867 25.9096 10.3347 26.4478C10.8558 32.4131 15.5869 37.1441 21.5556 37.6686C22.0939 37.7166 22.7281 37.7166 24.0034 37.7166C25.2788 37.7166 25.913 37.7166 26.4513 37.6686C32.42 37.1475 37.1475 32.4166 37.6721 26.4478C37.7201 25.9096 37.7201 25.2754 37.7201 24C37.7201 23.2526 37.7201 22.7247 37.7098 22.3064C37.7029 22.0116 37.6892 21.775 37.6721 21.5522C37.1509 15.5869 32.42 10.8558 26.4513 10.3313C25.913 10.2833 25.2788 10.2833 24.0034 10.2833C22.7281 10.2833 22.0939 10.2833 21.5556 10.3313C15.5869 10.8524 10.8592 15.5835 10.3347 21.5522C10.321 21.6893 10.3141 21.8299 10.3073 21.9876L10.3038 21.991Z" fill="white"/>
  //             <path d="M56.2285 8.18414H68.39C72.6349 8.18414 76.1561 9.67197 78.9572 12.6511C81.7861 15.6267 83.2021 19.2983 83.2021 23.659C83.2021 28.0197 81.7861 31.6604 78.9572 34.6669C76.1561 37.6425 72.6349 39.134 68.39 39.134H56.2285V8.18414ZM61.3134 34.2693H68.3866C71.3046 34.2693 73.6772 33.2682 75.5046 31.2627C77.3629 29.2572 78.2886 26.7238 78.2886 23.659C78.2886 20.5942 77.3595 18.0573 75.5046 16.0553C73.6772 14.0498 71.3046 13.0487 68.3866 13.0487H61.3134V34.2693ZM105.283 20.1657V17.0254H110.059V39.1305H105.283V35.9457C103.486 38.4517 100.905 39.7031 97.5442 39.7031C94.5065 39.7031 91.9145 38.582 89.7613 36.3434C87.6078 34.1047 86.5347 31.3484 86.5347 28.0745C86.5347 24.8006 87.6113 22.0477 89.7613 19.8057C91.9145 17.5671 94.5065 16.4461 97.5442 16.4461C100.905 16.4461 103.483 17.6837 105.283 20.1588V20.1657ZM93.2996 33.1654C94.6265 34.492 96.2927 35.1537 98.295 35.1537C100.298 35.1537 101.964 34.492 103.291 33.1654C104.618 31.8113 105.279 30.1143 105.279 28.0814C105.279 26.0484 104.618 24.3686 103.291 23.0419C101.964 21.6878 100.298 21.009 98.295 21.009C96.2927 21.009 94.6265 21.6878 93.2996 23.0419C91.9727 24.3686 91.311 26.0484 91.311 28.0814C91.311 30.1143 91.9727 31.7804 93.2996 33.1654ZM118.73 12.8293C118.14 13.419 117.434 13.7138 116.608 13.7138C115.781 13.7138 115.061 13.419 114.441 12.8293C113.851 12.2088 113.556 11.4889 113.556 10.6627C113.556 9.83654 113.851 9.13032 114.441 8.54068C115.031 7.92018 115.754 7.61164 116.608 7.61164C117.461 7.61164 118.185 7.92018 118.775 8.54068C119.365 9.13032 119.659 9.83654 119.659 10.6627C119.659 11.4889 119.351 12.2088 118.73 12.8293ZM118.994 39.134H114.218V17.0254H118.994V39.1305V39.134ZM127.885 39.134H123.109V6.85742H127.885V39.1305V39.134ZM143.197 33.0763L148.858 17.0289H153.943L145.453 39.8433C143.331 45.5618 139.734 48.2735 134.663 47.9786V43.5116C136.138 43.6007 137.331 43.2921 138.246 42.5828C139.158 41.8765 139.926 40.7416 140.547 39.1785L140.766 38.7362L131.392 17.0289H136.611L143.201 33.0763H143.197Z" fill="white"/>
  //           </svg>
  //           </Box>
  //           <Typography sx={{
  //             textAlign: 'right',
  //             color:'rgba(255, 255, 255, 1)',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '22px',
  //             position:'absolute',
  //             bottom:0,
  //             right:0,
  //             p:[5,5]
  //           }}>
  //             Изображение создано с помощью нейронной сети
  //           </Typography>
  //         </Box>

  //       {/* <LoginIllustration alt='Container' src={`/images/pages/Container1.png`} /> */}

  //       </Box>
  //     ) : null}
  //     <RightWrapper>
  //       <Box
  //         sx={{
  //           height: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           p: '0 0 0 3rem' //от Паши
  //         }}
  //       >
  //         <Box sx={{ width: '100%', maxWidth: 400 }}>
  //           <Box sx={{ my: 6, marginBottom:'52px' }}>
  //             <Typography 
  //             sx={{ 
  //             color: 'rgba(0, 108, 239, 1)', 
  //             fontSize: '26px',
  //             fontWeight: '600',
  //             lineHeight: '36px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //             marginBottom: '10px'
  //             }}>
  //               Ссылка отправлена
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontFamily:'Helvetica Neue', 
  //               fontWeight:'400', 
  //               fontSize: '15px',             
  //               lineHeight: '18px',
  //               letterSpacing: '0px',
  //               textAlign: 'left',
  //             }}>
  //               Проверьте свой e-mail и следуйте инструкции в нем!
  //             </Typography>
  //           </Box>
  //           <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
  //             <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
  //               <Button fullWidth type='submit' variant='contained' href='/login' 
  //                 sx={{ 
  //                   mb: 4, height:'48px', 
  //                   background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //                   color: 'rgba(255, 255, 255, 1)',
  //                   fontFamily: 'Helvetica Neue',
  //                   fontSize: '17px',
  //                   fontWeight: '500',
  //                   lineHeight: '22px',
  //                   letterSpacing: '0.4300000071525574px',
  //                   textAlign: 'left',
  //                   width: 'Hug (159px)',
  //                   padding: '13px, 26px, 13px, 26px',
  //                   gap: '16px',
  //                   boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
  //                   }}>
  //                 Вернуться ко входу
  //               </Button>
  //             </Typography>
  //           </form>
  //         </Box>
  //       </Box>
  //     </RightWrapper>
  //   </Box>
  // )

  // ЭКРАН 5 - ПАРОЛЬ УСПЕШНО ИЗМЕНЁН ВХОД
  // return (
  //   <Box className='content-center' sx={{ backgroundColor: 'background.paper' }}>
  //     {!hidden ? (
  //       <Box
  //         sx={{
  //           height: '92vh', 
  //           flex: 1,
  //           maxWidth:'50%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}
  //       >

  //         <Box sx={{
  //           zIndex: 2,
  //           objectFit: 'cover', 
  //           width: '100%',
  //           height: '100%',
  //           borderRadius: '6px',
  //           background:'url(/images/pages/Container5.png)',
  //           backgroundPosition:'center-center',
  //           backgroundRepeat:'no-repeat',
  //           backgroundSize:'cover',
  //           position:'relative',

  //         }}>
  //           <Box sx={{
  //             position:'absolute',
  //             top:0,
  //             left:0,
  //             p:[5,5]
  //           }}>
  //           <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none">
  //             <path fill-rule="evenodd" clip-rule="evenodd" d="M35.533 4.77737L43.2226 12.4671C49.5925 18.8369 49.5925 29.163 43.2226 35.533L35.533 43.2226C29.1631 49.5925 18.837 49.5925 12.4671 43.2226L4.77737 35.533C-1.59246 29.163 -1.59246 18.8369 4.77737 12.4671L12.4671 4.77737C18.837 -1.59246 29.1631 -1.59246 35.533 4.77737ZM10.3038 21.991C10.2867 22.4538 10.2867 23.0504 10.2867 24C10.2867 25.2719 10.2867 25.9096 10.3347 26.4478C10.8558 32.4131 15.5869 37.1441 21.5556 37.6686C22.0939 37.7166 22.7281 37.7166 24.0034 37.7166C25.2788 37.7166 25.913 37.7166 26.4513 37.6686C32.42 37.1475 37.1475 32.4166 37.6721 26.4478C37.7201 25.9096 37.7201 25.2754 37.7201 24C37.7201 23.2526 37.7201 22.7247 37.7098 22.3064C37.7029 22.0116 37.6892 21.775 37.6721 21.5522C37.1509 15.5869 32.42 10.8558 26.4513 10.3313C25.913 10.2833 25.2788 10.2833 24.0034 10.2833C22.7281 10.2833 22.0939 10.2833 21.5556 10.3313C15.5869 10.8524 10.8592 15.5835 10.3347 21.5522C10.321 21.6893 10.3141 21.8299 10.3073 21.9876L10.3038 21.991Z" fill="white"/>
  //             <path d="M56.2285 8.18414H68.39C72.6349 8.18414 76.1561 9.67197 78.9572 12.6511C81.7861 15.6267 83.2021 19.2983 83.2021 23.659C83.2021 28.0197 81.7861 31.6604 78.9572 34.6669C76.1561 37.6425 72.6349 39.134 68.39 39.134H56.2285V8.18414ZM61.3134 34.2693H68.3866C71.3046 34.2693 73.6772 33.2682 75.5046 31.2627C77.3629 29.2572 78.2886 26.7238 78.2886 23.659C78.2886 20.5942 77.3595 18.0573 75.5046 16.0553C73.6772 14.0498 71.3046 13.0487 68.3866 13.0487H61.3134V34.2693ZM105.283 20.1657V17.0254H110.059V39.1305H105.283V35.9457C103.486 38.4517 100.905 39.7031 97.5442 39.7031C94.5065 39.7031 91.9145 38.582 89.7613 36.3434C87.6078 34.1047 86.5347 31.3484 86.5347 28.0745C86.5347 24.8006 87.6113 22.0477 89.7613 19.8057C91.9145 17.5671 94.5065 16.4461 97.5442 16.4461C100.905 16.4461 103.483 17.6837 105.283 20.1588V20.1657ZM93.2996 33.1654C94.6265 34.492 96.2927 35.1537 98.295 35.1537C100.298 35.1537 101.964 34.492 103.291 33.1654C104.618 31.8113 105.279 30.1143 105.279 28.0814C105.279 26.0484 104.618 24.3686 103.291 23.0419C101.964 21.6878 100.298 21.009 98.295 21.009C96.2927 21.009 94.6265 21.6878 93.2996 23.0419C91.9727 24.3686 91.311 26.0484 91.311 28.0814C91.311 30.1143 91.9727 31.7804 93.2996 33.1654ZM118.73 12.8293C118.14 13.419 117.434 13.7138 116.608 13.7138C115.781 13.7138 115.061 13.419 114.441 12.8293C113.851 12.2088 113.556 11.4889 113.556 10.6627C113.556 9.83654 113.851 9.13032 114.441 8.54068C115.031 7.92018 115.754 7.61164 116.608 7.61164C117.461 7.61164 118.185 7.92018 118.775 8.54068C119.365 9.13032 119.659 9.83654 119.659 10.6627C119.659 11.4889 119.351 12.2088 118.73 12.8293ZM118.994 39.134H114.218V17.0254H118.994V39.1305V39.134ZM127.885 39.134H123.109V6.85742H127.885V39.1305V39.134ZM143.197 33.0763L148.858 17.0289H153.943L145.453 39.8433C143.331 45.5618 139.734 48.2735 134.663 47.9786V43.5116C136.138 43.6007 137.331 43.2921 138.246 42.5828C139.158 41.8765 139.926 40.7416 140.547 39.1785L140.766 38.7362L131.392 17.0289H136.611L143.201 33.0763H143.197Z" fill="white"/>
  //           </svg>
  //           </Box>
  //           <Typography sx={{
  //             textAlign: 'right',
  //             color:'rgba(255, 255, 255, 1)',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '22px',
  //             position:'absolute',
  //             bottom:0,
  //             right:0,
  //             p:[5,5]
  //           }}>
  //             Изображение создано с помощью нейронной сети
  //           </Typography>
  //         </Box>

  //       {/* <LoginIllustration alt='Container' src={`/images/pages/Container1.png`} /> */}

  //       </Box>
  //     ) : null}
  //     <RightWrapper>
  //       <Box
  //         sx={{
  //           height: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           p: '0 0 0 3rem' //от Паши
  //         }}
  //       >
  //         <Box sx={{ width: '100%', maxWidth: 400 }}>
  //           <Box sx={{ my: 6, marginBottom:'52px' }}>
  //             <Typography 
  //             sx={{ 
  //             color: 'rgba(0, 108, 239, 1)', 
  //             fontSize: '26px',
  //             fontWeight: '600',
  //             lineHeight: '36px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //             marginBottom: '10px'
  //             }}>
  //               Ваш пароль успешно изменён!
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontFamily:'Helvetica Neue', 
  //               fontWeight:'400', 
  //               fontSize: '15px',             
  //               lineHeight: '18px',
  //               letterSpacing: '0px',
  //               textAlign: 'left',
  //             }}>
  //               Можете войти в систему, используя новый пароль
  //             </Typography>
  //           </Box>
  //           <Box>
  //           <Button fullWidth type='submit' variant='contained' 
  //             sx={{ 
  //             mb: 4, height:'48px', 
  //             background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //             color: 'rgba(255, 255, 255, 1)',
  //             fontFamily: 'Helvetica Neue',
  //             fontSize: '17px',
  //             fontWeight: '500',
  //             lineHeight: '22px',
  //             letterSpacing: '0.4300000071525574px',
  //             textAlign: 'left',
  //             width: 'Hug (159px)',
  //             padding: '13px, 26px, 13px, 26px',
  //             gap: '16px',
  //             boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
  //             }}>
  //               Войти
  //           </Button>
  //         </Box>
  //         </Box>
  //       </Box>
  //     </RightWrapper>
  //   </Box>
  // )

  // ЭКРАН 4 И 6 - СБРОС ПАРОЛЯ + ОШИБКА ПРИ СБРОСЕ (ПАРОЛИ НЕ СОВПАДАЮТ)
  // return (
  //   <Box className='content-center' sx={{ backgroundColor: 'background.paper' }}>
  //     {!hidden ? (
  //       <Box
  //         sx={{
  //           height: '92vh', 
  //           flex: 1,
  //           maxWidth:'50%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}
  //       >

  //         <Box sx={{
  //           zIndex: 2,
  //           objectFit: 'cover', 
  //           width: '100%',
  //           height: '100%',
  //           borderRadius: '6px',
  //           background:'url(/images/pages/Container4.png)',
  //           backgroundPosition:'center-center',
  //           backgroundRepeat:'no-repeat',
  //           backgroundSize:'cover',
  //           position:'relative',

  //         }}>
  //           <Box sx={{
  //             position:'absolute',
  //             top:0,
  //             left:0,
  //             p:[5,5]
  //           }}>
  //           <svg xmlns="http://www.w3.org/2000/svg" width="154" height="48" viewBox="0 0 154 48" fill="none">
  //             <path fill-rule="evenodd" clip-rule="evenodd" d="M35.533 4.77737L43.2226 12.4671C49.5925 18.8369 49.5925 29.163 43.2226 35.533L35.533 43.2226C29.1631 49.5925 18.837 49.5925 12.4671 43.2226L4.77737 35.533C-1.59246 29.163 -1.59246 18.8369 4.77737 12.4671L12.4671 4.77737C18.837 -1.59246 29.1631 -1.59246 35.533 4.77737ZM10.3038 21.991C10.2867 22.4538 10.2867 23.0504 10.2867 24C10.2867 25.2719 10.2867 25.9096 10.3347 26.4478C10.8558 32.4131 15.5869 37.1441 21.5556 37.6686C22.0939 37.7166 22.7281 37.7166 24.0034 37.7166C25.2788 37.7166 25.913 37.7166 26.4513 37.6686C32.42 37.1475 37.1475 32.4166 37.6721 26.4478C37.7201 25.9096 37.7201 25.2754 37.7201 24C37.7201 23.2526 37.7201 22.7247 37.7098 22.3064C37.7029 22.0116 37.6892 21.775 37.6721 21.5522C37.1509 15.5869 32.42 10.8558 26.4513 10.3313C25.913 10.2833 25.2788 10.2833 24.0034 10.2833C22.7281 10.2833 22.0939 10.2833 21.5556 10.3313C15.5869 10.8524 10.8592 15.5835 10.3347 21.5522C10.321 21.6893 10.3141 21.8299 10.3073 21.9876L10.3038 21.991Z" fill="white"/>
  //             <path d="M56.2285 8.18414H68.39C72.6349 8.18414 76.1561 9.67197 78.9572 12.6511C81.7861 15.6267 83.2021 19.2983 83.2021 23.659C83.2021 28.0197 81.7861 31.6604 78.9572 34.6669C76.1561 37.6425 72.6349 39.134 68.39 39.134H56.2285V8.18414ZM61.3134 34.2693H68.3866C71.3046 34.2693 73.6772 33.2682 75.5046 31.2627C77.3629 29.2572 78.2886 26.7238 78.2886 23.659C78.2886 20.5942 77.3595 18.0573 75.5046 16.0553C73.6772 14.0498 71.3046 13.0487 68.3866 13.0487H61.3134V34.2693ZM105.283 20.1657V17.0254H110.059V39.1305H105.283V35.9457C103.486 38.4517 100.905 39.7031 97.5442 39.7031C94.5065 39.7031 91.9145 38.582 89.7613 36.3434C87.6078 34.1047 86.5347 31.3484 86.5347 28.0745C86.5347 24.8006 87.6113 22.0477 89.7613 19.8057C91.9145 17.5671 94.5065 16.4461 97.5442 16.4461C100.905 16.4461 103.483 17.6837 105.283 20.1588V20.1657ZM93.2996 33.1654C94.6265 34.492 96.2927 35.1537 98.295 35.1537C100.298 35.1537 101.964 34.492 103.291 33.1654C104.618 31.8113 105.279 30.1143 105.279 28.0814C105.279 26.0484 104.618 24.3686 103.291 23.0419C101.964 21.6878 100.298 21.009 98.295 21.009C96.2927 21.009 94.6265 21.6878 93.2996 23.0419C91.9727 24.3686 91.311 26.0484 91.311 28.0814C91.311 30.1143 91.9727 31.7804 93.2996 33.1654ZM118.73 12.8293C118.14 13.419 117.434 13.7138 116.608 13.7138C115.781 13.7138 115.061 13.419 114.441 12.8293C113.851 12.2088 113.556 11.4889 113.556 10.6627C113.556 9.83654 113.851 9.13032 114.441 8.54068C115.031 7.92018 115.754 7.61164 116.608 7.61164C117.461 7.61164 118.185 7.92018 118.775 8.54068C119.365 9.13032 119.659 9.83654 119.659 10.6627C119.659 11.4889 119.351 12.2088 118.73 12.8293ZM118.994 39.134H114.218V17.0254H118.994V39.1305V39.134ZM127.885 39.134H123.109V6.85742H127.885V39.1305V39.134ZM143.197 33.0763L148.858 17.0289H153.943L145.453 39.8433C143.331 45.5618 139.734 48.2735 134.663 47.9786V43.5116C136.138 43.6007 137.331 43.2921 138.246 42.5828C139.158 41.8765 139.926 40.7416 140.547 39.1785L140.766 38.7362L131.392 17.0289H136.611L143.201 33.0763H143.197Z" fill="white"/>
  //           </svg>
  //           </Box>
  //           <Typography sx={{
  //             textAlign: 'right',
  //             color:'rgba(255, 255, 255, 1)',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '22px',
  //             position:'absolute',
  //             bottom:0,
  //             right:0,
  //             p:[5,5]
  //           }}>
  //             Изображение создано с помощью нейронной сети
  //           </Typography>
  //         </Box>

  //       {/* <LoginIllustration alt='Container' src={`/images/pages/Container1.png`} /> */}

  //       </Box>
  //     ) : null}
  //     <RightWrapper>
  //       <Box
  //         sx={{
  //           height: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           p: '0 0 0 3rem' //от Паши
  //         }}
  //       >
  //         <Box sx={{ width: '100%', maxWidth: 400 }}>
  //           <Box sx={{ my: 6 }}>
  //             <Typography 
  //             sx={{ 
  //             color: 'rgba(0, 108, 239, 1)', 
  //             fontSize: '26px',
  //             fontWeight: '600',
  //             lineHeight: '36px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //             marginBottom: '10px'
  //             }}>
  //               Сброс пароля 
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontFamily:'Helvetica Neue', 
  //               fontWeight:'400', 
  //               fontSize: '15px',             
  //               lineHeight: '18px',
  //               letterSpacing: '0px',
  //               textAlign: 'left',
  //             }}>
  //               Введите новый пароль для аккаунта mail@mail.com
  //             </Typography>
  //           </Box>
  //           <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
  //             <Box sx={{ mb: 1.5 }}>
  //               <Controller
  //                   name='password'
  //                   control={control}
  //                   rules={{ required: true }}
  //                   render={({ field: { value, onChange, onBlur } }) => (
  //                     <CustomTextField
  //                       fullWidth
  //                       value={value}
  //                       onBlur={onBlur}
  //                       label='Пароль'
  //                       onChange={onChange}
  //                       id='auth-login-v2-password'
  //                       error={Boolean(errors.password)}
  //                       type={values.showPassword ? 'text' : 'password'}
  //                       InputProps={{
  //                       endAdornment: (
  //                         <InputAdornment position='end'>
  //                           <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
  //                             <Icon 
  //                               fontSize='1.25rem' 
  //                               color={values.showPassword ? 'rgba(234, 84, 85, 1)' : 'rgba(75, 70, 92, 1)'}
  //                               icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
  //                           </IconButton>
  //                         </InputAdornment>
  //                         )
  //                       }}
  //                     />
  //                   )}
  //                 />
  //             </Box>
  //             <Box sx={{ mb: 1.5 }}>
  //               <Controller
  //                   name='password2'
  //                   control={control}
  //                   rules={{ required: true }}
  //                   render={({ field: { value, onChange, onBlur } }) => (
  //                     <CustomTextField
  //                       fullWidth
  //                       value={value}
  //                       onBlur={onBlur}
  //                       label='Подтверждение пароля'
  //                       onChange={onChange}
  //                       id='auth-login-v2-password'
  //                       error={Boolean(errors.password)}
  //                       helperText={ errors.password ? < CustomErrorComponentChangePassword/> : null}
  //                       type={values.showConfirmPassword ? 'text' : 'password'}
  //                       InputProps={{
  //                         endAdornment: (
  //                           <InputAdornment position='end'>
  //                             <IconButton edge='end' onMouseDown={e => e.preventDefault()} onClick={handleClickShowConfirmPassword}>
  //                               <Icon fontSize='1.25rem' 
  //                                 color={values.showConfirmPassword ? 'rgba(234, 84, 85, 1)' : 'rgba(75, 70, 92, 1)'}
  //                                 icon={values.showConfirmPassword ? 'tabler:eye' : 'tabler:eye-off'} />
  //                             </IconButton>
  //                           </InputAdornment>
  //                         )
  //                       }}
  //                     />
  //                   )}
  //                 />
  //             </Box>
  //             <Button fullWidth type='submit' variant='contained' 
  //             sx={{ mb: 4, height:'48px', marginTop:'45px', 
  //             background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //             color: 'rgba(255, 255, 255, 1)' }}>
  //               Установить новый пароль
  //             </Button>
  //             <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
  //               <LinkStyled href='/login' sx={{ color: 'var(--brand-bright-blue, #006CEF);', mr: 2 , fontWeight:'400', fontSize:'15px'}}>
  //                 <span>Вернуться ко входу</span>
  //               </LinkStyled>
  //             </Typography>
  //           </form>
  //         </Box>
  //       </Box>
  //     </RightWrapper>
  //   </Box>
  // )

}
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
