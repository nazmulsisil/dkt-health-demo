const Header = ({ title, onBack }) => {
    return (
        <header className="flex items-center justify-between h-16 px-4 text-white bg-bgPrimary">
            <button
                className="text-textPrimary focus:outline-none"
                onClick={onBack}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 feather feather-arrow-left"
                >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>
            <h1 className="text-2xl font-extrabold text-textPrimary font-roboto">
                {title}
            </h1>
            <div></div>
        </header>
    );
};

export default Header;
