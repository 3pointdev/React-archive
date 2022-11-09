import Image from "next/image";
import Link from "next/link";
import style from "../styles/header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

export default function Header() {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <header className={style.container}>
      <Link
        href="/"
        className={style.link}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "MENUOPEN" });
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </Link>
      <Image src="/brands/Logo.png" alt="Logo" width="152" height="92" />
      {state.loginState ? (
        <Link href="/" className={style.link}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
      ) : (
        <Link href="/" className={style.link}>
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      )}
      {state.menuOpener && <Menu />}
    </header>
  );
}
