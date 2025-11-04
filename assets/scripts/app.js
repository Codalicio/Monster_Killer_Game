const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 11;
const STRONG_ATTACK_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function monsterAttack(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("It's a draw!");
  }
}

function attackHandler() {
  monsterAttack("ATTACK");
}

const strongAttackHandler = () => {
  monsterAttack("STRONG_ATTACK");
};

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
