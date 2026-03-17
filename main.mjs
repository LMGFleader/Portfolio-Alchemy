const baseURL = "https://alchemy-kd0l.onrender.com";
const startURL = `${baseURL}/start`;
const statusURL = `${baseURL}/status`;
const submitURL = `${baseURL}/submit`;
const clueURL = `${baseURL}/clue`;

let token = null;

//#region start
const userConfig = { email: "lucasm@uia.no", nick: "LMG", pin: "74123" };

let response = await (
  await fetch(startURL, {
    body: JSON.stringify(userConfig),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
).json();
//token -  bHVjYXNtQHVpYS5uby0xNzczNjkwNjQxMDYz
//#endregion
token = response.token;
console.log(token);

// status- what question to answer
response = await (
  await fetch(statusURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
).json();

console.log(response);

//#region Answer- answers to the question
response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: "4" }),
  })
).json();

// status- what question to answer
response = await (
  await fetch(statusURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
).json();
//#endregion

//#region 1 Answer- answers to the question 
response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: "3" }),
  })
).json();


//#endregion

//#region pi
response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: "pi" }), 
  })
).json();
//#endregion
//#region alchemysimbols 

response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: "GoldQuicksilverSilverIronGold" }), 
  })
).json();
//#endregion
//#region S I L V E R  capskeys


response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: "Silver" }), 
  })
).json();
//#endregion
//#region Rune andersen secret signaling system
// clue - get hint for current challenge
response = await (
  await fetch(clueURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
).json();

console.log("CLUE:", response);
//#endregion