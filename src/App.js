import { useEffect, useState } from "react";
import { Container, Navbar, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

const App = () => {
  const [jsonVal, setJsonVal] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const setup = queryParams.get("setup");
    if (setup) {
      setIsSetup(true);
      return;
    };
    const fileKey = queryParams.get("fileKey");
    if(!fileKey) {
      setHasError(true);
      return;
    }
    const id = queryParams.get("id");
    if(!id) {
      setHasError(true);
      return;
    }
    const url = process.env.REACT_APP_API_URL + fileKey
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => setJsonVal(data))
    .catch(() => {
      setHasError(true);
    })
  }, []);

  const sendMessage = () => {
    setIsLoading(true)
    const queryParams = new URLSearchParams(window.location.search);
    const fileKey = queryParams.get("fileKey");
    const id = queryParams.get("id");
    const url = process.env.REACT_APP_API_URL + `${fileKey}/${id}`;
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonVal)})
  }

  if (isSetup) {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show
        onHide={() => {}}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            You are successfully setup!
          </Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }

  if (hasError) {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show
        onHide={() => {}}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Please click the link from the embed
          </Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }

  if (isLoading) {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show
        onHide={() => {}}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Sent your file to be uploaded, you may close your browser :)
          </Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </head>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn.discordapp.com/icons/733117510420791358/a_2a2e9349029a56a1da08e999e0ac31e1.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GCG Price Sheet Modifiers
          </Navbar.Brand>
        </Container>
      </Navbar>

      <body style={{ paddingBottom: "56px" }}>
        {jsonVal && <Editor value={jsonVal} onChange={setJsonVal} />}
      </body>
      <footer>
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand href="#home" onClick={sendMessage}>
              Click here to automatically upload this file
            </Navbar.Brand>
          </Container>
        </Navbar>
      </footer>
    </>
  );
};

export default App;
