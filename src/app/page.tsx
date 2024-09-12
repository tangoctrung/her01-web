import { Metadata } from "next";
import style from "@/app/page.module.css";

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của Her01, được tạo bởi trungtn'
}
export default function Home() {
  return (
    <div className={style.container}>

    </div>
  );
}
