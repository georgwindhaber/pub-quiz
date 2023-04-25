import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Question = {
  id: number;
  question: string;
  answer: number;
  pointZonePercentage: number;
};

type Team = {
  id: number;
  name: string;
  answers: number[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: 50,
    pointZonePercentage: 50,
  },
  {
    id: 2,
    question: "What is the capital of Germany?",
    answer: 100,
    pointZonePercentage: 25,
  },
  {
    id: 3,
    question: "What is the capital of Italy?",
    answer: 100,
    pointZonePercentage: 12.5,
  },
  {
    id: 4,
    question: "What is the capital of Spain?",
    answer: 100,
    pointZonePercentage: 6.25,
  },
];

const teams: Team[] = [
  {
    id: 1,
    name: "Team Right",
    answers: [100, 100, 100, 100],
  },
  {
    id: 2,
    name: "Team Wrong",
    answers: [0, 200, 0, 200],
  },
  {
    id: 3,
    name: "Team Close",
    answers: [99, 101, 99, 101],
  },
  {
    id: 4,
    name: "Team Far",
    answers: [51, 124, 90, 105],
  },
];

const calculatePoints = (question: Question, answer: number) => {
  const pointZone = question.answer * (question.pointZonePercentage / 100);
  const min = question.answer - pointZone;
  const max = question.answer + pointZone;

  if (answer >= min && answer <= max) {
    return 100 - (100 / pointZone) * Math.abs(question.answer - answer);
  } else {
    return 0;
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold">JG Pub Quiz</h1>
        <h2 className="text-2xl font-bold">Results</h2>
        {questions.map((question, index) => {
          return (
            <div key={question.id}>
              <h3 className="font-bold mt-5">
                {question.question} - {question.answer}{" "}
                {question.pointZonePercentage}%
              </h3>
              <div className="flex flex-row gap-3 mt-2">
                {teams.map((team) => {
                  return (
                    <div key={team.id} className="p-3 bg-slate-900 rounded-md">
                      <div>{team.name}: </div>
                      <div className="text-center font-semibold">
                        {calculatePoints(question, team.answers[index])}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
