import styles from "./ErrorModal.module.css";

const ErrorModal = ({ showError, children }) => {
  return (
    <section className={styles.backdrop} onClick={() => showError(false)}>
      <main className={styles.modal}>
        {children}
        <button onClick={() => showError(false)}>Close</button>
      </main>
    </section>
  );
};
export default ErrorModal;
