import {Outlet} from 'react-router'
import {Side} from '../components/Side'
import { SidebarProvider } from '@/components/ui/sidebar'
const Dashboard = () => {
  return (
    <SidebarProvider>

        <div className='flex flex-row w-full '>
            <Side />
            <Outlet />
        </div>
    </SidebarProvider>
  )
}

export default Dashboard