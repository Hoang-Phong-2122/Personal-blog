import React, { FC, ReactNode } from 'react'
import { Layout } from 'antd'
import { MainSidebar } from './main-sidebar'

const { Content } = Layout

interface MainLayoutProps {
   children?: ReactNode
   collapseSidebar?: boolean
}

export const DashBoardlayout: FC<MainLayoutProps> = (props) => {
   const { children, collapseSidebar } = props
   return (
      <>
         <Layout style={{ minHeight: '100vh' }}>
            <MainSidebar collapseSidebar={false} />
            <Layout>
               <Content>{children}</Content>
            </Layout>
            {/*<MainFooter/>*/}
         </Layout>
      </>
   )
}
