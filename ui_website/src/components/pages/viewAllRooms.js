
import React from 'react';
const ViewAllRoom = () => (
    <section>
        <div className="container py-5">
            <div className="row">

                <div className="col-lg-4">
                    <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-0">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <a
                                    href="#"
                                    className="list-group-item list-group-item-action py-2 ripple"
                                    aria-current="true"
                                >
                                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span className='fw-bold'>Căn hộ của tôi</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                    <i className="fas fa-chart-area fa-fw me-3"></i><span>Chủ trọ: LenTD</span>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                ><i className="fas fa-lock fa-fw me-3"></i><span>SĐT: 0980 980 980</span></a>
                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                ><i className="fas fa-chart-line fa-fw me-3"></i><span>Địa chỉ: 222 Trần Đại Nghĩa, Hòa Quý, Ngũ Hành Sơn, Đà Nẵng</span></a>

                                <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                                ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Tình trạng: 5 phòng còn trống</span></a>

                                <div className='col-12 m-2 border'>
                                    <img src="https://vnn-imgs-f.vgcloud.vn/2020/03/03/15/nha-tro.jpg" alt="avatar"
                                        className="img-fluid" style={{ width: '100%' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body text-center d-flex border">
                            <div className='col-5 d-flex'>
                                <img src="https://cmsnews.reatimes.vn/upload/2021/07/05/phong-tro-cho-thue_05072021165553.jpg" alt="avatar"
                                    className="img-fluid" style={{ width: '100%' }} />
                            </div>
                            <div className='border-start col-7'>
                                <h5 className="my-3">Phòng 1</h5>
                                <p className="fw-bolder text-danger mb-1">Giá: 1.000.000-2.500.000 vnd</p>
                                <p className="text-muted mb-4"><span className='fw-bolder'>Mô tả:</span> Còn trống 1 căn hộ mini đầy đủ tiện nghi ngay trung tâm
                                    Địa chỉ 65 Hoàng Văn Thụ (gần đuôi cầu Rồng)
                                    Tòa nhà có thang máy, camera đảm bảo an ninh
                                    Ra vào cổng từ hiện đại và an toàn
                                    Nhà xe siêu rộng
                                    Giá chỉ từ 3tr5
                                    lh 0905991106 – Ms. Châu
                                    RIT Dormitory & Apartment</p>
                                <p className="text-muted mb-1"><span className='fw-bolder'>Tình trạng: </span> Còn trống</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-primary ms-1 m-2">Sửa</button>
                                    <button type="button" className="btn btn-primary m-2">Cho Thuê</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body text-center d-flex">
                            <div className='col-5 d-flex border'>
                                <img src="https://file4.batdongsan.com.vn/resize/745x510/2023/04/15/20230415140154-3d4f_wm.jpg" alt="avatar"
                                    className="img-fluid" style={{ width: '100%' }} />
                            </div>
                            <div className='border-start col-7'>
                                <h5 className="my-3">Phòng 2</h5>
                                <p className="fw-bolder text-danger mb-1">Giá: 1.000.000-2.500.000 vnd</p>
                                <p className="text-muted mb-4"><span className='fw-bolder'>Mô tả:</span>Căn hộ Hoàng Diệu cho thuê:
                                    _ ĐC: 362/1 Hoàng Diệu quận Hải Châu, Đà Nẵng (sau nhà thuốc Phước Thiện). Cách Hoàng Diệu 15m, kiệt ôtô rộng 4m.</p>
                                <p className="text-muted mb-1"><span className='fw-bolder'>Tình trạng: </span> Đã cho thuê</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-primary ms-1 m-2">Sửa</button>
                                    <button type="button" className="btn btn-primary m-2">Tạo hóa đơn</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

)
export default ViewAllRoom;