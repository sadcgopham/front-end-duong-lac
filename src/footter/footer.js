import React from "react";
import "./footer.scss";
const Footer = () => {
    return (
        <>
        <section>
          <div className="maintop-footer">
            <div className ='footer-img'>
               <div className='img-content'> 
                 <img src="http://localhost:8080/image/fileimg-1707371822590.png" alt="star" />
                 <span><h5>Sản phẩm cao cấp</h5></span>
               </div>
               <div className='img-content'>
                 <img src="http://localhost:8080/image/fileimg-1707743291532.jpg" alt="baohanh" />
                 <span><h5>Cam kết chất lượng</h5></span>
               </div>
               <div className='img-content'>
                 <img src="http://localhost:8080/image/fileimg-1707743270669.png" alt="support" />
                 <span><h5>Bảo hành nhanh chóng</h5></span>
               </div>
               <div className='img-content'>
                 <img src="http://localhost:8080/image/fileimg-1707372026573.png" alt="vanchuyen" />
                 <span><h5>Giao hàng toàn quốc</h5></span>
               </div>
            </div>
            <div className='footer-title'>
              <div className="contact">
                <div className="contact-img">
                   <img src="http://localhost:8080/image/fileimg-1707750388376.jpg" alt="liên hệ" />
                </div>
                <div className="contact-title">
                  <span><h4>Hỗ Trợ Mua Hàng</h4></span>
                  <span><h2>0962411902</h2></span>
                </div>
              </div>
              <div className="contact">
                <div className="contact-img">
                  <img src="http://localhost:8080/image/fileimg-1707750388376.jpg" alt="liên hệ " />
                </div>
                <div className="contact-title">
                  <span><h4>Hỗ Trợ Bảo Hành</h4></span>
                  <span><h2>0962411902</h2></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
        <div className="rows">
          <div className="row-1 ">
               <a href="/">
                <img src="http://localhost:8080/image/Asset1.png" alt="logo" ></img>
               </a>
               <p>
                <b>Địa chỉ :</b>
                số 1 Đào Duy Từ, Đông Thành,<br/> Ninh bình
               </p>
          </div>
          <div className="row-2">
          <div><h4>Chính sách</h4></div> 
           <ul>
            <li><a href="/">• Mua hàng</a></li>
            <li><a href="/">• Liên hệ</a></li>
            <li><a href="/">• Đối tác </a></li>
            <li><a href="/">• Sắp ra mắt</a></li>
            <li><a href="/">• Cửa hàng</a></li>
           </ul>
          </div>
          <div className="row-3">
           <div><h4>Chính sách</h4></div> 
          <ul>
            <li><a href="/"> • Chính sách chung</a></li>
            <li><a href="/">• Chính sách bảo mật</a></li>
            <li><a href="/">• Quy định thanh toán </a></li>
            <li><a href="/">• Chính sách vận chuyển</a></li>
            <li><a href="/">• Chính sách đổi trả</a></li>
           </ul>
          </div>
        </div>
        </footer>
        </>
    )
}
export default Footer;