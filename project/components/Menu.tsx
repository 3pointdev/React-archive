import style from "../styles/components/menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookMedical,
  faBullhorn,
  faCircleXmark,
  faGift,
  faMapLocationDot,
  faShieldDog,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Menu() {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={style.background}
        onClick={() => {
          dispatch({ type: "MENUOPEN" });
        }}
      />
      <div className={style.container}>
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
        <nav className={style.navigation}>
          <ul className={style.list_box}>
            <li className={style.list}>
              <Link
                className={style.link}
                href="/"
                onClick={() => {
                  dispatch({ type: "MENUOPEN" });
                }}
              >
                <FontAwesomeIcon icon={faMapLocationDot} />
                반려동물 병원
              </Link>
            </li>
            <li className={style.list}>
              <Link
                className={style.link}
                href="/play"
                onClick={() => {
                  dispatch({ type: "MENUOPEN" });
                }}
              >
                <FontAwesomeIcon icon={faShieldDog} />
                반려동물 쉼터
              </Link>
            </li>
            <li className={style.list}>
              <Link
                className={style.link}
                href="/knowledge"
                onClick={() => {
                  dispatch({ type: "MENUOPEN" });
                }}
              >
                <FontAwesomeIcon icon={faBookMedical} />
                반려동물 상식
              </Link>
            </li>
            <li className={style.list}>
              <Link
                className={style.link}
                href="/shop"
                onClick={() => {
                  dispatch({ type: "MENUOPEN" });
                }}
              >
                <FontAwesomeIcon icon={faGift} />
                반려동물 상점
              </Link>
            </li>
            <li className={style.list}>
              <Link
                className={style.link}
                href="/board"
                onClick={() => {
                  dispatch({ type: "MENUOPEN" });
                }}
              >
                <FontAwesomeIcon icon={faBullhorn} />
                자유게시판
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
