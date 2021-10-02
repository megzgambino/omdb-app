import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
export default function Movies(props) {
    // console.log(props.movie)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="col-3">
            <div className="p-3 border bg-light" style={{ width: '18rem' }}>
                <div className="card text-center">
                    <img
                        onClick={handleShow}
                        type="button"
                        className="img-thumbnail"
                        src={props.movie.Poster}
                        alt={props.movie.Title}
                    />
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <img
                                src={props.movie.Poster}
                                alt={props.movie.Title}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img
                                        className="img-thumbnail"
                                        src={props.movie.Poster}
                                        alt={props.movie.Title}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.Title}</h5>
                        <p className="card-text">
                            Released Year: {props.movie.Year}
                        </p>
                    </div>
                    <div>
                        <Link to={`/movie/${props.movie.imdbID}`}>
                            <button type="button" className="btn btn-dark mr-2">
                                Detail
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
