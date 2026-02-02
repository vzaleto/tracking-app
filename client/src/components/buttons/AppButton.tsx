import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AppButton({ className,...props}:ButtonProps){
    return(
        <button {...props}  className={clsx(className," mt-6 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 active:scale-[0.98] transition") }/>
    )
}


