let UTMGen = require("../src/index");

const baseUrl = "javascripteverything.com"

test('UTMGenerator With A Single Parameter', () => {
  let utmGen = new UTMGen({
    target: `http://${baseUrl}`,
    source: "Twitch"
  });
  let link = utmGen.getLink();
  expect(link).toBe(`http://${baseUrl}/?utm_source=Twitch`);
});

test('UTMGenerator With No target', () => {
  let utmGen = new UTMGen({
    source: "Twitch"
  });
  expect(() => utmGen.getLink()).toThrow();
});

test('UTMGenerator With No Constructor', () => {
  let utmGen = new UTMGen();
  utmGen.setTarget(baseUrl);
  utmGen.setSource("Twitch");
  let link = utmGen.getLink();
  expect(link).toBe(`http://${baseUrl}/?utm_source=Twitch`);
});

test('UTMGenerator Adds http To Target', () => {
  let utmGen = new UTMGen({
    target: `${baseUrl}`,
    source: "Twitch"
  });
  let link = utmGen.getLink();
  expect(link).toBe(`http://${baseUrl}/?utm_source=Twitch`);
});

test('UTMGenerator Encodes Parameters', () => {
  let utmGen = new UTMGen({
    target: `http://${baseUrl}`,
    campaign: "twitch watchers"
  });
  let link = utmGen.getLink();
  expect(link).toBe(`http://${baseUrl}/?utm_campaign=twitch%20watchers`);
});

test('UTMGenerator With A All Parameters', () => {
  let utmGen = new UTMGen({
    target: `http://${baseUrl}`,
    source: "Twitch",
    campaign: "twitchpromo",
    medium: "socialmedia",
    content: "sourcecode",
    term: "utm generator"
  });
  let link = utmGen.getLink();
  expect(link).toBe(`http://${baseUrl}/?utm_source=Twitch&utm_campaign=twitchpromo&utm_medium=socialmedia&utm_content=sourcecode&utm_term=utm%20generator`);
});