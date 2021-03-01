import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import style from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/felipesantos17.png" alt="Felipe Santos" />
      <div>
        <strong>Felipe Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
