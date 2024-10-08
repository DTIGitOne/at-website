'use client'
import { useEffect, useState } from 'react';
import '../styles/menu.css'
import { usePathname, useRouter } from 'next/navigation';

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
        if (pathname === "/Gallery") {
            setFontColor("#000000");
        } else {
            setFontColor("#ffffff");
        }
    }, [pathname]);

    return (
        <div className=' z-10 fixed top-0 left-0 h-auto w-screen flex justify-center items-center'>
            <div id='menuBox'>
                <div></div>
                <div style={{color: fontColor}} className=' flex gap-4'>
                    <button onClick={() => handleNavigation("Home")}>Home</button>
                    <button onClick={() => handleNavigation("Works")}>Works</button>
                    <button onClick={() => handleNavigation("Gallery")}>Gallery</button>
                </div>
            </div> 
        </div>
    );
}

export default TopMenu;