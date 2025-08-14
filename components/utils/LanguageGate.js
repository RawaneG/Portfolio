import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./languagegate.module.scss";
import { StandardButton } from "@/components/buttons/StandardButton";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import { useTranslation } from "next-i18next";

export const LanguageGate = () => {
 const router = useRouter();
 const { t } = useTranslation("common");
 const [mounted, setMounted] = useState(false);
 const [show, setShow] = useState(false);

 useEffect(() => {
  setMounted(true);
  try {
   const stored = localStorage.getItem("preferredLocale");
   if (!stored) setShow(true);
  } catch (e) {
   setShow(true);
  }
 }, []);

 const choose = async (locale) => {
  try {
   localStorage.setItem("preferredLocale", locale);
  } catch { }
  await router.push(router.asPath, router.asPath, { locale });
  setShow(false);
 };

 if (!mounted || !show) return null;

 return (
  <div className={styles.overlay} role="dialog" aria-modal="true">
   <div className={styles.card}>
    <h2 className={styles.title}>{t("language.choose")}</h2>
    <div className={styles.actions}>
     <StandardButton onClick={() => choose("en")}>EN · {t("language.english")}</StandardButton>
     <OutlineButton onClick={() => choose("fr")}>FR · {t("language.french")}</OutlineButton>
    </div>
   </div>
  </div>
 );
};
