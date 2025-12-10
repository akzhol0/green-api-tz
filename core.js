async function onClickGetSettings() {
  const idInstance = document.getElementById('idInstance');
  const apiTokenInstance = document.getElementById('apiTokenInstance');
  const apiUrl = document.getElementById('apiUrl');

  const url = `${apiUrl.value}/waInstance${idInstance.value}/getSettings/${apiTokenInstance.value}`

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('outcome').innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    console.error(e);
    document.getElementById('outcome').innerText = e;
  } finally {
    // idInstance.value = ""
    // apiTokenInstance.value = ""
  }
}

async function onClickGetStateInstance() {
  const idInstance = document.getElementById('idInstance');
  const apiTokenInstance = document.getElementById('apiTokenInstance');
  const apiUrl = document.getElementById('apiUrl');

  const url = `${apiUrl.value}/waInstance${idInstance.value}/getStateInstance/${apiTokenInstance.value}`

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('outcome').innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    console.error(e);
    document.getElementById('outcome').innerText = e;
  } finally {
    // idInstance.value = ""
    // apiTokenInstance.value = ""
  }
}

async function onClickSendMessage() {
  const idInstance = document.getElementById('idInstance');
  const apiTokenInstance = document.getElementById('apiTokenInstance');
  const usersNumber = document.getElementById('userNumber');
  const userSentText = document.getElementById("userText");
  const apiUrl = document.getElementById('apiUrl');

  const url = `${apiUrl.value}/waInstance${idInstance.value}/sendMessage/${apiTokenInstance.value}`

  const postSettings = {
    chatId: `${usersNumber.value}@c.us`,
    message: userSentText.value
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postSettings)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    document.getElementById('outcome').innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    console.error(e);
    document.getElementById('outcome').innerText = e;
  } finally {
    // idInstance.value = "";
    // apiTokenInstance.value = "";
    // usersNumber.value = "";
    // userSentText.value = "";
  }
}

async function onClickSendFile() {
  const idInstance = document.getElementById('idInstance');
  const apiTokenInstance = document.getElementById('apiTokenInstance');
  const usersFileNumber = document.getElementById('userFileNumber');
  const userFileSentText = document.getElementById("userFileText");
  const apiUrl = document.getElementById('apiUrl');

  const url = `${apiUrl.value}/waInstance${idInstance.value}/sendFileByUrl/${apiTokenInstance.value}`

  const postSettings = {
    chatId: `${usersFileNumber.value}@c.us`,
    urlFile: userFileSentText.value,
    fileName: 'test',
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postSettings)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    document.getElementById('outcome').innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    console.error(e);
    document.getElementById('outcome').innerText = e;
  } finally {
    // idInstance.value = "";
    // apiTokenInstance.value = "";
    // usersNumber.value = "";
    // userSentText.value = "";
  }
}