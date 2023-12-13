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
  width: '100%',
  height: '100%',

  // zIndex: 2,
  // maxHeight: 650,
  // marginTop: theme.spacing(12),
  // marginBottom: theme.spacing(12),
  // [theme.breakpoints.down(1540)]: {
  //   maxHeight: 550
  // },
  // [theme.breakpoints.down('lg')]: {
  //   maxHeight: 500
  // }
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
  // password: '············',
  password: 'пароль',
  email: 'mail@mail.com'
}

const CustomErrorComponentEmail = () => (
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
      // setError('email', {
        type: 'manual',

        // message: 'Email or Password is invalid'
        message: 'Пароли не совпадают. Убедитесь, что пароли соответствуют друг другу.'
      })

      setError('email', {
        // setError('email', {
          type: 'manual',
  
          // message: 'Email or Password is invalid'
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
  // return (
  //   <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
  //     {!hidden ? (
  //       <Box
  //         sx={{
  //           flex: 1,
  //           display: 'flex',
  //           position: 'relative',
  //           alignItems: 'center',
  //           maxWidth: '694px',
  //           justifyContent: 'center',
  //           backgroundColor: "background.paper",
  //           borderRadius:'6px',
  //           margin: theme => theme.spacing(8, 0, 8, 8)
  //         }}
  //       >
  //         <ForgotPasswordIllustration
  //           alt='forgot-password-illustration'
  //           src={`/images/pages/Containers2.png`}
  //         />
  //       </Box>
  //     ) : null}
  //     <RightWrapper>
  //       <Box
  //         sx={{
  //           p: [6, 12],
  //           height: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
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
  //               Забыли пароль? 
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
  //               Введите свой e-mail, и мы вышлем вам инструкции по восстановлению пароля.
  //             </Typography>
  //           </Box>
  //           <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
  //             <Controller
  //               name='email'
  //               control={control}
  //               rules={{ required: true }}
  //               render={({ field: { value, onChange, onBlur } }) => (
  //                 <CustomTextField
  //                   fullWidth
  //                   autoFocus
  //                   label='Электронная почта'
  //                   value={value}
  //                   onBlur={onBlur}
  //                   onChange={onChange}
  //                   placeholder='Введите ваш e-mail'
  //                   error={Boolean(errors.email)}
  //                   helperText={ errors.email ? < CustomErrorComponentEmail/> : null}
  //                 />
  //               )}
  //             />
  //             <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt:'24px'}}>
  //               <LinkStyled href='/login' sx={{ 
  //                 color: 'rgba(0, 108, 239, 1)', 
  //                 mr: 2 , 
  //                 fontWeight:'500', 
  //                 fontSize:'15px',
  //                 lineHeight:'22px'
  //                 }}>
  //                 <span>Регистрация</span>
  //               </LinkStyled>
  //             </Typography>
  //             <Button fullWidth type='submit' variant='contained' 
  //             sx={{ mb: 4, height:'48px', marginTop:'24px', 
  //             background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //             color: 'rgba(255, 255, 255, 1)' }}>
  //               Отправить ссылку для сброса
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

  // ЭКРАН 3 -ССЫЛКА ДЛЯ СБРОСА ОТПРАВЛЕНА 
  // return (
  //   <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
  //     {!hidden ? (
  //       <Box
  //         sx={{
  //           flex: 1,
  //           display: 'flex',
  //           position: 'relative',
  //           alignItems: 'center',
  //           maxWidth: '694px',
  //           justifyContent: 'center',
  //           backgroundColor: "background.paper",
  //           borderRadius:'6px',
  //           margin: theme => theme.spacing(8, 0, 8, 8)
  //         }}
  //       >
  //         <ForgotPasswordIllustration
  //           alt='forgot-password-illustration'
  //           src={`/images/pages/Containers3.png`}
  //         />
  //         {/* <FooterIllustrationsV2 /> */}
  //       </Box>
  //     ) : null}
  //     <RightWrapper>
  //       <Box
  //         sx={{
  //           p: [6, 12],
  //           height: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
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
  //   <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
  //     {!hidden ? (
  //       <Box
  //         sx={{
  //           flex: 1,
  //           display: 'flex',
  //           position: 'relative',
  //           alignItems: 'center',
  //           maxWidth: '694px',
  //           justifyContent: 'center',
  //           backgroundColor: "background.paper",
  //           borderRadius:'6px',
  //           margin: theme => theme.spacing(8, 0, 8, 8)
  //         }}
  //       >
  //         <ForgotPasswordIllustration
  //           alt='forgot-password-illustration'
  //           src={`/images/pages/Containers5.png`}
  //         />
  //       </Box>
  //     ) : null}
  //     <RightWrapper>
  //       <Box
  //         sx={{
  //           p: [6, 12],
  //           height: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
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
  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            maxWidth: '694px',
            justifyContent: 'center',
            backgroundColor: "background.paper",
            borderRadius:'6px',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <ForgotPasswordIllustration
            alt='forgot-password-illustration'
            src={`/images/pages/Containers4.png`}
          />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
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
                Сброс пароля 
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
                Введите новый пароль для аккаунта mail@mail.com
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        value={value}
                        onBlur={onBlur}
                        label='Пароль'
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.password)}
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
                    )}
                  />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                    name='password2'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        value={value}
                        onBlur={onBlur}
                        label='Подтверждение пароля'
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.password)}
                        helperText={ errors.password ? < CustomErrorComponentChangePassword/> : null}
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
                    )}
                  />
              </Box>
              <Button fullWidth type='submit' variant='contained' 
              sx={{ mb: 4, height:'48px', marginTop:'45px', 
              background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
              color: 'rgba(255, 255, 255, 1)' }}>
                Установить новый пароль
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

}
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
