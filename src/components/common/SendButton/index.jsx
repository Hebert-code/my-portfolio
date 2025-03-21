const SendButton = ({ text }) => {
    return (
        <button
            type="submit"
            className="bg-dourado-texto text-backgroud-buttom py-2 px-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:bg-dourado-texto-dark cursor-pointer"
        >
            {text}
        </button>
    );
};

export default SendButton;
