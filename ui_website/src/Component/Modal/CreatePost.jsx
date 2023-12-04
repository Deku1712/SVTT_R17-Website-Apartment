import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreatePost(props) {


    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);

    return (
        <>

            <Modal show={props.show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='post_top_left  flex items-center p-2 '>
                        <img className='w-[50px] h-[50px] object-cover  rounded-full ' src="https://th.bing.com/th/id/OIP.5TlT4Tgv6oqPOz9SSumULAHaHa?rs=1&pid=ImgDetMain" alt="" />
                        <div className='text-sm font-semibold leading-6 text-gray-900 mx-2'>
                            Rapuzel
                        </div>
                    </div>
                    <input type='Text' placeholder='New Post' className=' w-full h-[50px] p-2' />
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose} className='w-full'>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreatePost;