import profile from '../assets/profile.jpg'
import { Icon } from '@iconify/react'

const BlogItem = () => {
    return (
        <div className="flex flex-col gap-4 lg:w-2/3 mb-4">
            <div className='flex items-center gap-2'>
                <img src={profile} alt="random" className='w-10 h-10 rounded-lg' />
                <span className='font-semibold'>John Doe</span>
                <span>-</span>
                <span className='text-sm text-gray-500'>Dec 21, 2023</span>
            </div>
            <div className='flex flex-col'>
                <div className="grid grid-cols-12 w-full justify-between text-left gap-4">
                    <div className='col-span-8 flex flex-col space-y-4'>
                        <h1 className='text-lg font-bold '>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className='text-sm text-gray-500 hidden sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum....<a href="" className='text-gray-500'>read more</a></p>
                    </div>
                    <img src="https://source.unsplash.com/random/800x600" alt="random" className='col-span-4 w-full h-full lg:h-42 lg:w-48'/>
                </div>
                <div className='flex justify-between mt-2 md:w-2/3'>
                    <div className="flex gap-2 items-center">
                        <span className='bg-stone-100 p-2 rounded-lg font-sm'>React</span>
                        <span className='bg-stone-100 p-2 rounded-lg'>Vue</span>
                        <span className=''>8 min Read</span>
                    </div>
                    <div className='flex'>
                        <Icon icon="ei:minus" className="text-3xl" />
                        <Icon icon="majesticons:more-menu" className="text-3xl" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogItem