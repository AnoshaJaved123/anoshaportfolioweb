import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="text-white body-font bg-purple-700">
            <div className="container mx-3 flex flex-wrap p-3 flex-col md:flex-row items-center">
              
                
                    <div className="ml-1 text-xl">Anosha Javed Sheikh</div>
              
                <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'}><a className="mr-5 text-white font-semibold hover:text-gray-600">HOME</a></Link>
                    <Link href={'/skill'}><a className="mr-5 text-white font-semibold hover:text-gray-600">SKILLS</a></Link>
                    <Link href={'/blogs'}><a className="mr-5 text-white font-semibold hover:text-gray-600">BLOGS</a></Link>
                    <Link href={'/projects'}><a className="mr-5 text-white font-semibold hover:text-gray-600">PROJECTS</a></Link>
                </div>
             
            </div>
        </div>

    )
}

export default Navbar


