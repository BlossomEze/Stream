import { categories } from '../Utils/constants'
import { Stack } from '@mui/material'
import '../App.css'

function Sidebar() {
  const selectedCategory ='New';

  return (
    <Stack direction='row' sx={{overflowY: 'auto', height: {sx: 'auto', md: '92%'}, flexDirection: {md:'column'}, }}>
       { categories.map((category) => (
        <button className='sidebar_btn' style={{background: category.name === selectedCategory && '#FC1503', color: '#fff'}} key={ category.name }>
            <span>{ category.icon }</span>
            <span>{ category.name }</span>
        </button>
       )) }
    </Stack>
  )
 }

export default Sidebar 