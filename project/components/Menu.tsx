import style from "../styles/menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function Menu() {
  const dispatch = useDispatch();

  return (
    <div className={style.background}>
      <nav className={style.container}>
        <div className={style.title}>
          <h1>MENU</h1>
          <Link
            href="/"
            className={style.exit}
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "MENUOPEN" });
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </Link>
        </div>
        <ul>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
          <li>메뉴</li>
        </ul>
      </nav>
    </div>
  );
}
