import style from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={style.button}
          onClick={() => onButtonClick(buttonName)}
        > {buttonName} </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
