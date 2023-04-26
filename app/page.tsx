import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Category = "Anzahl" | "Distanz";

type Question = {
  id: number;
  question: string;
  answer: number;
  annotation?: string;
  annotationAnswer?: string;
  pointZonePercentage: number;
  sourceUrl: string;
  lastChangeOfData: string;
  category: Category;
};

type Team = {
  id: number;
  name: string;
  answers: number[];
};

const POINT_ZONE_PERCENTAGE_DEFAULT = 50;

const questions: Question[] = [
  {
    id: 1,
    question:
      "Stand 2021 hatte die Stadt Wien die meisten Daten auf OpenData.gv.at veröffentlicht, mit insgesamt 551 Datensätzen. Die Gemeinde Engerwitzdorf veröffentlichte am zweit meisten Datensätze. Wie viele waren es?",
    answer: 514,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "https://drawingdata.net/datagvat/",
    lastChangeOfData: "18. November 2021",
    category: "Anzahl",
  },
  {
    id: 2,
    question:
      "Es gibt in Wien 1037 Ampeln mit Akustikkennung. Wie viele gibt es OHNE Akustikkennung?",
    answer: 298,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl:
      "https://www.data.gv.at/katalog/dataset/c5cf2502-7572-4fd1-a836-48b335a2d47d#resources",
    lastChangeOfData: "15. April 2020",
    category: "Anzahl",
  },
  {
    id: 3,
    question: "Es wie Viele Werbeflächen gibt es in Wien?",
    answer: 18703,
    annotation:
      "Typische Werbeflächen, die sehr häufig im Stadtbild und auf öffentlichem Gut anzutreffen sind: - Rolling Boards - Plakatwände - City Lights in Wartehallen oder Telefonzellen - City Lights frei stehend - Leuchtsäulen - Litfaßsäulen (Kulturwerbung) - Miniposter (Halbschalen) an Lichtmasten (Kulturwerbung) - Flachschilder auf Lichtmasten",
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl:
      "https://www.data.gv.at/katalog/dataset/82c36af8-4a5c-4c01-8df7-c19efd5ba7d9#resources",
    lastChangeOfData: "24. April 2023",
    category: "Anzahl",
  },
  {
    id: 4,
    question:
      '"Nimm ein Sackerl fürs Gackerl" steht meistens oben: Wie viele Hundekotsackerlspender gibt es in Wien?',
    answer: 4043,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl:
      "https://www.data.gv.at/katalog/dataset/98908792-f315-4834-9b5e-20fed66cbe5a#resources",
    lastChangeOfData: "15. April 2020",
    category: "Anzahl",
  },
  {
    id: 5,
    question:
      "Ziemlich fürn Arsch: Wie viele Rollen Klopapier (2 lagig, Kleinrolle) kaufte die Stadt Wien im Herbst 2022?",
    answer: 610000,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "https://www.wien.gv.at/Vergabeportal/Detail/130519",
    lastChangeOfData: "30. Juni 2022",
    category: "Anzahl",
  },
  {
    id: 6,
    question:
      "Wie weit ist der nähste Spielplatz vom Stephansplatz entfernt? (In Meter, Luftlinie)",
    answer: 649,
    annotationAnswer: "Es ist der Spielplatz 'Rudolfspark' im 1. Bezirk",
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl:
      "https://www.data.gv.at/katalog/dataset/bd8b518b-d812-46f9-b367-4c1b660cfc99",
    lastChangeOfData: "15. April 2020",
    category: "Distanz",
  },
  {
    id: 7,
    question: "Wie viele Wörter hat Karl Marx' 'Das Kapital' (Band 1)?",
    answer: 196172,
    annotation:
      "Das Kapital. Kritik der politischen Ökonomie. Von Karl Marx. Erster Band. Buch I: Der Produktionsprocess des Kapitals. (Hamburg: Otto Meissner, 1867; New-York: L. W. Schmidt).",
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "https://oll.libertyfund.org/page/marx-k1-1867",
    lastChangeOfData: "27. Juni 2018",
    category: "Anzahl",
  },
  {
    id: 8,
    question:
      "Im Jahr 2019 lag das durchschnittliche Alter der Mutter zum Zeitpunkt der Geburt bei 31,2 Jahren. Wie hoch war das durchschnittliche Alter im Jahr 1989?",
    answer: 26.8,
    pointZonePercentage: 30,
    sourceUrl:
      "https://oesterreich.orf.at/stories/3066164/#:~:text=Das%20durchschnittliche%20Alter%20der%20Mutter,auf%20aktuell%2029%2C9%20Jahre",
    lastChangeOfData: "10. September 2020",
    category: "Anzahl",
  },
  {
    id: 9,
    question:
      "Wie viele Steuermittel in Milliarden Euro sind von Staatshilfen für Corona, Energie und Teurung an UNTERNEHMEN geflossen?",
    answer: 28.7,
    pointZonePercentage: 30,
    sourceUrl:
      "https://www.derstandard.at/story/2000143809538/trotz-wirtschaftsbooms-staatshilfen-in-milliardenhoehe",
    lastChangeOfData: "22. Februar 2023",
    category: "Anzahl",
  },
  {
    id: 10,
    question:
      "Wie oft wurde die 'Pille danach' in Deutschland im Jahr 2017 verkauft?",
    answer: 808000,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl:
      "https://www.spiegel.de/panorama/pille-danach-verkaufszahlen-sind-gestiegen-seit-sie-rezeptfrei-ist-a-00000000-0003-0001-0000-000002710996",
    lastChangeOfData: "06. August 2018",
    category: "Anzahl",
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
