# WalletConnect v2 TypeError: url.match is not a function MRE

1. Replace {PROJECT_ID} with a freshly created project id.
2. Install required packages using `npm install`
3. Deploy the app using `npm start`
4. Click the 'Try to Init WalletConnect' button.

Expected: QR Modal will pop up, scanning the QR code and acknowledging the connection should log 'Success!' in the console.

Actual: Throws a `TypeError: url.match is not a function` Error.
