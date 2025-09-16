import Image from "next/image";
import struct from "@/app/styles/components/struct.module.scss"

export default function Error404() {
    return (
        <div className={struct.notFoundBar}>
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <p>The page you are looking for does not exist.
                <br /> <span><a className="hover:text-[#047857]" href="/">Go back to home</a></span> or scan below.
            </p>

            <div className={struct.notFoundBarQr}>
                <Image alt="A QR Code" src={'/qr.webp'} width={200} height={200} />
            </div>
        </div>
    )
}