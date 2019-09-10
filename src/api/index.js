const requestMaker = () => {
  let url = 'https://someurl.com';
  let options = {
    method: 'POST',
    url: url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {
      property_one: value_one,
      property_two: value_two
    }
  };
  let response = await axios(options);
  let responseOK = response && response.status === 200 && response.statusText === 'OK';
  if (responseOK) {
    let data = await response.data;
    // do something with data
  }
}

