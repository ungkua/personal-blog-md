import React from 'react'
import fs from "fs"
import Markdown from 'markdown-to-jsx'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import matter from 'gray-matter'
import getPostMetadata from '@/components/getPostMetadata'


const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export default function page(props) {
    const slug = props.params.slug;
    const post = getPostContent(slug)
    return (
        <main className='flex-grow'>
            <div className='container flex flex-col mx-auto py-10 px-6'>
                <div className='max-w-2xl'>
                    <div className='flex items-center'>
                        <ChevronLeftIcon className='w-3 h-3'/>
                        <Link href='/blog' className='text-sm hover:underline'> back </Link>
                    </div>
                    <h1 className='text-2xl font-bold pt-10'> {post.data.title} </h1>
                    <h2 className='pt-2 text-sm'>{post.data.date}</h2>
                    <div className='prose prose-stone'>
                        <Markdown>{post.content}</Markdown>
                    </div>
                </div>
            </div>
        </main>

    )
}

