let ax = "2022-01-18T05:00:43.000Z";

let f = new Intl.DateTimeFormat("en");
let a = f.formatToParts();
let b = new Date(ax);
console.log(new Date(ax).get());
