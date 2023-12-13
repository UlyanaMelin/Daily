// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
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

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,

  width: '100%',
  height: '100%',
  
  // marginTop: theme.spacing(26),
  // marginBottom: theme.spacing(26),
  // [theme.breakpoints.down(1540)]: {
  //   maxHeight: 750
  // },
  // [theme.breakpoints.down('lg')]: {
  //   maxHeight: 700
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
  textDecoration: 'none',
  color: 'rgba(0, 108, 239, 1)'
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

// const defaultValues = {
//   password: 'admin',
//   email: 'admin@vuexy.com'
// }

// interface FormData {
//   email: string
//   password: string
// }

const LoginPage = () => {
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
    console.log('email', email)
    auth.login({ email, password, rememberMe }, () => {
      setError('password', {
      // setError('email', {
        type: 'manual',

        // message: 'Email or Password is invalid'
        message: 'Неверный пароль. Повторите попытку.'
      })
      setError('email', {
        // setError('email', {
          type: 'manual',
  
          // message: 'Email or Password is invalid'
          message: 'Почта не найдена. Возможно нужно зарегистрироваться или подтвердить регистрацию ранее созданного аккаунта.',
         
        })
    })
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

  const CustomErrorComponentPassword = () => (
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
        Неверный пароль. Повторите попытку.
      </span>
    </Box>
  );

//  ЭКРАН 1 И 4 (с ошибкой почта не найдена)

return (
  <Box className='content-right' sx={{ backgroundColor: 'background.paper'}}>
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
        <LoginIllustration alt='Containers' src={`/images/pages/Containers1.png`} />

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
            <Typography sx={{ 
              color: 'rgba(0, 108, 239, 1)', 
              fontSize: '26px',
              fontWeight: '600',
              lineHeight: '36px',
              letterSpacing: '0px',
              textAlign: 'left',
              mb: '10px'
              }}>
              Добро пожаловать в Daily
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
               Пожалуйста, войдите в свою учетную запись.
            </Typography>
          </Box>
         
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ 
              mb:'24px',
              width: 'Fill (400px)',
              height: 'Hug (48px)',
              borderRadius: '8px',
              borderColor:'rgba(219, 218, 222, 1)',
              color:'rgba(219, 218, 222, 1)',
              fontFamily: 'Helvetica Neue',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '22px',
              letterSpacing: '0px',
              textAlign: 'left',
              }}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='Email'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder='Введите ваш e-mail'
                    error={Boolean(errors.email)}
                    helperText={ errors.email ? < CustomErrorComponentEmail/> : null}
                  />
                )}
              />    
            </Box>

            <Box
              sx={{
                mb: 1.75,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
            </Box>
          </form>

          <Box sx={{mb:'24px'}}>
            {errors.email && 
              <Typography sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              color:'rgba(0, 108, 239, 1)', 
              fontSize:'15px',
              fontWeight:'500',
              lineHeight:'22px',
              justifyContent: 'center', '& svg': { mr: 1 }, }}>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='/login' sx={{ 
                  color: 'rgba(0, 108, 239, 1)', 
                  mr: 2 , 
                  fontWeight:'400', 
                  fontSize:'15px',
                  lineHeight:'22px'
                  }}>
                  <span>Регистрация</span>
                </LinkStyled>
              </Typography>
              </Typography>
            }
          </Box>
          
          <Box sx={{ my: 6 }}>           
            <Divider sx={{my:6, 
            fontFamily: 'Helvetica Neue',
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0px',
            textAlign: 'left',
            color:'rgba(75, 70, 92, 1)',
            gap:'26px',      
            }}>
            или   
            </Divider>

            <Button fullWidth type='submit' variant='contained' 
            sx={{ 
            mb: 4, height:'36px', 
            background: "radial-gradient(100% 316.05% at 100% 100%, #FFFFFF 0%, #FFFFFF 100%)",
            linearGradient:'(0deg, #FFFFFF, #FFFFFF)',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0px',
            textAlign: 'left',
            width: 'Fixed (400px)',
            borderRadius: '6px',
            border: '0.5px',
            gap: '10px',
            border: '0.5px solid', 
            borderColor:'rgba(75, 70, 92, 1)',
            padding: '18px, 31px, 18px, 31px',                         
            }}>
            <img alt='yandex' src={`/images/pages/yandex.png`}/>
              Войти по Яндекс ID
            </Button>

            <Button fullWidth type='submit' variant='contained' 
            sx={{ 
            mb: 4, height:'36px', 
            background: "radial-gradient(100% 316.05% at 100% 100%, rgba(242, 242, 242, 1) 0%, rgba(242, 242, 242, 1) 100%)",
            linearGradient:'(0deg, rgba(242, 242, 242, 1), rgba(242, 242, 242, 1))',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0px',
            textAlign: 'left',
            width: 'Fixed (400px)',
            borderRadius: '6px',
            border: '0.5px',
            gap: '10px',
            border: '0.5px solid', 
            borderColor:'rgba(75, 70, 92, 1)',
            padding: '12px, 28px, 12px, 28px',                                                 
            }}>
            <img alt='google' src={`/images/pages/google.png`}/>
              Войти через Google
            </Button>

            <Button fullWidth type='submit' variant='contained' 
            sx={{ 
            mb: 4, height:'36px', 
            background: "radial-gradient(100% 316.05% at 100% 100%, rgba(0, 119, 255, 1) 0%, rgba(0, 119, 255, 1) 100%)",
            linearGradient:'(0deg, rgba(0, 119, 255, 1), rgba(0, 119, 255, 1))',
            color: 'rgba(255, 255, 255, 1)',
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0px',
            textAlign: 'left',
            width: 'Fixed (400px)',
            borderRadius: '6px',
            border: '0.5px',
            gap: '10px',
            border: '0.5px solid', 
            borderColor:'rgba(75, 70, 92, 1)',
            padding: '12px, 28px, 12px, 28px',                                                 
            }}>
            <img alt='vk' src={`/images/pages/vk.png`}/>
              Войти через Вконтакте
            </Button>

            <Button fullWidth type='submit' variant='contained' 
            sx={{ 
            mb: 4, height:'36px', 
            background: "radial-gradient(100% 316.05% at 100% 100%, rgba(255, 221, 45, 1) 0%, rgba(255, 221, 45, 1) 100%)",
            linearGradient:'(0deg, rgba(255, 221, 45, 1), rgba(255, 221, 45, 1))',
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0px',
            textAlign: 'left',
            width: 'Fixed (400px)',
            borderRadius: '6px',
            border: '0.5px',
            gap: '10px',
            border: '0.5px solid', 
            borderColor:'rgba(75, 70, 92, 1)',
            padding: '17px, 32px, 17px, 32px',                                                 
            }}>
            <img alt='tinkoff' src={`/images/pages/tinkoff.png`}/>
              Войти с Тинькофф
            </Button>
          </Box>

          <Box>
            <Button fullWidth type='submit' variant='contained' 
              sx={{ 
              mb: 4, height:'48px', 
              background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
              color: 'rgba(255, 255, 255, 1)',
              fontFamily: 'Helvetica Neue',
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
                Продолжить
            </Button>
          </Box>

        </Box>
      </Box>
    </RightWrapper>
  </Box>
)

// ЭКРАН 2 И 3 (с ошибкой для пароля)

// return (
//   <Box className='content-right' sx={{ backgroundColor: 'background.paper'}}>
//   {!hidden ? (
//     <Box
//       sx={{
//         flex: 1,
//         display: 'flex',
//         position: 'relative',
//         alignItems: 'center',
//         maxWidth: '694px',
//         justifyContent: 'center',
//         backgroundColor: "background.paper",
//         borderRadius:'6px',
//         margin: theme => theme.spacing(8, 0, 8, 8)
//       }}
//     >
//       <LoginIllustration alt='Containers' src={`/images/pages/Containers.png`} />

//     </Box>
//   ) : null}
//   <RightWrapper>
//     <Box
//       sx={{
//         p: [6, 12],
//         height: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}
//     >
//       <Box sx={{ width: '100%', maxWidth: 400 }}>
        
//         <Box sx={{ my: 6 }}>
//           <Typography sx={{ 
//             color: 'rgba(0, 108, 239, 1)', 
//             fontSize: '26px',
//             fontWeight: '600',
//             lineHeight: '36px',
//             letterSpacing: '0px',
//             textAlign: 'left',
//             marginBottom: '10px'
//             }}>
//             Добро пожаловать в Daily
//           </Typography>
//           <Typography sx={{ 
//             color: 'rgba(75, 70, 92, 1)', 
//             fontFamily:'Helvetica Neue', 
//             fontWeight:'400', 
//             fontSize: '15px',             
//             lineHeight: '18px',
//             letterSpacing: '0px',
//             textAlign: 'left',
//             }}>
//               Пожалуйста, войдите в свою учетную запись.
//           </Typography>
//         </Box>
        
//         <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
//           <Box sx={{ mb: 4,
//             width: 'Fill (400px)',
//             height: 'Hug (48px)',
//             borderRadius: '8px',
//             borderColor:'rgba(219, 218, 222, 1)',
//             color:'rgba(219, 218, 222, 1)',
//             fontFamily: 'Helvetica Neue',
//             fontSize: '18px',
//             fontWeight: '400',
//             lineHeight: '22px',
//             letterSpacing: '0px',
//             textAlign: 'left',
//           }}>
//             <Controller
//               name='email'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange, onBlur } }) => (
//                 <CustomTextField
//                 fullWidth
//                 autoFocus
//                 label='Email'
//                 value={value}
//                 onBlur={onBlur}
//                 onChange={onChange}
//                 placeholder='Введите ваш e-mail'

//                 // error={Boolean(errors.email)}
//                 // helperText={ errors.email ? <CustomErrorComponentEmail/> : null}
//               />
//               )}
//             />
//             {console.log(errors)}
//           </Box>
//             <Box sx={{ mb: 1.5 }}>
//               <Controller
//                 name='password'
//                 control={control}
//                 rules={{ required: true }}
//                 render={({ field: { value, onChange, onBlur } }) => (
//                   <CustomTextField
//                     fullWidth
//                     value={value}
//                     onBlur={onBlur}
//                     label='Пароль'
//                     onChange={onChange}
//                     id='auth-login-v2-password'
//                     error={Boolean(errors.password)}
//                     helperText={ errors.password ? <CustomErrorComponentPassword/> : null}
//                     type={showPassword ? 'text' : 'password'}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position='end'>
//                           <IconButton
//                             edge='end'
//                             onMouseDown={e => e.preventDefault()}
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             <Icon fontSize='1.25rem' color='rgba(234, 84, 85, 1)' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
//                           </IconButton>
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                 )}
//               />
//             </Box>
//             <Box
//               sx={{
//                 mb: 1.75,
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 alignItems: 'center',
//                 justifyContent: 'space-between'
//               }}
//             >
//             </Box>
            
//             <Button fullWidth type='submit' variant='contained' 
//             sx={{ mb: 4, height:'48px', marginTop:'45px', 
//             background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
//             color: 'rgba(255, 255, 255, 1)' }}>
//               Продолжить
//             </Button>
//             <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
//               <Typography sx={{ color: 'var(--brand-bright-blue, #006CEF);', mr: 2 , fontWeight:'400', fontSize:'15px'}}>Забыли пароль?</Typography>
//             </Box>
//           </form>
//         </Box>
//       </Box>
//     </RightWrapper>
//   </Box>
// )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
