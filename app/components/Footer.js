import Link from "next/link";

const Footer = () => {
    return (
        <div className="absolute max-md:relative bottom-1 left-2">
            <div className="pt-6 pl-8 flex items-center gap-1 text-sm max-md:text-xs">
                <p className=" text-gray-400 ">
                    Copyright 2024 © Thuý Hằng - Vũ Khánh
                </p>
                <p className=" text-orange-600">
                    <Link href="https://www.ntechs.vn/" target="_blank">
                        NTechs.vn
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
