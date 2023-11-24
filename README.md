# WalletConnect v2 TypeError: url.match is not a function MRE

1. Install required packages using `npm install`
2. Deploy the app using `npm start`
3. Click the 'Try to Init WalletConnect' button.

Expected: QR Modal will pop up, scanning the QR code and acknowledging the connection should log 'Success!' in the console.

Actual: Throws a `TypeError: url.match is not a function` Error.