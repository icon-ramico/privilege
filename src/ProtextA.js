import {Outlet,Navigate} from 'react-router-dom'

const ProtextA = () => {
    const isValid = true;
  return (
     isValid ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtextA