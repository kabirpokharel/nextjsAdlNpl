import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="flex bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Adelaide Nepal Incorporated All rights reserved.</p>
        </div>
      <div className="max-w-7xl mx-auto text-center">
          <p>Powered by Kabir Pokharel</p>
        </div>
      </footer>

    // <div className={styles.container}>
    //   <div className={styles.logo}>Adelaide Nepal</div>
    //   <div className={styles.text}>
    //     Adelaide Nepal Incorporated © All rights reserved.
    //   </div>
    // </div>
  );
};

export default Footer;
