import React from "react";
import { Modal, Button } from "react-bootstrap";

function Banner(props) {
    return (
      <Modal show={props.isBannerShown} onHide={props.onHideBanner}>
        <Modal.Body>{props.txt}</Modal.Body>
          <Button className="m-2" variant="primary" onClick={props.onHideBanner}>
            Okay
          </Button>
      </Modal>
    );
}

export default Banner;
