import { Metadata } from "next";
import style from "@/app/page.module.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của Her01, được tạo bởi trungtn'
}
export default function Home() {
  return (
    <div className={style.container}>
      <Navbar />
    </div>
  );
}
