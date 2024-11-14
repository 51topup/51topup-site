import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - 机器猫',
    default: '机器猫 - 一键式会员和虚拟物品充值管理平台，闲鱼自动同步，订单管理，自动发货，自动评价，自动价格调整',
  },
  description:
    '机器猫，一键式会员和虚拟物品充值管理平台，闲鱼自动同步，订单管理，自动发货，自动评价，自动价格调整，无人值守',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
