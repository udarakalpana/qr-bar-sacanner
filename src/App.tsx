import { useState } from "react";
// import QrReader from "react-qr-reader";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import "./styles.css";

export default function App() {
  const [scan, setScan] = useState(false);
  const [logs, setLog] = useState<Array<string>>([]);

  // const qrReaderHandleScan = (data: any) => {
  //   if (data) {
  //     setLog([...logs, data]);
  //     setScan(false);
  //   }
  // };

  // const qrReaderHandleError = (error: any) => {
  //   setLog([...logs, error.message]);
  // };

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text]);
      setScan(false);
    }
  };

  return (
    <div className="App">
      <button onClick={() => setScan(true)}>SCAN</button>
      <button onClick={() => setScan(false)}>CANCEL</button>
      {scan && (
        <div>
          {/* <QrReader
            delay={300}
            onScan={qrReaderHandleScan}
            onError={qrReaderHandleError}
          /> */}
          <BarcodeScannerComponent
            onUpdate={barcodeScannerComponentHandleUpdate}
          />
        </div>
      )}
      <div>
        {logs.map((log) => (
          <div key={log}>{log}</div>
        ))}

        <button onClick={() => setLog([])}>CLEAR</button>
      </div>
    </div>
  );
}
