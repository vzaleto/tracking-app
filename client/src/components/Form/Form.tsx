import {type FormEvent, useState} from "react";
import {authStore} from "../../stores/AuthStore.ts";
import {AppButton} from "../buttons/AppButton.tsx";

export function FormAuth() {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<boolean>(false)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && name) {
            authStore.login({name, email})
        } else {
            setError(true)
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black pt-10 pb-10">
            <div className=" rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 p-8 text-white">
                <h1 className="text-2xl font-semibold text-center mb-2">
                    Enter access key
                </h1>

                <p className="text-center text-sm text-white/60 mb-8">
                    Pseudonym or session key
                </p>

                <form onSubmit={handleSubmit} >

                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                               placeholder="Your nickname"
                               className="w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"/>



                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder="Email"
                               className="w-full rounded-xl bg-black/40 border border-white/20 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"/>

                    {error && (
                        <p className="mt-4 text-center text-sm text-red-400">
                            Invalid key. Try again.
                        </p>
                    )}
                    <AppButton className="w-full" type='submit'>Connect</AppButton>
                    {/*<button type="submit"  className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 active:scale-[0.98] transition">  Connect</button>*/}
                </form>

            </div>


        </div>
    )
}