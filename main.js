let qrcode;

const generateQRCode = () => {
  if (document.querySelector("input").value === "" || document.querySelector("input").value === " ") {
    alert("Please enter a valid URL")
  }
  else { 
    qrcode = new QRCode(document.querySelector(".qrcode"));
    qrcode.makeCode(document.querySelector("input").value)
  }
}


const downloadQRCode = () => {
  let img = document.querySelector(".qrcode canvas").toDataURL("image/png");


  let link = document.createElement('a');
  link.download = 'QRCode.png';
  link.href = img;

  link.click();
}


document.querySelector('.download-button').addEventListener('click', downloadQRCode)