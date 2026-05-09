'use client'

import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='w-64 min-h-screen border-r p-4'>
      <div className='space-y-4'>
        <Link href='/admin/categories'>Categories</Link>

        <Link href='/admin/products'>Products</Link>

        <Link href='/admin/variants'>Variants</Link>

        <Link href='/admin/coupons'>Coupons</Link>
      </div>
    </div>
  )
}