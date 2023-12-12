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

  // РЕГИСТРАЦИЯ ЭКРАН 1

  return (
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
              <img alt='home' src={`/images/pages/home-hover.png`} />
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
                textEdge: 'cap',
                }}>
                  Детали аккаунта
              </Typography>
            </Box>
          </Box>
            <Box>
              <img alt='chevron-right'  src={`/images/pages/chevron-right.png`} />
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
              <img alt='home' src={`/images/pages/user.png`} />
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
                }}>
                  Введите информацию
              </Typography>
            </Box>
            </Box>
            <Box sx={{
            }}>
              <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
              <img alt='home' src={`/images/pages/users.png`} />
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
                }}>
                  Информация о сотрудниках
              </Typography>
            </Box>
            </Box>
            <Box sx={{
            }}>
              <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
              <img alt='home' src={`/images/pages/money.png`} />
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

 // РЕГИСТРАЦИЯ ЭКРАН 2

  // return (
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
  //           <Box sx={{
  //             marginRight:'16px',
  //             height:'40px'
  //           }}>
  //             <img alt='home' src={`/images/pages/home.png`} />
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
  //             <img alt='chevron-right'  src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/user-hover.png`} />
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
  //           <Box sx={{
  //           }}>
  //             <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/users.png`} />
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
  //           <Box sx={{
  //           }}>
  //             <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/money.png`} />
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
  //       </Grid>
          
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
  //         </Grid>
        
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
  //               {/* <Icon fontSize='1.125rem' icon='tabler:arrow-right' /> */}
  //             </Button>
  //           </Box>
  //         </Grid>
          
  //       </Grid>
      
  //     </Container>

  //   </Box>
  // )

  // РЕГИСТРАЦИЯ ЭКРАН 3

  // return (
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
  //             <img alt='home' src={`/images/pages/home.png`} />
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
  //             <img alt='chevron-right'  src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/user-hover.png`} />
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
  //           <Box sx={{
  //           }}>
  //             <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/users.png`} />
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
  //           <Box sx={{
  //           }}>
  //             <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/money.png`} />
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
          
  //     <Box sx={{
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
          
  //         </Grid>
        
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

  // РЕГИСТРАЦИЯ ЭКРАН 4

  // return (
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
  //           <Box sx={{
  //             marginRight:'16px',
  //             height:'40px'
  //           }}>
  //             <img alt='home' src={`/images/pages/home.png`} />
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
  //             <img alt='chevron-right'  src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/user.png`} />
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
  //           <Box sx={{
  //           }}>
  //             <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/users-hover.png`} />
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
  //           <Box sx={{
  //           }}>
  //             <img alt='chevron-right' src={`/images/pages/chevron-right.png`} />
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
  //             <img alt='home' src={`/images/pages/money.png`} />
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
  //       <Typography sx={{ 
  //         color: 'rgba(75, 70, 92, 1)', 
  //         mb:'12px',
  //         fontSize: '15px',
  //         fontWeight: '400',
  //         lineHeight: '18px',
  //         letterSpacing: '0px',
  //         textAlign: 'left',
  //         }}>
  //         Ссылка на приглашение
  //       </Typography>
  //       <Typography sx={{ 
  //         color: 'rgba(0, 108, 239, 1)', 
  //         mb:'12px',
  //         fontSize: '15px',
  //         fontWeight: '400',
  //         lineHeight: '18px',
  //         letterSpacing: '0px',
  //         textAlign: 'left',
  //         }}>
  //         https://daily.ru/invite230423042323
  //       </Typography>
  //       <Box sx={{
  //         display:'flex',
  //         flexDirection:'row'
  //       }}>
  //       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  //       <path d="M7.5 10.9993C7.99373 11.5032 8.66952 11.7872 9.375 11.7872C10.0805 11.7872 10.7563 11.5032 11.25 10.9993L14.25 7.99931C15.2855 6.96377 15.2855 5.28484 14.25 4.24931C13.2145 3.21377 11.5355 3.21377 10.5 4.24931L10.125 4.62431" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //       <path d="M10.5003 8.00077C10.0065 7.49686 9.33076 7.21289 8.62528 7.21289C7.9198 7.21289 7.24402 7.49686 6.75028 8.00077L3.75028 11.0008C2.71475 12.0363 2.71475 13.7152 3.75028 14.7508C4.78582 15.7863 6.46475 15.7863 7.50028 14.7508L7.87528 14.3758" stroke="#006CEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //       </svg>
  //       <Typography sx={{ 
  //         color: 'rgba(0, 108, 239, 1)', 
  //         mb: '26px',
  //         fontSize: '15px',
  //         fontWeight: '400',
  //         lineHeight: '18px',
  //         letterSpacing: '0px',
  //         textAlign: 'left',
  //         }}>
  //         Скопировать ссылку
  //       </Typography>
  //       </Box>
        
      
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

}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
