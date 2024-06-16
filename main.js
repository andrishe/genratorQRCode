import * as QRCode from "qrcode";

document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.querySelector(".input");
  const qrcodeContainer = document.querySelector(".qrcode");
  const downloadButton = document.querySelector(".download-button");

  const generateQRCode = async () => {
    const input = inputElement.value.trim();

    if (!input) {
      alert("Please enter a valid URL");
      return;
    }

    // Clear any previous QR code
    qrcodeContainer.innerHTML = "";

    // Generate a new QR code
    const qrCodeImage = await QRCode.toDataURL(input, { width: 128 });
    const imgElement = document.createElement("img");
    imgElement.src = qrCodeImage;
    qrcodeContainer.appendChild(imgElement);
  };

  const downloadQRCode = () => {
    const imgElement = qrcodeContainer.querySelector("img");

    if (!imgElement) {
      alert("Please generate a QR Code first");
      return;
    }

    const link = document.createElement("a");
    link.download = "QR.png";
    link.href = imgElement.src;
    link.click();
  };

  // Attach event to the input field
  inputElement.addEventListener("input", generateQRCode);

  // Attach click event to the download button
  downloadButton.addEventListener("click", downloadQRCode);
});
