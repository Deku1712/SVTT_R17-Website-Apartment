import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
export default function Filter() {
    return (
        <div className='  border rounded flex flex-col bg-slate-400 '>
            <div className=' bg-white rounded p-2 '>
                <p>
                    Gợi ý theo khu vực
                </p>
                <div className='my-2'>
                    <button className=' rounded-sm  p-2 mx-2 bg-slate-100 hover:bg-slate-300'>
                        Vị trí của bạn
                    </button>
                </div>
                <div>
                    <button className=' rounded-sm  p-2 mx-2 bg-slate-100 hover:bg-slate-300'>
                        Hà Nội
                    </button>
                    <button className=' rounded-sm  p-2 mx-2 bg-slate-100 hover:bg-slate-300'>
                        Đà nẵng
                    </button>
                    <button className=' rounded-sm  p-2 mx-2 bg-slate-100 hover:bg-slate-300'>
                        Tp Hồ Chí Minh
                    </button>
                </div>


            </div>

            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
