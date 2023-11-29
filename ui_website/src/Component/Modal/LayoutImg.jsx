import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function LayoutImg(props) {
  const handleClose = () => props.setShow(false);

  const imgs = props.imgs;
  return (
    <div>
      <Modal show={props.show} onHide={handleClose}  size='lg' className=' bg-white'>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 p-2">
          {imgs && imgs.map((img, index) => 
            (
              <img key={index} 
              src={img.url_img} 
              className={index % 3 === 0   ? 'col-span-2 w-full h-full object-cover ': ''}
              />
            ))}
          
        </div>
      </Modal>
    </div>
  )
}
