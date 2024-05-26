import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // changed from 'next/navigation'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import readUserSession from "@/lib/actions";
import SignOut from "@/app/(root)/components/SignOut";

// Initialize Supabase client

async function Topbar() {
    const{data} = await readUserSession();


    return (
        <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3">
            <Link href='/' className='flex items-center gap-4'>
                <Image src='/assets/logo.svg' alt='logo' width={28} height={28} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Job Agent</p>
            </Link>

            <SignOut/>
        </nav>
    )
}

export default Topbar;
