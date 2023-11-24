import { EthereumProvider } from '@walletconnect/ethereum-provider';

const App = () => {
  return (
    <div>
      <header>
        <button
            type="button"
            onClick={async () => {
              try {
                console.log('Trying to initialize EthereumProvider...');
                const wcProvider = await EthereumProvider.init({
                projectId: '39759ea0d8edf367298a6339d8964c36',
                chains: [421613],
                showQrModal: true,
                });
                console.log('Success!');
        
                await wcProvider.enable();
              } catch (error) {
                console.error(error);
              }
            }}>
            <div>
              <p >Try to Init WalletConnect</p>
            </div>
          </button>
      </header>
    </div>
  );
}

export default App;
