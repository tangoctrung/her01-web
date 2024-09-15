import Navbar from "@/components/Navbar";
import style from "./layout.module.css";
import LeftBar from "@/components/PageMess/LeftBar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={style.containerLayoutMess}>
            <div className={style.containerLeftBar}>
                <LeftBar />
            </div>
            <div className={style.containerPageMessage}>
                {children}
            </div>
        </div>
    );
}
