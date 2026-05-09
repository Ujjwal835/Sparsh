// 'use client'

// import { useState } from 'react'

// export default function ProductForm({ categories }: any) {
//   const [loading, setLoading] = useState(false)

//   async function handleSubmit(e: any) {
//     e.preventDefault()

//     setLoading(true)

//     const formData = new FormData(e.target)

//     const payload = {
//       name: formData.get('name'),
//       description: formData.get('description'),
//       brand: formData.get('brand'),
//       gender: 'women',
//       categoryId: formData.get('categoryId'),
//       images: [],
//     }

//     await fetch('/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     })

//     setLoading(false)
//   }

//   return (
//     <form onSubmit={handleSubmit} className='space-y-4'>
//       <input
//         name='name'
//         placeholder='Product Name'
//         className='border p-2 w-full'
//       />

//       <textarea
//         name='description'
//         placeholder='Description'
//         className='border p-2 w-full'
//       />

//       <input
//         name='brand'
//         placeholder='Brand'
//         className='border p-2 w-full'
//       />

//       <select
//         name='categoryId'
//         className='border p-2 w-full'
//       >
//         {categories.map((category: any) => (
// }
