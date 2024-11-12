import { websites } from '@/lib/data'
import React from 'react'
export default function page() {
    return (
        <div>Logins
            <div className='mx-auto w-[400px] border-cyan-500 border py-2 px-4'>
                {websites.map((data) => (
                    <div key={data.name}>
                        <a href={data.url} className='font-bold text-red-500'>{data.name}</a>
                        <div>{data.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
