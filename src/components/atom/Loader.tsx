
const Loader: React.FC = () => {
    return (
        <div className="h-full w-full  flex justify-center items-center" >
            <div className=" w-[130px] h-[130px] flex flex-col items-center justify-center bg-white rounded-xl">
                <div className="loader"></div>
                <div className="flex gap-1">
                    <span className='text-lg font-medium font-urbanist tracking-widest'>loading</span>
                    <span id="dot1" className="dot text-lg">.</span>
                    <span id="dot2" className="dot text-lg">.</span>
                    <span id="dot3" className="dot text-lg">.</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;