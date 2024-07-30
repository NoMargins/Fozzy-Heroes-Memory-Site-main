import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { sendFeedback } from '../../utils/api';
import './reportForm.scss';

const ReportForm = ({text}) => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        who_are_you_to_deceased: '',
        description: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await sendFeedback(form);
            setShowPopup(true);
            setForm({
                name: '',
                phone: '',
                email: '',
                who_are_you_to_deceased: '',
                description: ''
            });
            handleClose();
        } catch (error) {
            console.error('Помилка при відправці відгуку:', error);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="report-form-container">
            <button className="report-btn" onClick={handleShow}>{text}</button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Повідомити про полеглого захисника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Ваше ПІБ:</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="ПІБ" 
                                name="name" 
                                value={form.name}
                                onChange={handleInputChange}
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Ваш телефон:</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Телефон" 
                                name="phone" 
                                value={form.phone}
                                onChange={handleInputChange}
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Ваша електронна пошта:</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Емейл" 
                                name="email" 
                                value={form.email}
                                onChange={handleInputChange}
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formRelation">
                            <Form.Label>Ким ви доводитесь полеглому (родич / колега / друг тощо)?</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="who_are_you_to_deceased" 
                                value={form.who_are_you_to_deceased}
                                onChange={handleInputChange}
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formInfo">
                            <Form.Label>Коротка інформація про полеглого:</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={4} 
                                name="description" 
                                value={form.description}
                                onChange={handleInputChange}
                                required 
                            />
                        </Form.Group>
                        <div className="submit-button-container">
                            <Button variant="primary" type="submit">
                                Надіслати
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showPopup} onHide={handleClosePopup} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Дякуємо!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Дякуємо за звернення! <br/><br/>Ми невдовзі звʼяжемося з Вами для уточнення деталей.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClosePopup}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ReportForm;
