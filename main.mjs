const baseURL = "https://alchemy-kd0l.onrender.com";
const startURL = `${baseURL}/start`;
const statusURL = `${baseURL}/status`;
const submitURL = `${baseURL}/submit`;
const clueURL = `${baseURL}/clue`;

let token = null;

// start
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

//Answer- answers to the question
response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: 4 }),
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

//Answer- answers to the question
response = await (
  await fetch(submitURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ answer: 3 }),
  })
).json();

await new Promise(resolve => setTimeout(resolve, 3000));
//pi
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
// alchemysimbols 
await new Promise(resolve => setTimeout(resolve, 3000));
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
//S I L V E R  capskeys
await new Promise(resolve => setTimeout(resolve, 3000));

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
