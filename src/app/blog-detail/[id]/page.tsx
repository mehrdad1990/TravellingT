import BlogDetail from '@/components/template/blog/BlogDetail'
import React from 'react'

function page({params}:any) {

  return (
   <BlogDetail id={params.id}/>
  )
}

export default page
