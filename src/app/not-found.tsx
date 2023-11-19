import Image from "next/image";

export default function Error404() {
    return (
        <div className='flex flex-col-reverse items-center text-3xl'>
            <h1 className='text-center'>{"404 page not found! Well, guess what, we've got a little somethin' for ya - just scan this QR code to grab it!"}</h1>
            <Image priority alt="Suprise" src='qrcode' width={500} height={500} />
        </div>
    )
}