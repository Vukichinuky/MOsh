import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
    children: ReactNode;
    onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="bg-indigo-200 flex
         items-stretch justify-between
         m-2 text-blue-900 text-xl p-4 
         font-normal rounded-md"><div>{children}</div>
            <div onClick={onClose} className="cursor-pointer ">
                <AiOutlineClose />
            </div>
        </div>
    )
}

export default Alert