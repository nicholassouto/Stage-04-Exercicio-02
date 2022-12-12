let studentsList = [
  {
    name: "Paulo",
    firstScore: 6,
    secondScore: 7,
  },
  {
    name: "Lucia",
    firstScore: 4,
    secondScore: 10,
  },
  {
    name: "Soraya",
    firstScore: 1,
    secondScore: 3,
  },
  {
    name: "João",
    firstScore: 9,
    secondScore: 8,
  },
];

const averageScore = function (score1, score2) {
  let score = ((Number(score1) + Number(score2)) / 2).toFixed(1);
  return score;
};

let mediumScore = [];

for (let i = 0; i < studentsList.length; i++) {
  mediumScore[i] = averageScore(studentsList[i].firstScore, studentsList[i].secondScore);
  if (mediumScore[i] >= 7) {
    alert(`A média do(a) aluno ${studentsList[i].name} foi ${mediumScore[i]}
    Parabéns ${studentsList[i].name}! Você foi aprovado(a)`);
  } else {
    alert(`A média do(a) aluno ${studentsList[i].name} foi ${mediumScore[i]}
    Não foi dessa vez ${studentsList[i].name}! Tente novamente na proxima!`);
  }
}
