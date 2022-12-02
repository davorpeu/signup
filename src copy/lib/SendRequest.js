export const URL = 'https://script.google.com/macros/s/AKfycbzX0Tf1S1fgGzdbwqrxRlse9NZpUQrsmBFVO3z9RNqPsXDuBbU9H_AKM9m30H_KwkJ6/exec';

export const sendGoogleSpreadsheetRequest = (data) => {
    data=data.map(i=> encodeURIComponent(i));
    const dataJson = JSON.stringify(data);
    return fetch(URL + "?rows=" + dataJson, {method: 'POST'})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        });
};