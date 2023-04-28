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
    id: 2,
    question:
      "Wie viele Steuermittel in Milliarden Euro sind von Staatshilfen für Corona, Energie und Teurung an Unternehmen geflossen?",
    answer: 28.7,
    pointZonePercentage: 30,
    sourceUrl:
      "https://www.derstandard.at/story/2000143809538/trotz-wirtschaftsbooms-staatshilfen-in-milliardenhoehe",
    lastChangeOfData: "22. Februar 2023",
    category: "Anzahl",
  },
  {
    id: 3,
    question:
      "Wie viel Grad hätte es auf der Erde ohne dem natürlichen Treibhausgaseffekt?",
    answer: -18,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "Angelina Sax, PG Nachhaltigkeit",
    lastChangeOfData: "26. April 2023",
    category: "Anzahl",
  },
  {
    id: 4,
    question:
      "Wie hoch ist der Tagsatz des durchschnittlichen Arbeitslosengelds in Österreich?",
    answer: 35.2,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "Elias Ehlers, PG Arbeit und Soziales",
    lastChangeOfData: "26. April 2023",
    category: "Anzahl",
  },
  {
    id: 5,
    question:
      "Es gibt 248.200 Schüler:innen und 721 Schulen in Wien. Wie viel Lehrpersonen gibt es in Wien?",
    answer: 25000,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "Maximiliane Radl, PG Bildung",
    lastChangeOfData: "26. April 2023",
    category: "Anzahl",
  },
  {
    id: 6,
    question:
      "Wie viele Views hatte das meist gesehene Reel des @jungegenerationwien Instagram Accounts?",
    answer: 14200,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "Jasmina Malkoč, PG Multimedia",
    lastChangeOfData: "26. April 2023",
    category: "Anzahl",
  },
  {
    id: 7,
    question:
      "Wie viele Abgeordnete haben alle Parlamente der EU Mitgliedsstaaten zusammen?",
    annotation: "Beide Kammern",
    answer: 7822,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "Philipp Kapfer, PG Europa",
    lastChangeOfData: "26. April 2023",
    category: "Anzahl",
  },
  {
    id: 8,
    question:
      "Der Nettogewinn von Apple war zwischen 2020 und 2022 war 251,91 Milliarden US-Dollar. Wie viele Steuern zahlte Apple in diesem Zeitraum?",
    answer: 61.96986,
    annotationAnswer: "24.6%",
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "Peter Schlapfer, PG Digitalisierung",
    lastChangeOfData: "26. April 2023",
    category: "Anzahl",
  },
  {
    id: 9,
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
  {
    id: 11,
    question:
      "Ziemlich fürn Arsch: Wie viele Rollen Klopapier (2 lagig, Kleinrolle) kaufte die Stadt Wien im Herbst 2022?",
    answer: 610000,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "https://www.wien.gv.at/Vergabeportal/Detail/130519",
    lastChangeOfData: "30. Juni 2022",
    category: "Anzahl",
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
    question: "Wie viele Werbeflächen gibt es in Wien?",
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
    id: 15,
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
    id: 16,
    question:
      "Stand 2021 hatte die Stadt Wien die meisten Daten auf OpenData.gv.at veröffentlicht, mit insgesamt 551 Datensätzen. Die Gemeinde Engerwitzdorf veröffentlichte am zweit meisten Datensätze. Wie viele waren es?",
    answer: 514,
    pointZonePercentage: POINT_ZONE_PERCENTAGE_DEFAULT,
    sourceUrl: "https://drawingdata.net/datagvat/",
    lastChangeOfData: "18. November 2021",
    category: "Anzahl",
  },
];

const teams: Team[] = [
  {
    id: 1,
    name: "Team Tisch Hinten",
    answers: [250000, 68, 11, 25.5, 17000, 80000, 7500, 8, 25, 1500000],
  },
  {
    id: 2,
    name: "Team Tisch Mitte",
    answers: [
      480000, 55, -18, 32.68, 24859, 13721, 9450.5, 2.87, 24.6, 17000000,
    ],
  },
  {
    id: 3,
    name: "Team Tisch Vorne (Neues vom Dauerzustand)",
    answers: [200000, 43, -273, 28.95, 26000, 100000, 6200, 5, 27, 5000000],
  },
  {
    id: 4,
    name: "Team Bänke Vorne",
    answers: [280000, 43, 15, 25, 16000, 70000, 12000, 5, 26.3, 500000],
  },
  {
    id: 5,
    name: "Team Bänke Hinten",
    answers: [230000, 54, -69, 26.5, 38000, 35000, 13000, 3, 22, 250000],
  },
  {
    id: 5,
    name: "Team Ausgang",
    answers: [199000, 39, 13.9, 30.9, 25900, 50900, 5900, 19.9, 27.9, 2900000],
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
        {teams.map((team, index) => {
          let teamPoints = 0;
          for (let i = 0; i < team.answers.length; i++) {
            teamPoints += calculatePoints(questions[i], team.answers[i]);
          }
          return (
            <div key={team.id}>
              {team.name}: {teamPoints}
            </div>
          );
        })}

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
              {/* <div className="flex flex-row gap-3 mt-2">
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
              </div> */}
            </div>
          );
        })}
      </div>
    </main>
  );
}
