import style from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/felipesantos17.png" alt="Felipe Santos" />
      <div>
        <strong>Felipe Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
