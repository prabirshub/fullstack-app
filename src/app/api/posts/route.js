import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Post from '@/models/Post'

export const GET = async (request) => {
  //fetch data from mongodb

  try {
    await connect()
    const posts = await Post.find()
    return new NextResponse(posts, { status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
