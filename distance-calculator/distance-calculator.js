const csv = require("csv-parser");
const fs = require("fs");
const geolib = require("geolib");

const results = [];

const convertPointStringToCoordinates = (pointString) => {
  const [x, y] = pointString.replace("POINT (", "").replace(")", "").split(" ");
  return { lng: parseFloat(x), lat: parseFloat(y) };
};

const startPoint = { lat: 48.20883228188541, lng: 16.373476839877515 };
const calc = [];

fs.createReadStream("distance-calculator/data/spielplatz.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    for (const { SHAPE, ANL_NAME, BEZIRK } of results) {
      calc.push({
        ANL_NAME,
        BEZIRK,
        distance: geolib.getDistance(
          convertPointStringToCoordinates(SHAPE),
          startPoint
        ),
      });
    }
    const res = calc.reduce(function (prev, curr) {
      return prev.distance < curr.distance ? prev : curr;
    });
    console.log(res);

    console.log(calc.sort((a, b) => a.distance - b.distance));
  });
