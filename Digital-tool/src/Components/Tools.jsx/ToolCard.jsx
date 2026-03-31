import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ToolCard = ({ item, handleAddCart, carts }) => {
    const founded = carts.find(i => i.id === item.id)
    return (
        <div>
            <div className="flex items-center justify-center hover:-translate-y-3 duration-300 hover:shadow-xl">
              
                <div className="relative w-full bg-white border border-gray-100 rounded-lg p-8 shadow-sm">
                    
                    <div className={`absolute top-6 right-6 ${item.tag == 'best seller' && 'bg-[#FEF3C7] text-[#92400E]'} ${item.tag == 'popular' && 'text-[#4F39F6] bg-purple-100'}  text-md ${item.tag == 'new' && 'bg-green-100 text-green-600'} font-semibold px-4 py-1.5 rounded-full`}>
                        {item.tag}
                    </div>

                    <div className="mb-6">
                        <div className="w-14 h-14 bg-blue-100 border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
                            
                            <span className="text-2xl b">{item.icon}</span>
                        </div>
                    </div>

                    
                    <div className="space-y-3 my-4">
                        <h2 className="text-3xl font-bold text-[#0F172A]">
                            {item.name}
                        </h2>
                        <p className="text-[#64748B] text-lg leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                 
                    <div className="flex items-baseline my-4">
                        <span className="text-2xl font-bold text-[#0F172A]">{item.price}/</span>
                        <span className="text-[#64748B] text-xl ml-1">{item.period}</span>
                    </div>

                 
                    {
                        item.features.map(i =>
                            <div className='flex gap-2 textPrimary'>
                                <p className='flex gap-2 textPrimary items-center text-[#64748B]'> <FaCheck className='text-green-500' />{i}</p>
                            </div>)
                    }
                  
                    <button
                        onClick={() => handleAddCart(item)}
                        className="w-full buttonPrimary text-white font-bold py-5  text-xl  duration-200 my-4 active:scale-100! ">
                        {
                            founded ? 'Added As cart item' : 'Buy Now'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;