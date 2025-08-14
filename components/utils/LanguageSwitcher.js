import { useRouter } from "next/router";
import styles from "./language-switcher.module.scss";

export const LanguageSwitcher = () => {
 const router = useRouter();
 const { locale, asPath } = router;

 const switchTo = async (next) => {
  try {
   localStorage.setItem("preferredLocale", next);
  } catch { }
  await router.push(asPath, asPath, { locale: next });
 };

 return (
  <div className={styles.segmented} role="tablist" aria-label="Language selector">
   <button
    onClick={() => switchTo("en")}
    className={`${styles.tab} ${locale === "en" ? styles.active : ""}`}
    role="tab"
    aria-selected={locale === "en"}
    title="English"
   >
    EN
   </button>
   <button
    onClick={() => switchTo("fr")}
    className={`${styles.tab} ${locale === "fr" ? styles.active : ""}`}
    role="tab"
    aria-selected={locale === "fr"}
    title="Français"
   >
    FR
   </button>
  </div>
 );
};
