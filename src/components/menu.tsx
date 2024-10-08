'use client'
import { useEffect, useState } from 'react';
import '../styles/menu.css'
import { usePathname, useRouter } from 'next/navigation';
import { body, gmail, subject } from '@/constants/constants';

const TopMenu = () => {
    const [fontColor, setFontColor] = useState("");

    const router = useRouter();

    const pathname = usePathname();

    const handleNavigation = (path: string) => {
        if (pathname === "/Gallery") {
            setFontColor("#000000");
        } else {
            setFontColor("#ffffff");
        }

        setTimeout(() => {
            router.push(`/${path}`);
        }, 0);
    }

    useEffect(() => {
        if (pathname === "/Works" || pathname === "/Home") {
            setFontColor("#ffffff");
        } else {
            setFontColor("#000000");
        }
    }, [pathname]);

    return (
        <div className=' z-10 fixed top-0 left-0 h-auto w-screen flex justify-center items-center'>
            <div id='menuBox'>
                <div>
                    <button className=' cursor-pointer text-red-700' onClick={() => window.location.href = `mailto:${gmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} id='contactB'>Contact</button>
                </div>
                <div style={{color: fontColor}} className=' flex gap-4'>
                    <button className='navB' onClick={() => handleNavigation("Home")}>Home</button>
                    <button className='navB' onClick={() => handleNavigation("Works")}>Works</button>
                    <button className='navB' onClick={() => handleNavigation("Gallery")}>Gallery</button>
                </div>
            </div> 
        </div>
    );
}

export default TopMenu;