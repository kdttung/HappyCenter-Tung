import React from 'react'

const Courses = () => {
    return (
        <div>
            {[...Array(10)].map((item, key) => (
                    <section className="pt-8 px-80 m-auto">
                        <div className=" pb-6  p-7 flex shadow-xl border rounded-2xl w-full py-2 px-4 text-gray-700  focus:outline-none focus:shadow-outline">
                            <div className=''>
                                <img className=" h-64 mr-24  rounded-xl " src=".\assets\images\ahihi.jpg" />
                                <div className='pt-4 grid space-x-4 grid-flow-col auto-cols-max'>
                                    <button>
                                        <img className="h-8 " src=".\assets\images\muiten.png" />
                                    </button>
                                    <img className="h-12 cursor-pointer" src=".\assets\images\ahihi.jpg" />
                                    <img className="h-12 cursor-pointer" src=".\assets\images\ahihi.jpg" />
                                    <img className="h-12 cursor-pointer" src=".\assets\images\ahihi.jpg" />

                                    <button>
                                        <img className="h-8" src=".\assets\images\muiten1.png" />
                                    </button>
                                </div>
                            </div>

                            <div className="w-8/12 ml-5 ">
                                <div className='flex space-x-2'>
                                    <p className='text-blue-900 text-xl font-bold'> (4/5) </p>
                                    <p className='text-sm p-2 px-0 text-blue-800'> 100k lượt đánh giá</p>
                                </div>
                                <div className='pb-1'>
                                    <h1 className='text-red-700 font-bold text-xl pb-2'> Khóa học: Tiếng Nhật Cơ Bản</h1>
                                    <h2 className='text-blue-900 font-medium  '> Trung tâm: Paracel Project Education</h2>
                                </div>
                                <ul className="pt-4 space-y-2">
                                    <li className='text-blue-900 text-sm'>• Cam kết thành thạo giao tiếp sau khóa học</li>
                                    <li className='text-blue-900 text-sm'>• 100% Giáo viên nước ngoài</li>
                                    <li className='text-blue-900 text-sm'>• Học phí: 4,000.000 VNĐ</li>
                                    <li className='text-blue-900 text-sm'>• Thời gian: 4 tháng</li>
                                    <li className='text-blue-900 text-sm'>• Hình thức học: offline</li>
                                </ul>
                                <div className='pt-8 flex justify-between'>
                                    <button className='bg-yellow-200 rounded-xl text-blue-900 h-9 p-4 flex items-center'>
                                        Đăng Ký
                            </button>
                                    <button>
                                        <img className="h-8 " src=".\assets\images\heart.png" />
                                    </button>
                                </div>

                            </div>

                        </div>
                    </section>

                ))}
        </div>
    )
}

export default Courses
