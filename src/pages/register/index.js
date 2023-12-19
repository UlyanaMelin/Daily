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
import MenuItem from '@mui/material/MenuItem'
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
import { Container, display, height, width } from '@mui/system'
import Layout from 'src/@core/layouts/Layout'


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

  // ЭКРАН 1
  return(
    <Box sx={{
      backgroundColor: 'background.paper',
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'center',
      height:'100vh'
    }}>
         
      <Container  sx={{ 
        mt: '26px' , 
        backgroundColor: 'background.paper',
        maxWidth:'85%',
        display:'flex',
        flexDirection:'column'
      }}>

        <Box sx={{ 
          backgroundColor: 'white',
          display:'flex',
          mb:'46px',
          alignItems:'center',
          justifyContent: 'space-between',
          maxHeight:'40px',
        }}>
          <Grid  sx={{display:'flex', alignItems:'center',  justifyContent: 'space-between', width: '100%', mr:'24px'}}>
            <Box sx={{
              display:'flex',
              alignItems:'center',
            }}>
              <Box sx={{
                marginRight:'16px',
                height:'40px'
              }}>
                <img alt='home' src={`/images/pages/home-hover.svg`} />
              </Box>  

              <Box sx={{
                display:'flex',
                flexDirection:'column',
              }}>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '21px',
                  textAlign: 'left',
                  }}>
                    Учетная запись
                </Typography>
                <Typography sx={{ 
                  color: '#4B465C', 
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  textAlign: 'left',
                  opacity:'0,9'
                  }}>
                    Детали аккаунта
                </Typography>
              </Box>
            </Box>
            <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
            </Box>
          </Grid>
          <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
            <Box sx={{
              display:'flex',
              alignItems:'center',
            }}>
              <Box sx={{
                marginRight:'16px',
                height:'40px'
              }}>
                <img alt='home' src={`/images/pages/user.svg`} />
              </Box>  
              <Box sx={{
                display:'flex',
                flexDirection:'column',
              }}>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '21px',
                  textAlign: 'left',
                  }}>
                    Персонализация
                </Typography>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  textAlign: 'left',
                  opacity:'0,9'
                  }}>
                    Введите информацию
                </Typography>
              </Box>
            </Box>
            <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
            </Box>
          </Grid>
          <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
            <Box sx={{
              display:'flex',
              alignItems:'center',
            }}>
              <Box sx={{
                marginRight:'16px',
                height:'40px'
              }}>
                <img alt='home' src={`/images/pages/users.svg`} />
              </Box>  
              <Box sx={{
                display:'flex',
                flexDirection:'column',
              }}>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '21px',
                  textAlign: 'left',
                  }}>
                    Сотрудники
                </Typography>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  textAlign: 'left',
                  opacity:'0,9'
                  }}>
                    Информация о сотрудниках
                </Typography>
              </Box>
            </Box>
            <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
            </Box>
          </Grid>
          <Grid sx={{display:'flex', minWidth:'210px'}}>
            <Box sx={{
              display:'flex',
              alignItems:'center',
            }}>
              <Box sx={{
                marginRight:'16px',
                height:'40px'
              }}>
                <img alt='home' src={`/images/pages/money.svg`} />
              </Box>  
              <Box sx={{
                display:'flex',
                flexDirection:'column',
              }}>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '21px',
                  textAlign: 'left',
                  opacity:'0.'
                  }}>
                    Конструктор тарифа
                </Typography>
                <Typography sx={{ 
                  color: 'rgba(75, 70, 92, 1)', 
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  textAlign: 'left',
                  }}>
                    Настройка опций
                </Typography>
              </Box>
            </Box> 
          </Grid>    
        </Box>
        
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
              <CustomTextField fullWidth label='Имя пользователя' placeholder='Введите username' />
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
                      <Icon 
                        fontSize='1.25rem' 
                        color={values.showPassword ? 'rgba(234, 84, 85, 1)' : 'rgba(75, 70, 92, 1)'}
                        icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
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
                      <Icon 
                        fontSize='1.25rem' 
                        color={values.showConfirmPassword ? 'rgba(234, 84, 85, 1)' : 'rgba(75, 70, 92, 1)'}
                        icon={values.showConfirmPassword ? 'tabler:eye' : 'tabler:eye-off'} />
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
              }}>
              <Button variant='contained' onClick={handleNext} sx={{ 
                mb: 1, height:'48px', 
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
              </Button>
            </Box>
          </Grid>
        </Grid>
      
      </Container>

    </Box>
  )

  // ЭКРАН 2
  // return(
  //   <Box sx={{
  //     backgroundColor: 'background.paper',
  //     display:'flex',
  //     alignItems:'center',
  //     flexDirection:'column',
  //     justifyContent:'center',
  //     height:'100vh'
  //   }}>
         
  //     <Container  sx={{ 
  //       mt: '26px' , 
  //       backgroundColor: 'background.paper',
  //       maxWidth:'85%',
  //       display:'flex',
  //       flexDirection:'column'
  //     }}>
      
  //       <Box sx={{ 
  //         backgroundColor: 'white',
  //         display:'flex',
  //         mb:'46px',
  //         alignItems:'center',
  //         justifyContent: 'space-between',
  //         maxHeight:'40px',
  //       }}>
  //         <Grid  sx={{display:'flex', alignItems:'center',  justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/home.svg`} />
  //             </Box>  

  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Учетная запись
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: '#4B465C', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
                    
                  
  //                 }}>
  //                   Детали аккаунта
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/user-hover.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Персонализация
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Введите информацию
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/users.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Сотрудники
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Информация о сотрудниках
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', minWidth:'210px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/money.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Конструктор тарифа
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Настройка опций
  //               </Typography>
  //             </Box>
  //           </Box> 
  //         </Grid>    
  //       </Box>
          
  //       <Box sx={{
  //         mt: '20px',
  //       }} >
  //         <Typography variant='h3' sx={{
  //           mb: '20px',
  //           color:'rgba(0, 108, 239, 1)',
  //           fontSize: '26px',
  //           fontWeight: '600',
  //           lineHeight: '36px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           fontStyle: 'normal',
  //           font:'Helvetica Neue',
  //           }}>
  //           Выберите тип организации
  //         </Typography>
  //         <Typography sx={{ 
  //           color: 'rgba(75, 70, 92, 1)', 
  //           mb: '26px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Введите данные своего аккаунта
  //         </Typography>
  //       </Box>

  //       <Grid container spacing={5} sx={{
  //           mb: '26px',
  //       }} >
  //         <Grid item xs={12} sm={6} >
  //           <Button fullWidth sx={{
  //             borderRadius:'6px',
  //             border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //             color:"rgba(255, 255, 255, 1)",
  //             background:'radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #006CEF 100%)',
  //             padding:'7px, 14px, 7px, 14px',
  //             justifyContent:'flex-start',
  //             gap:'12px',
  //             height:'38px',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '24px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //           }}>
  //             Физическое лицо
  //           </Button>
  //         </Grid>
          
  //         <Grid item xs={12} sm={6} >
  //           <Button fullWidth sx={{
  //             borderRadius:'6px',
  //             color:"#006CEF",
  //             border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //             background: 'var(--brand-white, #FFF)',
  //             padding:'7px, 14px, 7px, 14px',
  //             justifyContent:'flex-start',
  //             gap:'12px',
  //             height:'38px',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '24px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //           }}>
  //             Юридическое лицо
  //           </Button>
  //         </Grid>
  //       </Grid>
        
  //       <Box >
  //         <Typography variant='h3' sx={{
  //           mb: '20px',
  //           color:'rgba(0, 108, 239, 1)',
  //           fontSize: '26px',
  //           fontWeight: '600',
  //           lineHeight: '36px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           fontStyle: 'normal',
  //           font:'Helvetica Neue',
  //           }}>
  //           Персональная информация
  //         </Typography>
  //         <Typography sx={{ 
  //           color: 'rgba(75, 70, 92, 1)', 
  //           mb: '26px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Введите данные физического лица
  //         </Typography>
  //       </Box>

  //       <Grid container spacing={5} >
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //             <CustomTextField fullWidth label='Телефон' placeholder='+7' />
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sm={6} >
  //           <FormControl fullWidth>
  //             <CustomTextField fullWidth label='E-mail' placeholder='mail@mail.com' />
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //           <CustomTextField select fullWidth  label='Страна' defaultValue ='Выберите страну' SelectProps={{ displayEmpty: true }}>
  //             <MenuItem value='Выберите страну'>Выберите страну</MenuItem>
  //             <MenuItem value='Россия'>Россия</MenuItem>
  //             <MenuItem value='Беларусь'>Беларусь</MenuItem>
  //             <MenuItem value='Казахстан'>Казахстан</MenuItem>
  //             <MenuItem value='Узбекистан'>Узбекистан</MenuItem>
  //             <MenuItem value='Таджикистан'>Таджикистан</MenuItem>
  //           </CustomTextField>
  //           </FormControl>
  //           <FormControl fullWidth>
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //           <CustomTextField select fullWidth  label='Город' defaultValue ='Выберите город' SelectProps={{ displayEmpty: true }}>
  //             <MenuItem value='Выберите город'>Выберите город</MenuItem>
  //             <MenuItem value='Пенза'>Пенза</MenuItem>
  //             <MenuItem value='Воронеж'>Воронеж</MenuItem>
  //             <MenuItem value='Саратов'>Саратов</MenuItem>
  //             <MenuItem value='Ульяновск'>Ульяновск</MenuItem>
  //             <MenuItem value='Самара'>Самара</MenuItem>
  //           </CustomTextField>
  //           </FormControl>
  //           <FormControl fullWidth>
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
  //           <Box sx={{ 
  //             display: 'flex', 
  //             justifyContent: 'space-between' 
  //             }}>
  //             <Button variant='tonal' sx={{ 
  //               mb: 1, height:'48px', 
  //               color:'#4B465C',
  //               background:'rgba(75, 70, 92, 0.06))',
  //               fontSize: '17px',
  //               fontWeight: '600',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               borderRadius: '8px',
  //               background: 'var(--brand-bg-grey-6, rgba(75, 70, 92, 0.06))',
  //               boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //             }}>
  //               Назад
  //             </Button>
  //             <Button variant='contained' onClick={handleNext} sx={{ 
  //               mb: 1, height:'48px', 
  //               background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //               color: 'rgba(255, 255, 255, 1)',
  //               fontSize: '17px',
  //               fontWeight: '500',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
  //               }}>
  //               Далее
  //             </Button>
  //           </Box>
  //         </Grid>
  //       </Grid>
      
  //     </Container>

  //   </Box>
  // )


  // ЭКРАН 3
  // return(
  //   <Box sx={{
  //     backgroundColor: 'background.paper',
  //     display:'flex',
  //     alignItems:'center',
  //     flexDirection:'column',
  //     justifyContent:'center',
  //     height:'100vh'
  //   }}>
         
  //     <Container sx={{ 
  //       mt: '26px' , 
  //       backgroundColor: 'background.paper',
  //       maxWidth:'85%',
  //       display:'flex',
  //       flexDirection:'column'
  //     }}>

  //       <Box sx={{ 
  //         backgroundColor: 'white',
  //         display:'flex',
  //         mb:'46px',
  //         alignItems:'center',
  //         justifyContent: 'space-between',
  //         maxHeight:'40px',
  //       }}>
  //         <Grid  sx={{display:'flex', alignItems:'center',  justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //           <Box sx={{
  //             marginRight:'16px',
  //             height:'40px'
  //           }}>
  //             <img alt='home' src={`/images/pages/home.svg`} />
  //           </Box>  

  //           <Box sx={{
  //             display:'flex',
  //             flexDirection:'column',
  //           }}>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '15px',
  //               fontWeight: '600',
  //               lineHeight: '21px',
  //               textAlign: 'left',
  //               }}>
  //                 Учетная запись
  //             </Typography>
  //             <Typography sx={{ 
  //               color: '#4B465C', 
  //               fontSize: '13px',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               textAlign: 'left',
  //               textEdge: 'cap',
  //               }}>
  //                 Детали аккаунта
  //             </Typography>
  //           </Box>
  //           </Box>
  //           <Box>
  //             {/* <img alt='chevron-right'  */}
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //             {/* src={`/images/pages/chevron-right.svg`} /> */}
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //           <Box sx={{
  //             marginRight:'16px',
  //             height:'40px'
  //           }}>
  //             <img alt='home' src={`/images/pages/user-hover.svg`} />
  //           </Box>  
  //           <Box sx={{
  //             display:'flex',
  //             flexDirection:'column',
  //           }}>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '15px',
  //               fontWeight: '600',
  //               lineHeight: '21px',
  //               textAlign: 'left',
  //               }}>
  //                 Персонализация
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '13px',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               textAlign: 'left',
  //               }}>
  //                 Введите информацию
  //             </Typography>
  //           </Box>
  //           </Box>
  //           <Box>
  //             {/* <img alt='chevron-right'  */}
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //             {/* src={`/images/pages/chevron-right.svg`} /> */}
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //           <Box sx={{
  //             marginRight:'16px',
  //             height:'40px'
  //           }}>
  //             <img alt='home' src={`/images/pages/users.svg`} />
  //           </Box>  
  //           <Box sx={{
  //             display:'flex',
  //             flexDirection:'column',
  //           }}>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '15px',
  //               fontWeight: '600',
  //               lineHeight: '21px',
  //               textAlign: 'left',
  //               }}>
  //                 Сотрудники
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '13px',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               textAlign: 'left',
  //               }}>
  //                 Информация о сотрудниках
  //             </Typography>
  //           </Box>
  //           </Box>
  //           <Box>
  //             {/* <img alt='chevron-right'  */}
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //             {/* src={`/images/pages/chevron-right.svg`} /> */}
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', minWidth:'210px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //           <Box sx={{
  //             marginRight:'16px',
  //             height:'40px'
  //           }}>
  //             <img alt='home' src={`/images/pages/money.svg`} />
  //           </Box>  
  //           <Box sx={{
  //             display:'flex',
  //             flexDirection:'column',
  //           }}>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '15px',
  //               fontWeight: '600',
  //               lineHeight: '21px',
  //               textAlign: 'left',
  //               }}>
  //                 Конструктор тарифа
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '13px',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               textAlign: 'left',
  //               }}>
  //                 Настройка опций
  //             </Typography>
  //           </Box>
  //           </Box> 
  //         </Grid>    
  //       </Box>
          
  //       <Box sx={{
  //           mt: '20px',
  //         }} >
  //         <Typography variant='h3' sx={{
  //           mb: '20px',
  //           color:'rgba(0, 108, 239, 1)',
  //           fontSize: '26px',
  //           fontWeight: '600',
  //           lineHeight: '36px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           fontStyle: 'normal',
  //           font:'Helvetica Neue',
  //           }}>
  //           Выберите тип организации
  //         </Typography>
  //         <Typography sx={{ 
  //           color: 'rgba(75, 70, 92, 1)', 
  //           mb: '26px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Введите данные своего аккаунта
  //         </Typography>
  //       </Box>

  //       <Grid container spacing={5} sx={{
  //           mb: '26px',
  //       }} >
  //         <Grid item xs={12} sm={6} >
  //           <Button fullWidth sx={{
  //             borderRadius:'6px',
  //             color:"#006CEF",
  //             border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //             background: 'var(--brand-white, #FFF)',
  //             padding:'7px, 14px, 7px, 14px',
  //             justifyContent:'flex-start',
  //             gap:'12px',
  //             height:'38px',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '24px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //           }}>
  //             Физическое лицо
  //           </Button>
  //         </Grid>
  //         <Grid item xs={12} sm={6} >
  //           <Button fullWidth sx={{
  //             borderRadius:'6px',
  //             border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //             color:"rgba(255, 255, 255, 1)",
  //             background:'radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #006CEF 100%)',
  //             padding:'7px, 14px, 7px, 14px',
  //             justifyContent:'flex-start',
  //             gap:'12px',
  //             height:'38px',
  //             fontSize: '15px',
  //             fontWeight: '400',
  //             lineHeight: '24px',
  //             letterSpacing: '0px',
  //             textAlign: 'left',
  //           }}>
  //             Юридическое лицо
  //           </Button>
  //         </Grid>
  //       </Grid>
        
  //       <Box >
  //         <Typography variant='h3' sx={{
  //           mb: '20px',
  //           color:'rgba(0, 108, 239, 1)',
  //           fontSize: '26px',
  //           fontWeight: '600',
  //           lineHeight: '36px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           fontStyle: 'normal',
  //           font:'Helvetica Neue',
  //           }}>
  //           Персональная информация
  //         </Typography>
  //         <Typography sx={{ 
  //           color: 'rgba(75, 70, 92, 1)', 
  //           mb: '26px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Введите данные юридического лица
  //         </Typography>
  //       </Box>

  //       <Grid container spacing={5} >
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //           <CustomTextField select fullWidth  label='Название организации' defaultValue ='ООО “Индекском”' SelectProps={{ displayEmpty: true }}>
  //             <MenuItem value='ООО “Индекском”'>ООО “Индекском”</MenuItem>
  //             <MenuItem value='а'>ООО “Индекском”</MenuItem>
  //             <MenuItem value='б'>ООО “Индекском”</MenuItem>
  //             <MenuItem value='в'>ООО “Индекском”</MenuItem>
  //             <MenuItem value='г'>ООО “Индекском”</MenuItem>
  //             <MenuItem value='д'>ООО “Индекском”</MenuItem>
  //           </CustomTextField>
  //           </FormControl>
  //           <FormControl fullWidth>
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //           <CustomTextField select fullWidth  label='Направление деятельности' defaultValue ='Выберите деятельность организации' SelectProps={{ displayEmpty: true }}>
  //             <MenuItem value='Выберите деятельность организации'>Выберите деятельность организации</MenuItem>
  //             <MenuItem value='a'>Производство товаров</MenuItem>
  //             <MenuItem value='б'>Производство товаров</MenuItem>
  //             <MenuItem value='в'>Производство товаров</MenuItem>
  //             <MenuItem value='г'>Производство товаров</MenuItem>
  //             <MenuItem value='д'>Производство товаров</MenuItem>
  //           </CustomTextField>
  //           </FormControl>
  //           <FormControl fullWidth>
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //           <CustomTextField select fullWidth  label='Страна' defaultValue ='Выберите страну' SelectProps={{ displayEmpty: true }}>
  //             <MenuItem value='Выберите страну'>Выберите страну</MenuItem>
  //             <MenuItem value='Россия'>Россия</MenuItem>
  //             <MenuItem value='Беларусь'>Беларусь</MenuItem>
  //             <MenuItem value='Казахстан'>Казахстан</MenuItem>
  //             <MenuItem value='Узбекистан'>Узбекистан</MenuItem>
  //             <MenuItem value='Таджикистан'>Таджикистан</MenuItem>
  //           </CustomTextField>
  //           </FormControl>
  //           <FormControl fullWidth>
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <FormControl fullWidth>
  //           <CustomTextField select fullWidth  label='Город' defaultValue ='Выберите город' SelectProps={{ displayEmpty: true }}>
  //             <MenuItem value='Выберите город'>Выберите город</MenuItem>
  //             <MenuItem value='Пенза'>Пенза</MenuItem>
  //             <MenuItem value='Воронеж'>Воронеж</MenuItem>
  //             <MenuItem value='Саратов'>Саратов</MenuItem>
  //             <MenuItem value='Ульяновск'>Ульяновск</MenuItem>
  //             <MenuItem value='Самара'>Самара</MenuItem>
  //           </CustomTextField>
  //           </FormControl>
  //           <FormControl fullWidth>
  //           </FormControl>
  //         </Grid>
  //         <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
  //           <Box sx={{ 
  //             display: 'flex', 
  //             justifyContent: 'space-between' 
  //             }}>
  //             <Button variant='tonal' sx={{ 
  //               mb: 1, height:'48px', 
  //               color:'#4B465C',
  //               background:'rgba(75, 70, 92, 0.06))',
  //               fontSize: '17px',
  //               fontWeight: '600',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               borderRadius: '8px',
  //               background: 'var(--brand-bg-grey-6, rgba(75, 70, 92, 0.06))',
  //               boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //             }}>
  //               Назад
  //             </Button>
  //             <Button variant='contained' onClick={handleNext} sx={{ 
  //               mb: 1, height:'48px', 
  //               background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //               color: 'rgba(255, 255, 255, 1)',
  //               fontSize: '17px',
  //               fontWeight: '500',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
  //               }}>
  //               Далее
  //             </Button>
  //           </Box>
  //         </Grid>
  //       </Grid>
      
  //     </Container>

  //   </Box>
  // )

  // ЭКРАН 4
  // return(
  //   <Box sx={{
  //     backgroundColor: 'background.paper',
  //     display:'flex',
  //     flexDirection:'column',
  //     justifyContent:'center',
  //     overflowY:'scroll',
  //     pt: '100px',
  //     height: '100vh'
  //   }}>    
  //     <Container  sx={{ 
  //       backgroundColor: 'background.paper',
  //       display:'flex',
  //       flexDirection:'column'
  //     }}> 

  //       <Box sx={{ 
  //         backgroundColor: 'white',
  //         display:'flex',
  //         mb:'46px',
  //         alignItems:'center',
  //         justifyContent: 'space-between',
  //         maxHeight:'40px',
  //       }}>
  //         <Grid  sx={{display:'flex', alignItems:'center',  justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/home.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Учетная запись
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: '#4B465C', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 textEdge: 'cap',
  //                 }}>
  //                   Детали аккаунта
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/user.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Персонализация
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Введите информацию
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/users-hover.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Сотрудники
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Информация о сотрудниках
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', minWidth:'210px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //               height:'40px'
  //             }}>
  //               <img alt='home' src={`/images/pages/money.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Конструктор тарифа
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Настройка опций
  //               </Typography>
  //             </Box>
  //           </Box> 
  //         </Grid>    
  //       </Box>

  //       <Box >
  //         <Typography variant='h3' sx={{
  //           mb: '20px',
  //           color:'rgba(0, 108, 239, 1)',
  //           fontSize: '26px',
  //           fontWeight: '600',
  //           lineHeight: '36px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           fontStyle: 'normal',
  //           font:'Helvetica Neue',
  //           }}>
  //           Информация о сотрудниках
  //         </Typography>
  //         <Typography sx={{ 
  //           color: 'rgba(75, 70, 92, 1)', 
  //           mb: '26px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Введите данные для сотрудника
  //         </Typography>
  //       </Box>
  //       <Typography sx={{ 
  //         color: 'rgba(75, 70, 92, 1)', 
  //         mb:'12px',
  //         fontSize: '15px',
  //         fontWeight: '400',
  //         lineHeight: '18px',
  //         letterSpacing: '0px',
  //         textAlign: 'left',
  //         }}>
  //         Приглашение сотрудника
  //       </Typography>
  //       <Box> 
  //         <Grid container  spacing={2} sx={{mb:'26px'}} >
  //           <Grid item xs={10} sx={{display: 'flex', flexDirection:'row'}}> 
  //             <FormControl item fullWidth>
  //               <CustomTextField fullWidth placeholder='Телефон сотрудника' />
  //             </FormControl>
  //             <Typography item sx={{
  //               color: '#4B465C',
  //               opacity: '0.5',
  //               fontSize: '13px',
  //               fontStyle: 'normal',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               margin: '12px 12px'
  //             }}>
  //               или
  //             </Typography>
  //             <FormControl fullWidth >
  //               <CustomTextField fullWidth placeholder='Email сотрудника' />
  //             </FormControl>
  //           </Grid>
  //           <Grid item xs={2}>
  //             <Button fullWidth sx={{ 
  //               mb: 1, 
  //               borderRadius: '6px',
  //               background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #006CEF 100%)",
  //               boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //               color:'rgba(255, 255, 255, 1)',
  //               }}>
  //                 + Пригласить
  //             </Button>
  //           </Grid>
  //         </Grid>
  //       </Box>
  //       <Box>
  //         <Typography sx={{ 
  //           color: 'rgba(75, 70, 92, 1)', 
  //           mb:'12px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Ссылка на приглашение
  //         </Typography>
  //         <Typography sx={{ 
  //           color: 'rgba(0, 108, 239, 1)', 
  //           mb:'12px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           https://daily.ru/invite230423042323
  //         </Typography>
  //         <Box sx={{
  //           display:'flex',
  //           flexDirection:'row'
  //         }}>
  //           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  //           <path d="M7.5 10.9993C7.99373 11.5032 8.66952 11.7872 9.375 11.7872C10.0805 11.7872 10.7563 11.5032 11.25 10.9993L14.25 7.99931C15.2855 6.96377 15.2855 5.28484 14.25 4.24931C13.2145 3.21377 11.5355 3.21377 10.5 4.24931L10.125 4.62431" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //           <path d="M10.5003 8.00077C10.0065 7.49686 9.33076 7.21289 8.62528 7.21289C7.9198 7.21289 7.24402 7.49686 6.75028 8.00077L3.75028 11.0008C2.71475 12.0363 2.71475 13.7152 3.75028 14.7508C4.78582 15.7863 6.46475 15.7863 7.50028 14.7508L7.87528 14.3758" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //           </svg>
  //         <Typography sx={{ 
  //           color: 'rgba(0, 108, 239, 1)', 
  //           mb: '26px',
  //           fontSize: '15px',
  //           fontWeight: '400',
  //           lineHeight: '18px',
  //           letterSpacing: '0px',
  //           textAlign: 'left',
  //           }}>
  //           Скопировать ссылку
  //         </Typography>
  //         </Box>        
  //       </Box>
  //       <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
  //         <Box sx={{display:'flex',
  //             justifyContent:'space-between'}}>
  //           <Box>
  //             <Button variant='tonal' sx={{ 
  //               mb: 1, height:'48px', 
  //               color:'#4B465C',
  //               background:'rgba(75, 70, 92, 0.06))',
  //               fontSize: '17px',
  //               fontWeight: '600',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               borderRadius: '8px',
  //               background: 'var(--brand-bg-grey-6, rgba(75, 70, 92, 0.06))',
  //               boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //             }}>
  //               Назад
  //             </Button>
  //           </Box>
  //           <Box sx={{ 
  //           }}>
  //             <Button variant='tonal' sx={{ 
  //               mb: 1, height:'48px', 
  //               color:'#4B465C',
  //               background:'rgba(75, 70, 92, 0.06))',
  //               fontSize: '17px',
  //               fontWeight: '600',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               borderRadius: '8px',
  //               background: 'var(--brand-bg-grey-6, rgba(75, 70, 92, 0.06))',
  //               boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //               marginRight:'24px'
  //             }}>
  //               Пропустить
  //             </Button>
  //             <Button variant='contained' onClick={handleNext} sx={{ 
  //               mb: 1, height:'48px', 
  //               background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //               color: 'rgba(255, 255, 255, 1)',
  //               fontSize: '17px',
  //               fontWeight: '500',
  //               lineHeight: '22px',
  //               letterSpacing: '0.4300000071525574px',
  //               textAlign: 'left',
  //               width: 'Hug (159px)',
  //               padding: '13px, 26px, 13px, 26px',
  //               gap: '16px',
  //               boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
  //               }}>
  //               Сохранить
  //             </Button>
  //           </Box>
  //         </Box>
  //       </Grid>     
  //     </Container>   
  //   </Box>
  // )

  // ЭКРАН 5
  // return(
  //   <Box sx={{
  //     backgroundColor: 'white',
  //     display:'flex',
  //     flexDirection:'column',
  //     justifyContent:'center',
  //   }}>       
  //     <Container sx={{ 
  //       backgroundColor: 'white',
  //       display:'flex',
  //       flexDirection:'column',
  //       height:'100%',
  //       mt:'100px'  
  //     }}> 

  //       <Box sx={{ 
  //         backgroundColor: 'white',
  //         display:'flex',
  //         mb:'46px',
  //         alignItems:'center',
  //         justifyContent: 'space-between',
  //         maxHeight:'40px',
  //       }}>
  //         <Grid  sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px', 
  //         }}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //           <Box sx={{
  //             marginRight:'16px',
  //           }}>
  //             <img alt='home' src={`/images/pages/home.svg`} />
  //           </Box>  

  //           <Box sx={{
  //             display:'flex',
  //             flexDirection:'column',
  //           }}>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '15px',
  //               fontWeight: '600',
  //               lineHeight: '21px',
  //               textAlign: 'left',
  //               }}>
  //                 Учетная запись
  //             </Typography>
  //             <Typography sx={{ 
  //               color: '#4B465C', 
  //               fontSize: '13px',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               textAlign: 'left',
  //               textEdge: 'cap',
  //               }}>
  //                 Детали аккаунта
  //             </Typography>
  //           </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //           <Box sx={{
  //             marginRight:'16px',
  //           }}>
  //             <img alt='home' src={`/images/pages/user.svg`} />
  //           </Box>  
  //           <Box sx={{
  //             display:'flex',
  //             flexDirection:'column',
  //           }}>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '15px',
  //               fontWeight: '600',
  //               lineHeight: '21px',
  //               textAlign: 'left',
  //               }}>
  //                 Персонализация
  //             </Typography>
  //             <Typography sx={{ 
  //               color: 'rgba(75, 70, 92, 1)', 
  //               fontSize: '13px',
  //               fontWeight: '400',
  //               lineHeight: '20px',
  //               textAlign: 'left',
  //               }}>
  //                 Введите информацию
  //             </Typography>
  //           </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%', mr:'24px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //             }}>
  //               <img alt='home' src={`/images/pages/users.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Сотрудники
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Информация о сотрудниках
  //               </Typography>
  //             </Box>
  //           </Box>
  //           <Box>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //             <path d="M9 6L15 12L9 18" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             <path d="M9 6L15 12L9 18" stroke="white" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //             </svg> 
  //           </Box>
  //         </Grid>
  //         <Grid sx={{display:'flex', minWidth:'210px'}}>
  //           <Box sx={{
  //             display:'flex',
  //             alignItems:'center',
  //           }}>
  //             <Box sx={{
  //               marginRight:'16px',
  //             }}>
  //               <img alt='home' src={`/images/pages/money-hover.svg`} />
  //             </Box>  
  //             <Box sx={{
  //               display:'flex',
  //               flexDirection:'column',
  //             }}>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '15px',
  //                 fontWeight: '600',
  //                 lineHeight: '21px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Конструктор тарифа
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)', 
  //                 fontSize: '13px',
  //                 fontWeight: '400',
  //                 lineHeight: '20px',
  //                 textAlign: 'left',
  //                 }}>
  //                   Настройка опций
  //               </Typography>
  //             </Box>
  //           </Box> 
  //         </Grid>    
  //       </Box>
        
  //       <Box>
  //         <Grid item Container sx={{
  //           display:'flex',
  //         }}>

  //           <Grid container xs={8} sx={{
  //             background:'white', height:'100%', 
  //             mr:'50px',
  //           }}>

  //             <Box sx={{mb:'50px'}} >
  //               <Typography variant='h3' sx={{
  //                 mb: '20px',
  //                 color:'rgba(0, 108, 239, 1)',
  //                 fontSize: '26px',
  //                 fontWeight: '600',
  //                 lineHeight: '36px',
  //                 letterSpacing: '0px',
  //                 textAlign: 'left',
  //                 fontStyle: 'normal',
  //                 font:'Helvetica Neue',
  //                 }}>
  //                 Конструктор тарифа
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'var(--brand-text-grey, #4B465C)',
  //                 leadingTrim: 'both',
  //                 textEdge: 'cap',
  //                 alignSelf: 'stretch',
  //                 fontSize: '15px',
  //                 fontStyle: 'normal',
  //                 fontWeight: '400',
  //                 lineHeight: 'normal',
  //                 }}>
  //                 Мы уже подобрали оптимальные параметры на основе анализа Вашей компании. 
  //                 Но Вы можете выбрать параметры самостоятельно:
  //               </Typography>
  //             </Box>
              
  //             <Box sx={{
  //               background:'white',
  //               display:'flex',
  //               mb:'100px',
  //               display:'flex',
  //               flexDirection:'row-reverse'

  //               // overflowY:'scroll',
  //               // maxHeight:'300px'
  //             }}>

  //             <Box sx={{
  //               background:'rgba(0, 108, 239, 1)',
  //               width:'20px',
  //               minHeight:'445px',
  //               borderRadius:'30px'
  //             }}>       
  //             </Box>
              
  //             <Box sx={{
  //               display:'flex',
  //               alignItems:'center',
  //               justifyContent: 'space-between',
  //               flexWrap:'wrap',
  //               background:'white',
  //               gap:'19px',
  //             }}>
  //               <Grid  sx={{             
  //                 display:'flex',  
  //                 padding: '20px',
  //                 flexDirection:'row',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'space-between',
  //                 gap: '-30px',
  //                 flex: '1 0 0',
  //                 width: '100%', 
  //                 mr:'24px',
  //                 borderRadius: '6px',
  //                 border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //                 minWidth:'326px',
  //                 maxWidth:'326px',
  //                 minHeight:'167px',
  //                 maxHeight:'167px'
  //                 }}>
  //                 <Box sx={{
  //                   display:'flex',
  //                   alignItems:'center',
  //                   flexDirection:'column',
  //                   gap:'8px',
  //                   alignItems:'flex-start'
  //                 }}>
  //                 <Box sx={{
  //                 }}>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
  //                     <path d="M16.1071 1.5H23.3929L28.25 6.73077H40.3929C43.0754 6.73077 45.25 9.07266 45.25 11.9615V30.2692C45.25 33.1581 43.0754 35.5 40.3929 35.5H16.1071C13.4246 35.5 11.25 33.1581 11.25 30.2692V6.73077C11.25 3.84189 13.4246 1.5 16.1071 1.5" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M35 35.3724V40.6032C35 43.4921 32.8254 45.834 30.1429 45.834H5.85714C3.17462 45.834 1 43.4921 1 40.6032V17.0648C1 14.1759 3.17462 11.834 5.85714 11.834H10.7143" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                   </svg>
  //                 </Box>  

  //                 <Box sx={{
  //                   display:'flex',
  //                   flexDirection:'column',
  //                 }}>
  //                   <Typography sx={{ 
  //                     color: 'rgba(75, 70, 92, 1)', 
  //                     fontSize: '15px',
  //                     fontWeight: '600',
  //                     lineHeight: '21px',
  //                     textAlign: 'left',
  //                     }}>
  //                       Проекты и задачи
  //                   </Typography>
  //                   <Typography sx={{ 
  //                     color: '#4B465C', 
  //                     fontSize: '13px',
  //                     fontWeight: '400',
  //                     lineHeight: '20px',
  //                     textAlign: 'left',
  //                     textEdge: 'cap',
  //                     mb:'8px'
  //                     }}>
  //                       Управляйте проектами удобно
  //                   </Typography>
  //                   <Box>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="#4B465C"/>
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="white" stroke-opacity="0.2"/>
  //                   </svg>
  //                 </Box>
  //                 </Box>
  //                 </Box>
  //                 <Box>
  //                   <Box sx={{ 
  //                     display: 'flex',
  //                     padding: '5px 10px',
  //                     alignItems: 'center',
  //                     gap: '10px',
  //                     borderRadius: '4px',
  //                     color:'rgba(40, 199, 111, 1)',
  //                     background: 'rgba(40, 199, 111, 0.16)',
  //                     fontSize: '13px',
  //                     fontStyle: 'normal',
  //                     fontWeight: '600',
  //                     lineHeight: '14px',
  //                     }}>
  //                       Бесплатно
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //               <Grid  sx={{             
  //                 display:'flex',  
  //                 padding: '20px',
  //                 flexDirection:'row',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'space-between',
  //                 gap: '-30px',
  //                 flex: '1 0 0',
  //                 width: '100%', 
  //                 mr:'24px',
  //                 borderRadius: '6px',
  //                 border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //                 minWidth:'326px',
  //                 maxWidth:'326px',
  //                 minHeight:'167px',
  //                 maxHeight:'167px'
  //                 }}>
  //                 <Box sx={{
  //                   display:'flex',
  //                   alignItems:'center',
  //                   flexDirection:'column',
  //                   gap:'8px',
  //                   alignItems:'flex-start'
  //                 }}>
  //                 <Box sx={{
  //                 }}>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="33" height="47" viewBox="0 0 33 47" fill="none">
  //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M32 1.5V45.83H5.42857C2.98274 45.83 1 43.3491 1 40.2888V7.04125C1 3.9809 2.98274 1.5 5.42857 1.5H32Z" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M32 35.3984H5.42857C2.98274 35.3984 1 37.1497 1 39.3099" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M10 12.5816H23" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                   </svg>
  //                 </Box>  

  //                 <Box sx={{
  //                   display:'flex',
  //                   flexDirection:'column',
  //                 }}>
  //                   <Typography sx={{ 
  //                     color: 'rgba(75, 70, 92, 1)', 
  //                     fontSize: '15px',
  //                     fontWeight: '600',
  //                     lineHeight: '21px',
  //                     textAlign: 'left',
  //                     }}>
  //                       База знаний
  //                   </Typography>
  //                   <Typography sx={{ 
  //                     color: '#4B465C', 
  //                     fontSize: '13px',
  //                     fontWeight: '400',
  //                     lineHeight: '20px',
  //                     textAlign: 'left',
  //                     textEdge: 'cap',
  //                     mb:'8px'
  //                     }}>
  //                       Составляйте документы с AI
  //                   </Typography>
  //                   <Box>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="#4B465C"/>
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="white" stroke-opacity="0.2"/>
  //                   </svg>
  //                 </Box>
  //                 </Box>
  //                 </Box>
  //                 <Box>
  //                   <Box sx={{ 
  //                     display: 'flex',
  //                     padding: '5px 10px',
  //                     alignItems: 'center',
  //                     gap: '10px',
  //                     borderRadius: '4px',
  //                     color:'rgba(40, 199, 111, 1)',
  //                     background: 'rgba(40, 199, 111, 0.16)',
  //                     fontSize: '13px',
  //                     fontStyle: 'normal',
  //                     fontWeight: '600',
  //                     lineHeight: '14px',
  //                     }}>
  //                       Бесплатно
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //               <Grid  sx={{             
  //                 display:'flex',  
  //                 padding: '20px',
  //                 flexDirection:'row',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'space-between',
  //                 gap: '-30px',
  //                 flex: '1 0 0',
  //                 width: '100%', 
  //                 mr:'24px',
  //                 borderRadius: '6px',
  //                 border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //                 minWidth:'326px',
  //                 maxWidth:'326px',
  //                 minHeight:'167px',
  //                 maxHeight:'167px'
  //                 }}>
  //                 <Box sx={{
  //                   display:'flex',
  //                   alignItems:'center',
  //                   flexDirection:'column',
  //                   gap:'8px',
  //                   alignItems:'flex-start'
  //                 }}>
  //                 <Box sx={{
  //                 }}>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="29" height="37" viewBox="0 0 29 37" fill="none">
  //                     <path d="M5.90909 35.834V1.83398H20.6364C24.7032 1.83398 28 5.09591 28 9.1197C28 13.1435 24.7032 16.4054 20.6364 16.4054H1" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M21 26.334H1" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                   </svg>
  //                 </Box>  

  //                 <Box sx={{
  //                   display:'flex',
  //                   flexDirection:'column',
  //                 }}>
  //                   <Typography sx={{ 
  //                     color: 'rgba(75, 70, 92, 1)', 
  //                     fontSize: '15px',
  //                     fontWeight: '600',
  //                     lineHeight: '21px',
  //                     textAlign: 'left',
  //                     }}>
  //                       Финансы
  //                   </Typography>
  //                   <Typography sx={{ 
  //                     color: '#4B465C', 
  //                     fontSize: '13px',
  //                     fontWeight: '400',
  //                     lineHeight: '20px',
  //                     textAlign: 'left',
  //                     textEdge: 'cap',
  //                     mb:'8px'
  //                     }}>
  //                       Умное управление средствами
  //                   </Typography>
  //                   <Box>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="#4B465C"/>
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="white" stroke-opacity="0.2"/>
  //                   </svg>
  //                 </Box>
  //                 </Box>
  //                 </Box>
  //                 <Box>
  //                   <Box sx={{ 
  //                     display: 'flex',
  //                     padding: '5px 10px',
  //                     alignItems: 'center',
  //                     gap: '10px',
  //                     borderRadius: '4px',
  //                     color:'rgba(40, 199, 111, 1)',
  //                     background: 'rgba(40, 199, 111, 0.16)',
  //                     fontSize: '13px',
  //                     fontStyle: 'normal',
  //                     fontWeight: '600',
  //                     lineHeight: '14px',
  //                     }}>
  //                       Бесплатно
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //               <Grid  sx={{             
  //                 display:'flex',  
  //                 padding: '20px',
  //                 flexDirection:'row',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'space-between',
  //                 gap: '-30px',
  //                 flex: '1 0 0',
  //                 width: '100%', 
  //                 mr:'24px',
  //                 borderRadius: '6px',
  //                 border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //                 minWidth:'326px',
  //                 maxWidth:'326px',
  //                 minHeight:'167px',
  //                 maxHeight:'167px'
  //                 }}>
  //                 <Box sx={{
  //                   display:'flex',
  //                   alignItems:'center',
  //                   flexDirection:'column',
  //                   gap:'8px',
  //                   alignItems:'flex-start'
  //                 }}>
  //                 <Box sx={{
  //                 }}>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
  //                     <path d="M4.25 5.08398V30.584H29.75" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <circle cx="12.7503" cy="13.5833" r="2.83333" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <ellipse cx="26.9163" cy="10.7513" rx="2.83333" ry="2.83333" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <ellipse cx="19.8333" cy="22.0833" rx="2.83333" ry="2.83333" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M14.3936 15.8789L17.7086 19.9589" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M21.375 19.7156L25.3941 13.2188" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                   </svg>
  //                 </Box>  

  //                 <Box sx={{
  //                   display:'flex',
  //                   flexDirection:'column',
  //                 }}>
  //                   <Typography sx={{ 
  //                     color: 'rgba(75, 70, 92, 1)', 
  //                     fontSize: '15px',
  //                     fontWeight: '600',
  //                     lineHeight: '21px',
  //                     textAlign: 'left',
  //                     }}>
  //                       Аналитика
  //                   </Typography>
  //                   <Typography sx={{ 
  //                     color: '#4B465C', 
  //                     fontSize: '13px',
  //                     fontWeight: '400',
  //                     lineHeight: '20px',
  //                     textAlign: 'left',
  //                     textEdge: 'cap',
  //                     mb:'8px'
  //                     }}>
  //                       Проведение глубокого анализа
  //                   </Typography>
  //                   <Box>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="#4B465C"/>
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="white" stroke-opacity="0.2"/>
  //                   </svg>
  //                 </Box>
  //                 </Box>
  //                 </Box>
  //                 <Box>
  //                   <Box sx={{ 
  //                     display: 'flex',
  //                     padding: '5px 10px',
  //                     alignItems: 'center',
  //                     gap: '10px',
  //                     borderRadius: '4px',
  //                     color:'rgba(40, 199, 111, 1)',
  //                     background: 'rgba(40, 199, 111, 0.16)',
  //                     fontSize: '13px',
  //                     fontStyle: 'normal',
  //                     fontWeight: '600',
  //                     lineHeight: '14px',
  //                     }}>
  //                       Бесплатно
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //               <Grid  sx={{             
  //                 display:'flex',  
  //                 padding: '20px',
  //                 flexDirection:'row',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'space-between',
  //                 gap: '-30px',
  //                 flex: '1 0 0',
  //                 width: '100%', 
  //                 mr:'24px',
  //                 borderRadius: '6px',
  //                 border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //                 minWidth:'326px',
  //                 maxWidth:'326px',
  //                 minHeight:'167px',
  //                 maxHeight:'167px'
  //                 }}>
  //                 <Box sx={{
  //                   display:'flex',
  //                   alignItems:'center',
  //                   flexDirection:'column',
  //                   gap:'8px',
  //                   alignItems:'flex-start'
  //                 }}>
  //                 <Box sx={{
  //                 }}>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
  //                     <circle cx="12.0417" cy="12.8757" r="1.41667" fill="#4B465C"/>
  //                     <circle cx="12.0417" cy="12.8757" r="1.41667" fill="white" fill-opacity="0.2"/>
  //                     <circle cx="12.0417" cy="12.8757" r="1.41667" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66699 10.75V16.2169C5.66699 16.9777 5.96874 17.7073 6.50708 18.2456L18.0047 29.7433C18.5427 30.2813 19.2725 30.5836 20.0334 30.5836C20.7943 30.5836 21.5241 30.2813 22.0621 29.7433L28.9102 22.8951C29.4483 22.3571 29.7506 21.6273 29.7506 20.8664C29.7506 20.1055 29.4483 19.3758 28.9102 18.8378L17.4112 7.34008C16.8734 6.80245 16.1443 6.50029 15.3839 6.5H9.91699C7.56978 6.5 5.66699 8.40279 5.66699 10.75Z" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                   </svg>
  //                 </Box>  

  //                 <Box sx={{
  //                   display:'flex',
  //                   flexDirection:'column',
  //                 }}>
  //                   <Typography sx={{ 
  //                     color: 'rgba(75, 70, 92, 1)', 
  //                     fontSize: '15px',
  //                     fontWeight: '600',
  //                     lineHeight: '21px',
  //                     textAlign: 'left',
  //                     }}>
  //                       Продажи
  //                   </Typography>
  //                   <Typography sx={{ 
  //                     color: '#4B465C', 
  //                     fontSize: '13px',
  //                     fontWeight: '400',
  //                     lineHeight: '20px',
  //                     textAlign: 'left',
  //                     textEdge: 'cap',
  //                     mb:'8px'
  //                     }}>
  //                       Продавайте больше с AI
  //                   </Typography>
  //                   <Box>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="#4B465C"/>
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="white" stroke-opacity="0.2"/>
  //                   </svg>
  //                 </Box>
  //                 </Box>
  //                 </Box>
  //                 <Box>
  //                   <Box sx={{ 
  //                     display: 'flex',
  //                     padding: '5px 10px',
  //                     alignItems: 'center',
  //                     gap: '10px',
  //                     borderRadius: '4px',
  //                     color:'rgba(40, 199, 111, 1)',
  //                     background: 'rgba(40, 199, 111, 0.16)',
  //                     fontSize: '13px',
  //                     fontStyle: 'normal',
  //                     fontWeight: '600',
  //                     lineHeight: '14px',
  //                     }}>
  //                       Бесплатно
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //               <Grid  sx={{             
  //                 display:'flex',  
  //                 padding: '20px',
  //                 flexDirection:'row',
  //                 alignItems: 'flex-start',
  //                 justifyContent: 'space-between',
  //                 gap: '-30px',
  //                 flex: '1 0 0',
  //                 width: '100%', 
  //                 mr:'24px',
  //                 borderRadius: '6px',
  //                 border: '1px solid var(--Brand-Light-Grey, #DBDADE)',
  //                 minWidth:'326px',
  //                 maxWidth:'326px',
  //                 minHeight:'167px',
  //                 maxHeight:'167px'
  //                 }}>
  //                 <Box sx={{
  //                   display:'flex',
  //                   alignItems:'center',
  //                   flexDirection:'column',
  //                   gap:'8px',
  //                   alignItems:'flex-start'
  //                 }}>
  //                 <Box sx={{
  //                 }}>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
  //                     <ellipse cx="12.7497" cy="10.7507" rx="5.66667" ry="5.66667" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M4.25 30.584V27.7507C4.25 24.621 6.78705 22.084 9.91667 22.084H15.5833C18.7129 22.084 21.25 24.621 21.25 27.7507V30.584" stroke="#006CEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M22.667 5.26758C25.1744 5.90957 26.9281 8.1689 26.9281 10.7572C26.9281 13.3454 25.1744 15.6048 22.667 16.2467" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                     <path d="M29.75 30.5844V27.751C29.7352 25.1792 27.9902 22.9398 25.5 22.2969" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //                   </svg>
  //                 </Box>  

  //                 <Box sx={{
  //                   display:'flex',
  //                   flexDirection:'column',
  //                 }}>
  //                   <Typography sx={{ 
  //                     color: 'rgba(75, 70, 92, 1)', 
  //                     fontSize: '15px',
  //                     fontWeight: '600',
  //                     lineHeight: '21px',
  //                     textAlign: 'left',
  //                     }}>
  //                       AI сотрудники
  //                   </Typography>
  //                   <Typography sx={{ 
  //                     color: '#4B465C', 
  //                     fontSize: '13px',
  //                     fontWeight: '400',
  //                     lineHeight: '20px',
  //                     textAlign: 'left',
  //                     textEdge: 'cap',
  //                     mb:'8px'
  //                     }}>
  //                       Увеличение штата без затрат
  //                   </Typography>
  //                   <Box>
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="#4B465C"/>
  //                   <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5.83398C1 3.07256 3.23858 0.833984 6 0.833984H14C16.7614 0.833984 19 3.07256 19 5.83398V13.834C19 16.5954 16.7614 18.834 14 18.834H6C3.23858 18.834 1 16.5954 1 13.834V5.83398Z" stroke="white" stroke-opacity="0.2"/>
  //                   </svg>
  //                 </Box>
  //                 </Box>
  //                 </Box>
  //                 <Box>
  //                   <Box sx={{ 
  //                     display: 'flex',
  //                     padding: '5px 10px',
  //                     alignItems: 'center',
  //                     gap: '10px',
  //                     borderRadius: '4px',
  //                     color:'rgba(255, 255, 255, 1)',
  //                     background: 'rgba(0, 108, 239, 1)',
  //                     fontSize: '13px',
  //                     fontStyle: 'normal',
  //                     fontWeight: '600',
  //                     lineHeight: '13px',
  //                     }}>
  //                       399 рублей
  //                   </Box>
  //                 </Box>
  //               </Grid>
  //             </Box>
  //             </Box>

  //           </Grid>

  //           <Grid container xs={4} sx={{background:'white', height:'50%'}}>

  //             <Box sx={{mb:'26px'}} >
  //               <Typography variant='h3' sx={{
  //                 mb: '20px',
  //                 color:'rgba(0, 108, 239, 1)',
  //                 fontSize: '26px',
  //                 fontWeight: '600',
  //                 lineHeight: '36px',
  //                 letterSpacing: '0px',
  //                 textAlign: 'left',
  //                 fontStyle: 'normal',
  //                 font:'Helvetica Neue',
  //                 }}>
  //                 Итоговая цена
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'var(--brand-text-grey, #4B465C)',
  //                 leadingTrim: 'both',
  //                 textEdge: 'cap',
  //                 alignSelf: 'stretch',
  //                 fontSize: '15px',
  //                 fontStyle: 'normal',
  //                 fontWeight: '400',
  //                 lineHeight: 'normal',
  //                 }}>
  //                 Подобрали тариф специально для тебя
  //               </Typography>
  //             </Box>

  //             <Box sx={{mb:'26px', display:'flex', gap:'6px'}}>
  //               <Box sx={{ 
  //                 borderRadius: '6px',
  //                 background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #006CEF 100%)",
  //                 boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //                 color:'rgba(255, 255, 255, 1)',
  //                 width:'38px',
  //                 display:'flex',
  //                 alignItems:'center',
  //                 justifyContent:'center'
  //               }}>
  //                   -
  //               </Box>
  //               <Button sx={{ 
  //                 borderRadius: '6px',
  //                 background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #006CEF 100%)",
  //                 boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //                 color:'rgba(255, 255, 255, 1)',
  //                 gap:'12px',
  //                 width:'179px'
  //               }}>
  //                   5 сотрудников 
  //               </Button>
  //               <Box sx={{ 
  //                 borderRadius: '6px',
  //                 background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #006CEF 100%)",
  //                 boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //                 color:'rgba(255, 255, 255, 1)',
  //                 width:'38px',
  //                 display:'flex',
  //                 alignItems:'center',
  //                 justifyContent:'center'
  //               }}>
  //                   +
  //               </Box>
  //             </Box>

  //             <Box sx={{}} >
  //               <Typography variant='h3' sx={{
  //                 color: 'var(--grey-white-10, #4B465C)',
  //                 fontSize: '22px',
  //                 fontWeight: '600',
  //                 lineHeight: '36px',
  //                 letterSpacing: '0px',
  //                 textAlign: 'left',
  //                 fontStyle: 'normal',
  //                 font:'Helvetica Neue',
  //                 }}>
  //                 Оптимальный
  //               </Typography>
  //               <Typography sx={{ 
  //                 color: 'rgba(75, 70, 92, 1)',
  //                 opacity:'0.9',
  //                 fontSize: '15px',
  //                 fontWeight: '400',
  //                 lineHeight: '22px',
  //                 }}>
  //                 Простой старт для начинающих предпринимателей
  //               </Typography>
  //               <Box sx={{
  //                 display:'flex',
  //                 flexDirection:'row',
  //                 alignItems:'flex-end',
  //                 mb:'26px'
  //               }}>
  //                 <Box sx={{
  //                 display: 'flex',
  //                 alignItems: 'center',
  //                 gap: '2px',
  //                 }}>
  //                   <Typography sx={{
  //                     color:'rgba(0, 108, 239, 1)',
  //                     fontSize: '15px',
  //                     fontWeight: '400',
  //                     lineHeight: '22px',
  //                   }}>
  //                     ₽
  //                   </Typography>
  //                   <Typography sx={{
  //                     color:'rgba(0, 108, 239, 1)',
  //                     fontSize: '32px',
  //                     fontWeight: '500',
  //                     lineHeight: '44px',
  //                   }}>
  //                     495
  //                   </Typography>
  //                 </Box>  
  //                 <Box>
  //                   <Typography>
  //                   /месяц
  //                   </Typography>
  //                 </Box>
  //               </Box>
  //               <Box>
  //               <Button fullWidth variant='contained' onClick={handleNext} sx={{ 
  //                 mb: '26px', height:'48px', 
  //                 background: "radial-gradient(100% 316.05% at 100% 100%, #006CEF 0%, #080E58 100%)",
  //                 color: 'rgba(255, 255, 255, 1)',
  //                 fontSize: '17px',
  //                 fontWeight: '500',
  //                 lineHeight: '22px',
  //                 letterSpacing: '0.4300000071525574px',
  //                 textAlign: 'left',
  //                 padding: '13px, 26px, 13px, 26px',
  //                 gap: '16px',
  //                 boxShadow:'0px 2px 4px 0px rgba(165, 163, 174, 0.3)',
  //                 }}>
  //                   Оплатить
  //               </Button>
  //               <Button fullWidth variant='tonal' sx={{ 
  //                   mb: 1, height:'48px', 
  //                   color:'#4B465C',
  //                   background:'rgba(75, 70, 92, 0.06))',
  //                   fontSize: '17px',
  //                   fontWeight: '600',
  //                   lineHeight: '22px',
  //                   letterSpacing: '0.4300000071525574px',
  //                   textAlign: 'left',
  //                   width: 'Hug (159px)',
  //                   padding: '13px, 26px, 13px, 26px',
  //                   gap: '16px',
  //                   borderRadius: '8px',
  //                   background: 'var(--brand-bg-grey-6, rgba(75, 70, 92, 0.06))',
  //                   boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  //                 }}>
  //                   Выбрать и оплатить позже
  //               </Button>
  //               </Box>
  //             </Box>

  //           </Grid>
        
  //         </Grid>
  //       </Box>
                 
  //     </Container>   
  //   </Box>
  // )
}

 
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
