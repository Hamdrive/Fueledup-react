import "../styles/loader.css";

export function Loader({ loaderStyle }) {
  return (
    <div className={loaderStyle}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
