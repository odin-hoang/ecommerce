type Props = {
    text: string;
};

export const GradientText = ({ text }: Props) => {
    return (
        <div className='p-10 min-h-screen flex items-center justify-center'>
            <h1 className='text-9xl font-black text-center '>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-400 sm:from-red-400 sm:to-yellow-500 sm:uppercase'>
                    {text}
                </span>
            </h1>
        </div>
    );
};
