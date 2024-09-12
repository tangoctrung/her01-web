import { IconAddFile } from "@/assets/icons/IconAddFile";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Metadata } from "next";
import style from "@/app/page.module.css";

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của Her01, được tạo bởi trungtn'
}
export default function Home() {
  return (
    <div className={style.container}>
      <Button isLoading={false}>
        <IconAddFile width={20} height={20} /> Thêm file
      </Button>
      <Input icon={<IconAddFile height={20} width={20} />} />
      <Button isLoading={false}>
        <IconAddFile width={20} height={20} /> Thêm file
      </Button>
    </div>
  );
}
