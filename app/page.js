import Image from "next/image";
import styles from "./page.module.css";
import { ModalComponent } from "./components/Modal";
import DataComponent, { Data } from "./components/Data";

export default function Home() {
  return (
    <div className={styles.page}>
      <ModalComponent />
      {/* <DataComponent /> */}
    </div>
  );
}
