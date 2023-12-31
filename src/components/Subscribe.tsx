
const Subscribe = () =>{
    return(
        <div className="flex flex-col gap-16 font-bold text-white bg-smrtBlue">
            <div className="w-[810px] h-auto text-center m-auto mt-16">
               
                <p>НЕ ПРОПУСТИ НОВОСТЕЙ!</p>
                <h5 className="font-semibold text-5xl">Подписывайся на новостную рассылку академии Smart Prep</h5>
            </div>
            <div className="m-auto flex gap-12 mb-16 ">
                <input type="text" placeholder="Email" className="border-[1px] border-[#C0C0C0] w-[420px] h-14 rounded-md p-6 text-sm"/>
                <button className="w-72 h-14 bg-subscribeButton text-xl text-white text-center rounded-md hover:bg-gray-700 ease-in-out">Подписаться</button>
            </div>
        </div>
    )
}
export default Subscribe;