import { FaRegLaughBeam } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import { BsFillChatRightDotsFill } from 'react-icons/bs'

const Service = () => {
    return (
        <div id="serviceSection" className="min-h-[480px] bg-service bg-cover sm:h-[900px] h-[950px] lg:h-0">
            <div className=" container mx-auto min-h-[480px] pt-14">
                <h2 className="italic text-white text-center font-semibold capitalize text-[40px] mb-10 pt-10 leading-[1.1]">Our Fast Service</h2>
                <div className="flex flex-col lg:flex-row gap-2 -mt-4">
                    <div className=" flex flex-1 flex-col items-center text-center">
                        <div className='text-[50px] border border-1  text-white p-6 rounded-[50%]'><FaRegLaughBeam /></div>
                        <h3 className='font-black text-[26px] font-primary mt-5 mb-4 leading-[1.1] text-white'>Customer Satisfaction</h3>
                        <p className='mt-1 text-white'>Prioritize customer satisfaction with quick service without compromising quality. Enjoy hot and fresh meals sooner.</p>
                    </div>
                    <div className=" flex flex-1 flex-col items-center text-center">
                        <div className='text-[50px] border border-1  text-white p-6 rounded-[50%]'><BiTime /></div>
                        <h3 className='font-black text-[26px] font-primary mt-5 mb-4 leading-[1.1] text-white'>On-Time Delivery</h3>
                        <p className='mt-1 text-white'>We value your time and ensure timely delivery of your orders.</p>
                    </div>
                    <div className=" flex flex-1 flex-col items-center text-center">
                        <div className='text-[50px] border border-1  text-white p-6 rounded-[50%]'><BsFillChatRightDotsFill /></div>
                        <h3 className='font-black text-[26px] font-primary mt-5 mb-4 leading-[1.1] text-white'>Responsive Customer Service</h3>
                        <p className='mt-1 text-white'>Our team is ready to assist, promptly addressing your questions or special requests.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;