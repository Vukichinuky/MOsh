import React from 'react'
interface Props {
    children: string;
    onClick: () => void;
    color: string;
}

function Button({ children, onClick, color }: Props) {
    return (
        <button
            className={' p-2 px-6 rounded-2xl text-lg bg-indigo-700 text-slate-50 '
                + color}
            onClick={onClick}  >{children}</button>
    )
}

export default Button