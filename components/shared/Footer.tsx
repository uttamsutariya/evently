import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col sm:flex-row gap-4 p-5 text-center">
                <Link href={"/"}>
                    <Image src={"/assets/images/logo.svg"} width={128} height={38} alt="logo" />
                </Link>
                <p>2024 Evently. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
