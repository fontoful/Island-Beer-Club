import Button from 'react-bootstrap/Button'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Modal from 'react-bootstrap/Modal'

const NeilsonModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='display-4'>
                Filmed By: Ed Weisbrod
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResponsiveEmbed aspectRatio='16by9'>
                <embed
                src="https://www.youtube.com/embed/4VGagVrj3nc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                />
            </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button size='xxl' variant='secondary' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const WeisbrodModal = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='display-4'>
                Filmed By: Ed Weisbrod
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResponsiveEmbed aspectRatio='16by9'>
                <embed
                src="https://www.youtube.com/embed/e3RnAUvCS2Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                />
            </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button size='xxl' variant='secondary' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const KayeModal = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='display-4'>
                Filmed By: Ed Weisbrod
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResponsiveEmbed aspectRatio='16by9'>
                <embed
                src=""
                allowfullscreen
                />
            </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button size='xxl' variant='secondary' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const StricklandModal = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className='display-4'>
                Filmed By: Ed Weisbrod
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ResponsiveEmbed aspectRatio='16by9'>
                <embed
                src="https://www.youtube.com/embed/4VGagVrj3nc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                />
            </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button size='xxl' variant='secondary' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export {NeilsonModal, WeisbrodModal, KayeModal, StricklandModal}