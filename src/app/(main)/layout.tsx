import Navbar from "@/components/Navbar";
import style from "./layout.module.css";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={style.containerLayoutMain}>
            <Navbar />
            {children}
        </div>
    );
}
