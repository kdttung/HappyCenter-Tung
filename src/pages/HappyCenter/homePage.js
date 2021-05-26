import React from 'react'
import Courses from '../../components/Courses'
const home = () => {
    return (
        <>
            <div className=" text-blue-900 font-bold text-lg flex justify-between p-9">
                <div className='flex space-x-2'>
                    <img className=" h-6 cursor-pointer flex items-center " src=".\assets\images\happy.png" />
                    <p className='cursor-pointer flex-start'>HAPPY CENTER</p>
                </div>
                <div className="flex space-x-2">
                    <a href='/' className='hover:text-gray-700'>
                        About
                    </a>
                    <a href='/' className='hover:text-gray-700'>Login</a>
                    <img className=" h-8 cursor-pointer  " src=".\assets\images\signin.png" />
                </div>
            </div>
            <div className='w-1/2 m-auto text-center '>
                <h1 className="text center text-blue-900 text-5xl font-bold ">HAPPY CENTER</h1>
                <div className=" h-px bg-gray-200 mt-4 relative text-center ">
                    <span className="absolute absolute-x absolute-y bg-white px-3 mt-px text-sm text-gray-400">Khóa học hôm nay tương lai ngày mai</span>
                </div>

            </div>
            <div>
                <div className="pt-8 px-80 ">
                    <input class="shadow h-12 border rounded-2xl rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Tìm kiếm khóa học ..."
                    />

                    <div className=" flex justify-between font-bold text-blue-900 py-4 ">

                        <div className='flex items-center'>
                            <a href='/' className='hover:text-blue-900'>
                                Hình thức
                        </a>
                            <button className=''>
                                <img className="h-5 " src=".\assets\images\xuong.png" />
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <a href='/' className='hover:text-blue-900'>
                                Địa điểm
                         </a>
                            <button className=''>
                                <img className="h-5 " src=".\assets\images\xuong.png" />
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <a href='/' className='hover:text-blue-900'>
                                Khóa học
                         </a>
                            <button className=''>
                                <img className="h-5 " src=".\assets\images\xuong.png" />
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <a href='/' className='hover:text-blue-900'>
                                Thời gian
                         </a>
                            <button className=''>
                                <img className="h-5 " src=".\assets\images\xuong.png" />
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <a href='/' className='hover:text-blue-900'>
                                Học phí
                         </a>
                            <button className=''>
                                <img className="h-5 " src=".\assets\images\xuong.png" />
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <a href='/' className='hover:text-blue-900'>
                                Trung tâm
                         </a>
                            <button className=''>
                                <img className="h-5" src=".\assets\images\xuong.png" />
                            </button>
                        </div>
                    </div>

                </div>
                <Courses />
            </div>
        </>
    )
}

export default home
