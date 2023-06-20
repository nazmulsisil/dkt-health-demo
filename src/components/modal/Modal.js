import { useRef, useEffect } from "react";

export default function Modal({
    handleModal,
    children,
    actionButtonText,
    actionButtonFunc,
}) {
    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, handleModal]);

    return (
        <>
            <div className="fixed inset-0 z-[500] mx-6 md:mx-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div
                    className="relative w-auto max-w-xl mx-auto mt-20 mb-6"
                    ref={modalRef}
                >
                    {/*content*/}
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-slate-200">
                            <button
                                className="absolute top-1 right-1 px-[10px] text-5xl font-semibold text-black transition-all rounded-full hover:bg-logo-indigo/60 "
                                onClick={handleModal}
                            >
                                &times;
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative flex-auto p-6">{children}</div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                            <button
                                className="btn btn-primary"
                                onClick={actionButtonFunc}
                            >
                                {actionButtonText}
                            </button>
                        </div>
                    </div>
                    <span
                        className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none"
                        aria-hidden="true"
                    >
                        &times;
                    </span>
                </div>
            </div>
            <div className="fixed inset-0 z-[400] bg-black opacity-50"></div>
        </>
    );
}
