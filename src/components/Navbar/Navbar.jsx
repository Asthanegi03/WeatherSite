import { Stack,Typography } from "@mui/material"
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const date = new Date().toDateString()
  return (
    <Stack mb={2} className={styles.navbar} direction={"row"} alignItems={"center"} justifyContent={'space-between'} >
        <img src={logo} alt="" />
        <Typography variant="body1" color={"primary.light"}>{date}</Typography>
    </Stack>
  )
}

export default Navbar