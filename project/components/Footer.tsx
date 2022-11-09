import Link from "next/link";
import style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.infomation}>
        <Link href="/">회사소개</Link>
        <Link href="/">고객센터</Link>
        <Link href="/">이용약관</Link>
        <Link href="/">개인정보처리방침</Link>
      </div>
      <div className={style.company}>
        <h2>PETLY COMPANY</h2>
        <p>COPYRIGHT© 2022 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
