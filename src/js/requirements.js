'use static';

const getSalesCoffee = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml",
      true
    );
    xhr.responseType = "document";
    xhr.overrideMimeType("text/xml");

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.responseXML);
        } else {
          reject(new Error(`Error: ${xhr.status} ${xhr.statusText}`));
        }
      }
    };

    xhr.onerror = () => {
      reject(new Error("Error de red al obtener Coffe_sales.xml"));
    };

    xhr.send();
  });
};
 