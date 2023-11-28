import React, { FC, ReactNode } from 'react'
import { Layout } from 'antd'
import { MainSidebar } from './main-sidebar'
import { MainHeader } from './main-header'

const { Content } = Layout

interface MainLayoutProps {
   children?: ReactNode
   collapseSidebar?: boolean
}

export const Mainlayout: FC<MainLayoutProps> = (props) => {
   const { children, collapseSidebar } = props
   return (
      <>
         <Layout style={{ minHeight: '100vh' }}>
            <MainSidebar collapseSidebar={collapseSidebar} />
            <Layout>
               <MainHeader />
               <Content style={{ padding: '27px' }}>{children}</Content>
               {/*<MainFooter/>*/}
            </Layout>
         </Layout>
      </>
   )
}
