// accordion-full.js

// Inject CSS
const style = document.createElement("style");
style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  
.custom-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  border-radius: 10px;
  width: 100%;
}

.custom-accordion-button {
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccc;
}

button.custom-accordion-button {
    color: #ff6633;
}

span.custom-accordion-title {
    font-weight: 600;
}

.custom-accordion-button:hover {
  background-color: #eee;
}

.custom-accordion-content {
  color: #000;
  overflow: hidden;
  padding: 0 15px;
  height: 0;
  opacity: 0;
  transition: height 0.5s ease, padding 0.5s ease, opacity 0.5s ease;
}

.custom-accordion-content p {
  margin: 15px 0;
}

.custom-accordion-button[aria-expanded="true"] + .custom-accordion-content {
  height: auto;
  opacity: 1;
  padding: 15px;
}
`;
document.head.appendChild(style);

// Create HTML structure with random content
const path = window.location.pathname;

if (!path.includes("/du-an-d-homme-q6")) {
  console.log("Not on the correct page. Exiting script.");
}

let html_content;
const path_demo = window.location.origin;

const path_name = path_demo.includes("http://demo80.ninavietnam.org")
  ? "http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725"
  : path_demo;

const container = document.createElement("div");
container.className = "custom-container";
if (path.includes("/du-an-d-homme-q6")) {
  html_content = `
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="true">
        <span class="custom-accordion-title">TỔNG QUAN VỀ DỰ ÁN D-HOMME QUẬN 6</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:20px;"><strong>Chủ đầu tư</strong>: </span><span style="font-size:16px;">DHA LIMITED COMPANY</span></p>

<p><span style="font-size:20px;"><strong>Tên thương mại:</strong> </span><span style="font-size:16px;">Dự án D-HOMME</span></p>

<p><span style="font-size:18px;"><strong>Vị trí xây dựng</strong></span><span style="font-size:16px;"><strong>: </strong>765 Hồng Bàng, phường 6, quận 6, TP. HCM</span></p>

<p><span style="font-size:16px;"><span style="color:#0a0a0a;">Dự án sở hữu kiến trúc chữ Nhân <strong>“人” </strong>độc đáo, tượng trưng cho yếu tố lấy<strong> CON NGƯỜI</strong> làm trung tâm cho mọi sự phát triển.<em><strong> D-Homme</strong></em> không chỉ xây dựng <strong>NGÔI NHÀ </strong>mà còn kiến tạo</span><strong><span style="color:#0a0a0a;"> TỔ ẤM</span> </strong>– <span style="color:#0a0a0a;">Nơi cư dân được tận hưởng cuộc sống trọn vẹn cùng gia đình.<br />
Song song đó, với thiết kế mặt ngoài lượn sóng cùng hiệu ứng đèn LED phô diễn ánh sáng về đêm, <em><strong>D-Homme</strong></em> nổi bật như một biểu tượng mới sáng nhất, sang trọng nhất tại trung tâm Chợ Lớn.</span></span></p>

<p><span style="font-size:16px;"><img alt="" height="94" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/DientichDat-280x120.png" width="220" /><img alt="" height="94" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/MatDoXayDung-280x120.png" width="220" /><img alt="" height="94" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/QuyMoCongTrinh-280x120-2.png" width="220" /><img alt="" height="94" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/TuVanThietKe-280x120.png" width="220" /></span></p>

<p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-1.jpg" width="920" /></p>


      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">GIAO LỘ THỊNH VƯỢNG
MỘT BƯỚC CHÂN NGÀN TIỆN ÍCH</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
      <p><span style="font-size:16px;">D-Homme là dự án duy nhất tại khu vực sở hữu “3 mặt tiền lớn”: Ba Tháng Hai, Hồng Bàng và Minh Phụng.</span></p>

<p><span style="font-size:16px;">Vị thế trung tâm Chợ Lớn – Khu giao thương thịnh vượng, sầm uất của cộng đồng dân cư Chợ Lớn lâu năm. Đây còn là nơi lưu giữ trọn vẹn nền văn hóa bản sắc với nhiều lễ hội phong phú và truyền thống gia đình chuẩn mực.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-2.jpg" width="920" />
<figcaption><strong>Vị trí D-HOMME Quận 6</strong></figcaption>
</figure>
</div>

<p><span style="font-size:16px;">Hệ thống tuyến Metro số 6 dài 6,8 km (Bà Quẹo – Vòng xoay Phú Lâm) kết nối với tuyến Metro số 2 và số 3, tạo diện mạo mới cho khu vực.</span></p>

<p> </p>

<p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-3.jpg" width="920" /></p>


      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">CƠ CẤU SẢN PHẨM</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>Căn hộ:</strong></span></span><br />
<span style="color:#0a0a0a;"><span style="font-size:16px;">Tổng cộng: 445 căn, từ tầng 4 đến tầng 30</span></span></p>

<ul>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ 1 PN : 73 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ 1 PN + : 24 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ 2 PN : 216 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ 3 PN : 102 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ 4 PN : 09 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ Duplex : 11 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Căn hộ Sky Villas : 02 căn</span></span></li>
	<li><span style="color:#0a0a0a;"><span style="font-size:16px;">Shophouse : 08 căn</span></span></li>
</ul>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-5.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng D-HOMME Quận 6</strong></figcaption>
</figure>
</div>

<p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>Thương mại:</strong></span></span><br />
<span style="color:#0a0a0a;"><span style="font-size:16px;">Gồm Shophouse và Slot Thương mại, từ tầng 1 đến tầng 4</span></span></p>

<p> </p>
      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TIỆN ÍCH NỘI KHU</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <span style="color:#0a0a0a;"><strong><span style="font-size:16px;">Mong muốn đem đến cuộc sống tốt đẹp cho cư dân với triết lý sống khỏe – sống đẹp, D-Homme đặc biệt xây dựng môi trường sống hoàn hảo với những tiện ích vượt trội, chăm chút mỗi thành viên trong gia đình.</span></strong></span></p>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-4.jpg" width="920" />
<figcaption><strong>Tiện ích trọn vẹn D-HOMME Quận 6</strong></figcaption>
</figure>
</div>
      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">MẶT BẰNG TẦNG</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
      <div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-6.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 1,2</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-7.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 3,4</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-8.jpg" width="920" />
<figcaption><strong>Mặt bầng tầng  5, 6-12</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-9.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 12A, 12B-16,20-22,25-28</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-10.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 17, 18</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-11.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 19, 23</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-12.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng23A, 29</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-13.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 30, tầng mái</strong></figcaption>
</figure>
</div>
      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">CĂN HỘ CHUẨN “MAY ĐO” CHO GIA ĐÌNH VIỆT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
      <p><span style="font-size:16px;">Thiết kế 3 nhánh thông nhau, xoay vần vượng khí, giúp hầu hết các phòng tại tất cả căn hộ đều được tiếp sáng và gió tối đa theo phương ngang; cùng hành lang rộng 1m8 đưa khí tươi tràn vào từng căn hộ.<br />
Nội thất tinh tế và sang trọng, bố trí không gian khoa học, tối ưu hóa mọi công năng theo cách hoàn hảo nhất.<br />
Bàn tròn cho sinh hoạt gia đình; sàn nước, bếp đóng giúp tránh mùi trong không gian kín, phù hợp với văn hoá ẩm thực Châu Á và thói quen sinh hoạt của người Việt.</span></p>

<p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-14.jpg" width="920" /></p>

<p> </p>
      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">MẶT BẰNG CĂN HỘ</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
      <p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-15.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-16.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-17.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-18.jpg" width="920" /></p>

      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">6 LÍ DO ĐỂ SỞ HỮU CĂN HỘ D-HOMME</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-19.jpg" width="920" />
<figcaption><strong>Lý do nên chọn D-HOMME Quận 6</strong></figcaption>
</figure>
</div>

<p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>1. VỊ TRÍ VÀNG TRONG GIAO THƯƠNG</strong></span></span></p>

<ul>
	<li><span style="font-size:18px;"><em><strong>D-Homme</strong></em> </span><span style="font-size:16px;">nằm tại mặt tiền đường Hồng Bàng.</span></li>
	<li><span style="font-size:16px;">Từ<em><strong> </strong></em></span><span style="font-size:18px;"><em><strong>D-Homme</strong></em></span><span style="font-size:16px;">, cư dân di chuyển dễ dàng vào trung tâm Q1, Q3,… chỉ mất 5 phút.</span></li>
	<li><span style="font-size:16px;">Trong bán kính 1km là hệ thống trường học, bệnh viện, trung tâm thương mại,… hàng đầu cả nước.</span></li>
</ul>

<p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>2. THIẾT KẾ ĐỘC BẢN</strong></span></span></p>

<ul>
	<li><span style="font-size:16px;"><em><strong>D-Homme </strong></em>được thiết kế bởi Surbana – đơn vị thiết kế hàng đầu Châu Á.</span></li>
	<li><span style="font-size:16px;">Kiến trúc chữ <strong>Nhân (人)</strong> độc đáo, mang tính biểu tượng – Tốt cho yếu tố phong thủy của căn hộ</span></li>
</ul>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>3. ĐA TIỆN ÍCH PHỤC VỤ CÁC THẾ HỆ</strong></span></span></p>

<ul>
	<li><span style="font-size:16px;">Tại<em><strong> D-Homme</strong></em>, các thế hệ đều được đáp ứng các nhu cầu giải trí, mua sắm, chăm sóc sức khỏe,…</span></li>
	<li><span style="font-size:16px;"><u><strong>Trẻ em</strong></u>: Nhà trẻ, khu Raining Zone, rạp chiếu phim 4D,…</span></li>
	<li><span style="font-size:16px;"><strong><u>Người lớn</u>: </strong>AQUA GYM, Hồ bơi, Spa, GYM – YOGA, Vườn BBQ,…</span></li>
	<li><span style="font-size:16px;"><u><strong>Người cao tuổi</strong></u>: Hội quán người cao tuổi, Phòng khám DHA,…</span></li>
</ul>

<p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>4. ĐẶT YẾU TỐ AN TOÀN LÊN HÀNG ĐẦU</strong></span></span></p>

<ul>
	<li><span style="font-size:16px;"><strong>DHA Corp </strong>đã áp dụng những công nghệ thông minh hàng đầu vào quá trình vận hành D-Homme:</span></li>
	<li><span style="font-size:16px;">Face ID mở cửa căn hộ.</span></li>
	<li><span style="font-size:16px;">Digital Key.</span></li>
	<li><span style="font-size:16px;">Cửa tự động không chạm.</span></li>
	<li><span style="font-size:16px;">Lưới thủy tinh bảo vệ an toàn ngoài loggia.</span></li>
</ul>

<p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>5. CĂN HỘ SỨC KHỎE” ĐẦU TIÊN</strong></span></span><br />
<span style="font-size:16px;">Với những tiêu chí khắt khe trong thiết kế,<em><strong> D-Homme</strong></em> mang đến những căn hộ tốt cho sức khỏe cư dân.</span></p>

<ul>
	<li><span style="font-size:16px;">Hồ bơi điện phân đồng, bảo vệ da và tóc.</span></li>
	<li><span style="font-size:16px;">Căn hộ tiếp gió theo phương ngang, mang đến luồng khí đối lưu và ánh sáng tự nhiên.</span></li>
	<li><span style="font-size:16px;">Phòng khám đa khoa DHA Healthcare ngay tại dự án.</span></li>
</ul>

<p><span style="font-size:20px;"><span style="color:#ff6633;"><strong>6. CƠ HỘI ĐẦU TƯ HIẾM CÓ</strong></span></span><br />
<span style="font-size:16px;"><em><strong>D-Homme</strong></em> tọa lạc tại vị trí đắc địa, dễ dàng kết nối đến các quận trung tâm.<br />
Trước mặt dự án là nhà ga tuyến Metro số 6 hiện đại.<br />
Giá bán tại khu vực tăng nhiều qua những năm gần đây và sẽ tiếp tục tăng trong giai đoạn tới.</span></p>

<p> </p>

<p style="text-align: center;"><span style="font-size:22px;"><strong><span style="color:#ff6633;">Chân thành cảm ơn Quý khách hàng quan tâm Dự án D-Home Quận 6</span></strong></span></p>
      </div>
    </div>
  </div>
`;
} else if (path.includes("/xi-grand-court-q10")) {
  html_content = `
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="true">
        <span class="custom-accordion-title">TỔNG QUAN DỰ ÁN XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <ul>
	<li><span style="font-size:16px;"><strong>Tên dự án </strong>    Xi Grand Court</span></li>
	<li><span style="font-size:16px;"><strong>Chủ đầu tư dự án</strong>    Công ty TNHH Đầu tư Xây dựng Phú Sơn Thuận</span></li>
	<li><span style="font-size:16px;"><strong>Đơn vị thi công </strong>   Công ty Cổ phần Đầu tư – Xây dựng Cát Linh</span></li>
	<li><span style="font-size:16px;"><strong>Tư vấn giám sát</strong>    Công ty Cổ TNHH APAVE Châu Á Thái Bình Dương chi nhánh TP HCM</span></li>
	<li><span style="font-size:16px;"><strong>Đơn vị tư vấn thiết kế</strong>    Công ty Cổ phần Tư vấn Xây dựng Tổng Hợp (Nagecco)</span></li>
	<li><span style="font-size:16px;"><strong>Tổng diện tích dự án</strong>    17.940,5 m2</span></li>
	<li><span style="font-size:16px;"><strong>Tổng diên ̣ tích sàn xây dựng (kể cả hầm)</strong>    169.290,19 m2</span></li>
	<li><span style="font-size:16px;"><strong>Diên ̣ tích sàn tầng hầm </strong>   2 tầng hầm: 33.544,30 m2 + 5000m2</span></li>
	<li><span style="font-size:16px;"><strong>Mật độ xây dựng khối đế</strong>    54,66%</span></li>
	<li><span style="font-size:16px;"><strong>Mật độ xây dựng khối tháp </strong>   19,64 5 %</span></li>
	<li><span style="font-size:16px;"><strong>Chiều cao công trình </strong>   29 tầng gồm 4 Block</span></li>
	<li><span style="font-size:16px;"><strong>Tổng số căn hô</strong>    740 căn gồm 540 căn hộ để bán + 200 căn hộ Officetel, căn hộ Studio</span></li>
	<li><span style="font-size:16px;"><strong>6 tầng trung tâm thương mại </strong>   45.000m2</span></li>
</ul>

<p><span style="font-size:20px;"><strong><span style="color:#ff6633;">Quy mô </span></strong></span><span style="font-size:16px;"><strong><span style="color:#ff6633;">  </span> Xi Grand Court</strong> gồm 02 khối kiến trúc<strong>:</strong></span></p>

<p><span style="font-size:16px;">–<em><strong> Khối một</strong></em> là căn hộ với 3 đơn nguyên gồm 3 Block A1, A2 và B cao 29 tầng.<br />
–<em><strong> Khối hai </strong></em>gồm Block C nhà phức hợp gồm các loại hình văn phòng, và chung cư cho thuê với quy mô 25 tầng.</span><br />
 </p>

<p> </p>
      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">VỊ TRÍ DỰ ÁN XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><strong>Xi Grand Court </strong>toạ lạc ở số 256-258 Lý Thường Kiệt, Phường 14, Quận 10 Hồ Chí Minh. Dự án Xi Grand Court sở hữu vị trí vô cùng đắc địa khi nằm ngay mặt tiền đường Lý Thường Kiệt, gần với 2 giao lộ quan trọng là Lý Thường Kiệt giao với đường 3/2 và Lý Thường Kiệt giao với Tô Hiến Thành.</span></p>

<p><em><strong><span style="font-size:16px;">Các mặt tiếp giáp dự án Xi Grand Court:</span></strong></em></p>

<p><span style="font-size:16px;">+<strong> Phía Đông:</strong> giáp hẻm 666, đường 3/2, lộ giới 12m.</span></p>

<p><span style="font-size:16px;">+<strong> Phía Tây:</strong> Giáp Lý Thường Kiệt, Sân vận Động Phú Thọ, lộ giới 35m.</span></p>

<p><span style="font-size:16px;">+<strong> Phía Nam:</strong> Giáp hẻm 254 Lý Thường Kiệt, lộ giới 16m.</span></p>

<p><span style="font-size:16px;">+ <strong>Phía Bắc:</strong> Giáp hẻm 284 Lý Thường Kiệt, lộ giới 12m.</span></p>

<p><span style="font-size:16px;">+ <strong>Từ Xi Grand Court</strong> có thể kết nối trực tiếp toàn Quận 10, dễ dàng kết nối với Quận 11, Quận 3, Quận 5</span></p>

<p><span style="font-size:16px;">+ <strong>Di chuyển qua Bến Thành – Trung tâm Quận 1, Sân bây quốc tế Tân Sơn Nhấtm, chợ Kim Biên: </strong>10 phút</span></p>

<p><span style="font-size:16px;">+ <strong>Cách trung tâm Quận 5, trường Đại học Bách khoa, Chợ Lớn, Bệnh viện phụ sản Hùng Vương:</strong> 5 phút</span></p>

<p><span style="font-size:16px;">+<strong> Cách Trung TDTT Phú Thọ </strong>3 phút</span></p>

<p><span style="font-size:16px;">+ <strong>Cách Chợ An Đông</strong> 8 phút, chợ Kim Biên 10 phút</span></p>

<p><span style="font-size:16px;">+ <strong>Cách siêu thị Co.op Mart, trung tâm thương mại Parkson Hùng Vương</strong> 500m</span></p>

<p><span style="font-size:16px;"><em><strong>Xi Grand Court</strong></em> còn kết nối trực tiếp với nhiều tuyến đường liên thông ra các quận nội thành như:</span></p>

<p><span style="font-size:16px;">– Dự án cách trung tâm Quận 1, đường điện biên phủ chỉ 10 phút đi xe</span></p>

<p><span style="font-size:16px;">– Đối diện Nhà thi đấu Phú Thọ</span></p>

<p><span style="font-size:16px;">– Cách trường đại học Bách Khoa Hồ Chí Minh chỉ 1km</span></p>

<p><span style="font-size:16px;">– Cách Parkson, Lotte Mart chỉ 5 phút đi bộ</span></p>

<p><span style="font-size:16px;">– Dể dàng đi đến sân bay Tân Sơn Nhất, đường Hoàng Văn Thụ, cửa khẩu Mộc Bài thông qua đại lộ Lý Thường Kiệt.</span></p>

<p><span style="font-size:16px;">Căn hộ<em><strong> Xi Grand Court </strong></em>sở hữu vị trí vô cùng đắc địa nằm ngay trong trung tâm thành phố. Trong vòng bán kính 1km, căn hộ Xi Grand Court tiếp cận đầy đủ các tiện ích ngoại khu:</span></p>

<p><span style="font-size:16px;">Ngay trung tâm tứ giác vàng thương mại. Nơi tập trung rất nhiều khu chợ, ngân hàng, siêu thị, trung tâm thương mại, khu vui chơi ăn uống, bệnh viện lớn, trung tâm thể thao, nhiều trường đại học lớn…</span></p>

<p><span style="font-size:16px;">Có vị trí rất thuận lợi cho giao thông. Từ đây chúng ta có thể dễ dàng tiếp cận các con đại lộ lớn như Hồng Bàng, đường 3/2, Lý Thường Kiệt, Cách Mạng Tháng 8.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="499" src="${path_name}/upload/filemanager/images/XI-GRAND/vi-tri-xi-grand-court.jpg" width="920" />
<figcaption><strong>Vị trí dự án XI GRAND COURT Quận 10</strong></figcaption>
</figure>
</div>

<p> </p>
      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">MẶT BẰNG DỰ ÁN XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Đặc biệt, với lợi thế diện tích lớn 17.940,5 m2, cùng 4 mặt tiền thông thoáng, căn hộ<strong> Xi Grand Court</strong> được đầu tư xây dựng thành 4 Block: 3 Block căn hộ chung cư (528 căn hộ) và 1 Block căn hộ dịch vụ thương mại. Mỗi block cao từ 27 đến 29 tầng.</span></p>

<p><span style="font-size:16px;">Chính vì được chia thành 4 Block riêng biệt, nên mỗi Block đều có nhiều mặt thông thoáng, nhận đầy đủ ánh sáng. Hơn nữa, các Block này bố trí xây dựng lệch nhau nên càng thoáng mát hơn cho các căn hộ không bị che cản tầm nhìn.</span></p>

<p><span style="font-size:16px;">Đối tượng các căn hộ sau đây đa dạng từ các gia đình trẻ đến gia đình đông người. Bởi diện tích chung cư <em><strong>Xi Grand Court</strong></em> dao động từ 70 đến 109m2 cho căn 2 và 3 phòng ngủ, phù hợp với nhiều đối tượng sử dụng. Các căn hộ đều được thiết kế sang trọng, tận dụng tối đa các góc nhìn, hướng sáng, hướng gió đầy đủ.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="991" src="${path_name}/upload/filemanager/images/XI-GRAND/mat-bang-tong-xi-grand-court.png" width="920" />
<figcaption><strong>Mặt bằng tổng thế dự án XI GRAND COURT</strong></figcaption>
</figure>
</div>

<p> </p>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block C</strong></span></span><span style="font-size:16px;"><span style="color:#ff6633;"> </span>là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block C có vị trí phía ngay góc mặt tiền Lý Thường Kiệt, mặt tiền của dự án, đối diện là SVĐ Phú Thọ.</span></p>

<p><span style="font-size:18px;"><strong>❖ Tên tòa</strong>:</span><span style="font-size:16px;"> Block C</span><br />
<span style="font-size:18px;"><strong>❖ Số tầng</strong>:</span><span style="font-size:16px;"> 28 tầng</span><br />
<span style="font-size:18px;"><strong>❖ Mật độ</strong>: </span><span style="font-size:16px;">10 – 11 căn/sàn</span><br />
<span style="font-size:18px;"><strong>❖ Loại hình căn hộ:</strong> </span><span style="font-size:16px;">Căn hộ từ 1 – 3 PN</span><br />
<span style="font-size:18px;"><strong>❖ Số thang</strong>:</span><span style="font-size:16px;"> 03 thang máy, 01 thang bộ</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="640" src="${path_name}/upload/filemanager/images/XI-GRAND/Xi-Block-C-MB-tang-19-26.jpg" width="920" />
<figcaption><strong>Mặt bằng Block C</strong></figcaption>
</figure>
</div>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block B</strong></span></span><span style="font-size:16px;"> là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block B ở vị trí trung tâm của dự án, nhìn ra mặt tiền Lý Thường Kiệt, Đại học Bách Khoa và Hồ bơi tầng 7. Tòa nhà cũng sở hữu nhiều tiện ích như sảnh đón, khu sân Bóng rổ, hồ bơi, sân chơi trẻ em, cafe tầng trệt…</span></p>

<p><span style="font-size:18px;"><strong>❖ Tên tòa:</strong> </span><span style="font-size:16px;">Block B</span><br />
<span style="font-size:18px;"><strong>❖ Số tầng:</strong> </span><span style="font-size:16px;">29 tầng</span><br />
<span style="font-size:18px;"><strong>❖ Mật độ:</strong></span><span style="font-size:16px;"><strong> </strong>10 căn/sàn</span><br />
<span style="font-size:18px;"><strong>❖ Loại hình căn hộ</strong>:</span><span style="font-size:16px;"> Căn hộ từ 2 – 3 PN</span><br />
<span style="font-size:18px;"><strong>❖ Số thang:</strong></span><span style="font-size:16px;"><strong> </strong>03 thang máy, 01 thang bộ</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="650" src="${path_name}/upload/filemanager/images/XI-GRAND/B-T9-10-hinh-scaled.jpg" width="920" />
<figcaption><strong>Mặt bằng block B</strong></figcaption>
</figure>
</div>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block A2</strong></span></span><span style="font-size:16px;"> là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block A2 ở vị trí phía sau của dự án, nhìn về phía Bitexco quận 1, quận 5 và Hồ bơi tầng 7. Tòa nhà sở hữu nhiều tiện ích như sảnh đón, khu BBQ, hồ bơi, Spa, sân chơi trẻ em,…</span></p>

<p><span style="font-size:18px;"><strong>❖ Tên tòa: </strong></span><span style="font-size:16px;">Block A2</span><br />
<span style="font-size:18px;"><strong>❖ Số tầng:</strong></span><span style="font-size:16px;"> 29 tầng</span><br />
<span style="font-size:18px;"><strong>❖ Mật độ: </strong></span><span style="font-size:16px;">8 căn/sàn</span><br />
<span style="font-size:18px;"><strong>❖ Loại hình căn hộ:</strong></span><span style="font-size:16px;"> Căn hộ từ 2 – 3 PN</span><br />
<span style="font-size:18px;"><strong>❖ Số thang: </strong></span><span style="font-size:16px;">03 thang máy, 01 thang bộ</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="650" src="${path_name}/upload/filemanager/images/XI-GRAND/A2-T9-10-hinh-scaled.jpg" width="920" />
<figcaption><strong>Mặt bằng Block A2</strong></figcaption>
</figure>
</div>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Block A1 </strong></span></span><span style="font-size:16px;">là một trong bốn tòa nhà thuộc dự án khu căn hộ Xi Grand Court. Tòa nhà hiện đã hoàn thành tất cả hạng mục và bàn giao cho khách hàng. Block A1 ở vị trí phía sau của dự án, nhìn ra mặt tiền Lý Thường Kiệt, Đại học Bách Khoa và Hồ bơi tầng 7. Tòa nhà cũng sở hữu nhiều tiện ích như sảnh đón, hồ bơi, sân chơi trẻ em, cafe tầng trệt…</span></p>

<p><span style="font-size:18px;"><strong>❖ Tên tòa:</strong></span><span style="font-size:16px;"> Block A1</span><br />
<span style="font-size:18px;"><strong>❖ Số tầng:</strong></span><span style="font-size:16px;"> 29 tầng</span><br />
<span style="font-size:18px;"><strong>❖ Mật độ: </strong></span><span style="font-size:16px;">8 căn/sàn</span><br />
<span style="font-size:18px;"><strong>❖ Loại hình căn hộ:</strong></span><span style="font-size:16px;"> Căn hộ từ 2 – 3 PN</span><br />
<span style="font-size:18px;"><strong>❖ Số thang: </strong></span><span style="font-size:16px;">03 thang máy, 01 thang bộ</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="650" src="${path_name}/upload/filemanager/images/XI-GRAND/A1-T9-10-can-ho-xi-grand-court.jpg" width="920" />
<figcaption><strong>Mặt bằng Block A1</strong></figcaption>
</figure>
</div>
      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">THIẾT KẾ CĂN HỘ XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Mỗi căn hộ điều được thiết kế có view nhìn thông thoáng, tận dụng tối đa ánh sáng và gió tự nhiên kết hợp với mảng cây xanh xung quanh dự án nhằm xây dựng một không gian sống trong lành, mang thiên nhiên vào từng ngôi nhà.</span></p>

<p><span style="font-size:16px;">Thiết kế căn hộ <em><strong>Xi Grand Court </strong></em>rộng rãi nên cũng dễ dàng cho việc bài trí, sắp xếp căn hộ, phù hợp với mọi nhu cầu của khách hàng khi sở hữu</span></p>

<p><span style="font-size:16px;">Thiết kế căn hộ thông minh, chủ đầu tư đã tối ưu hóa mặt bằng tầng 7 để tạo nên “công viên xanh thu nhỏ” để gia đình bạn có thể nghỉ ngơi, sinh hoạt sau những giờ làm việc căng thẳng.</span></p>

<p style="text-align:center"><img alt="" height="689" src="${path_name}/upload/filemanager/images/XI-GRAND/du-an-xi-grand-court.jpg" width="920" /></p>


      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">NỘI THẤT CĂN HỘ XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Tổng thể dự án Xi Grand Court Q10 sử dụng gam màu trắng làm chủ đạo. Thiết kế nội thất chủ yếu là gam màu nhẹ, điểm nhấn đặc trưng.</span></p>

<ul>
	<li><span style="font-size:16px;">Sử dụng kiếng khá nhiều trong thiết kế, làm tăng độ sáng tự nhiên bên trong căn hộ.</span></li>
	<li><span style="font-size:16px;">Sử dụng cửa gỗ thông minh chống cháy, lên đến 120 phút. Tích hợp 3 loại khoá Cơ – Mật mã – Thẻ từ, thuận lợi khi ra vào, tính bảo mật cao.</span></li>
	<li><span style="font-size:16px;">Phòng khách lót gạch cao cấp, loáng bóng, có kệ tủ, TV LCD lớn, vách ngăn kiếng với phòng ngủ.</span></li>
</ul>

<p style="text-align:center"><img alt="" height="668" src="${path_name}/upload/filemanager/images/XI-GRAND/noi-that-can-ho-xi-grand-court.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/thiet-ke-can-ho-xi-grand-court.jpg" width="920" /></p>

<ul>
	<li><span style="font-size:16px;">Toàn bộ phòng ngủ đều được trang bị cửa sổ nhiều ô lớn, sàn gỗ ấm cúng. Tầm view đa dạng về nội khu, Quận 5, Quận 10. Thiết kế dạng cửa hất, có thể đón nắng gió tự nhiên từ bên ngoài.</span></li>
</ul>

<p style="text-align:center"><img alt="" height="690" src="${path_name}/upload/filemanager/images/XI-GRAND/noi-that-nha-mau-du-an-xi-grand-court.jpg" width="920" /></p>

<ul>
	<li><span style="font-size:16px;">Full thiết bị bếp đến từ các thương hiệu như Taka, Toshiba. Gồm: Tủ lạnh, Bếp, kệ bếp trên, kệ bếp dưới, lavabo, máy hút mùi,… Logia tích hợp kế bên, thoáng mát, sử dụng tiện lợi.</span></li>
	<li><span style="font-size:16px;">Full nội thất Toilet cao cấp, phòng tắm rộng lớn.</span></li>
</ul>

<p style="text-align:center"><img alt="" height="690" src="${path_name}/upload/filemanager/images/XI-GRAND/phong-tam-du-an-xi-grand-court-q10.jpg" width="920" /></p>

<p><span style="font-size:16px;">Song, các chi tiết thiết kế bên trong căn hộ tuy đẹp, nhiều ưu điểm và tiện nghi nhưng chưa có sự tối ưu triệt để. Và không có nhiều điểm nhấn so với các sản phẩm cùng phân khúc.</span></p>

<p><span style="font-size:16px;">Đổi lại, với phong cách này, chung cư Quận 10 này sẽ có tính năng sử dụng lâu dài, ít lỗi thời.</span></p>

<p> </p>

<p style="text-align: center;"> </p>
      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TIỆN ÍCH NỔI BẬT DỰ ÁN XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:18px;"><strong>Tiện ích Xi Grand Court nổi bật với dành cho cư dân như:</strong></span></p>

<p><span style="font-size:18px;"><span style="color:#ff6633;"><em><strong>Hồ bơi bốn mùa</strong></em></span></span></p>

<p><span style="font-size:16px;">Hồ bơi đáp ứng các tiêu chuẩn chất lượng để phục vụ nhu cầu nghỉ ngơi, thư giãn của cộng đồng cư dân của dự án. Không chỉ ấn tượng bởi tiện ích hồ bơi bốn mùa còn đảm bảo mọi tiêu chuẩn về chất lượng vệ sinh nguồn nước.</span></p>

<p><span style="font-size:16px;">Bên cạnh hồ bơi người lớn thì còn có một khu bể bơi vui chơi cho trẻ em. Hồ bơi 4 mùa mở cửa 24/24 và hồ bơi miễn phí cho tất cả cư dân và người thân của các hộ dân tại dự án khi có nhu cầu.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="390" src="${path_name}/upload/filemanager/images/XI-GRAND/ho%20boi%20can%20ho%204%20mat%20tien%20ly%20thuong%20kiet%20xi%20grand%20court%20q10.png" width="920" />
<figcaption>Hồ bơi</figcaption>
</figure>
</div>

<p><span style="font-size:18px;"><span style="color:#ff6633;"><em><strong>Phòng tập thể dục, khu Gym</strong></em></span></span></p>

<p><span style="font-size:16px;">Khu tập thể dục có diện tích rộng rãi, trang bị nhiều dụng cụ tập luyện phù hợp với nhiều lứa tuổi đáp ứng mọi nhu cầu luyện tập. Tất cả máy móc và trang thiết bị trong khu tập Gym theo chuẩn hiện đại của Mỹ. Phòng tập mở cửa cho mọi cư dân cũng như khách vãng lai.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="567" src="${path_name}/upload/filemanager/images/XI-GRAND/20230807154204-6f0e_wm.jpg" width="920" />
<figcaption><strong>Phòng tập Gym</strong></figcaption>
</figure>
</div>

<p><span style="font-size:18px;"><span style="color:#ff6633;"><em><strong>Khu vui chơi trẻ em</strong></em></span></span></p>

<p><span style="font-size:16px;">Khu vui chơi trẻ em được xây dựng phía trước. Tại đây được trang bị nhiều dụng cụ, đồ chơi mang tính chất giải trí, học hỏi, vui chơi và vận động giúp các bé có thể thoái mái vui chơi khám phá thế giới của mình.</span></p>

<p><span style="font-size:16px;">Điểm đặc biệt cuối cùng là nền sân tại khu vui chơi đều được trải cát chống bay đảm bảo an toàn.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="528" src="${path_name}/upload/filemanager/images/XI-GRAND/khu-vui-choi-du-an-xi-grand-court-quan-10-e1456339479769.jpg" width="920" />
<figcaption><strong>Khu vui chơi </strong></figcaption>
</figure>
</div>

<p><span style="font-size:18px;"><span style="color:#ff6633;"><em><strong>Hệ thống an ninh đảm bảo 24/24</strong></em></span></span></p>

<p><span style="font-size:16px;">Toàn khu căn hộ được trang bị hệ thống an ninh an toàn qua 9 lớp bảo vệ bằng hệ thống Camera có Sảnh Chờ cho người thân hoặc bạn bè bên ngoài vào thăm.</span></p>

<p><span style="font-size:16px;">Và thẻ từ nhận dạng giúp các cư dân có thể hoàn toàn yên tâm tận hưởng một cuộc sống riêng tư và yên bình tuyệt đối.</span></p>


      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TIỆN ÍCH NỘI KHU DỰ ÁN XI GRADN COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">+ Khu sinh hoạt cộng đồng.</span></p>

<p><span style="font-size:16px;">+ Hồ bơi tràn có diện tích mặt nước rộng 604m2: 1 hồ người lớn: 482m2 (16.55 x 29.15) và 1 hồ trẻ em: 122m2 (16.55 x 7.35). Đặc biệt các cư dân sống tại dự án được miễn phí hồ bơi.</span></p>

<p><span style="font-size:16px;">+ Khu trung tâm thương mại và dịch vụ từ tầng 1 – 7 bao gồm: ngân hàng, siêu thị, nhà hàng, rạp chiếu phim…</span></p>

<p><span style="font-size:16px;">+ Phòng tập Gym, Yoga, khu vui chơi trẻ em, khu sinh hoạt cộng đồng, Khu BBQ ngoài trời, khu chăm sóc sức khỏe, công viên…</span></p>

<p><span style="font-size:16px;">+ Hệ thống an ninh 24/7 bởi hệ thống bảo vệ bằng thẻ từ nhận dạng, hệ thống gọi cửa Audio, Camera trang bị tại các sảnh thang máy.</span></p>

<p><span style="font-size:16px;">+ Diện tích 02 tầng hầm lớn đảm bảo mỗi căn hộ có 1 chỗ để xe ô tô, 2 xe máy và 1 xe đạp.</span></p>

<p><span style="font-size:16px;">+ Dịch vụ chăm sóc khách hàng, nhân viên phục vụ 24/7.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="633" src="${path_name}/upload/filemanager/images/XI-GRAND/tien-ich-du-an-xi-grand-court-q10.jpg" width="920" />
<figcaption><strong>Tiện ích nội khu dự án</strong></figcaption>
</figure>
</div>

<p><span style="font-size:16px;">Đáng chú ý nhất là các mảng xanh tự nhiên, chiếm khoảng 50% diện tích, dàn trải đều trong khuôn viên nội khu. Nổi bật với 03 vườn treo trên không rộng rãi, thoáng mát.</span></p>

<p><span style="font-size:16px;">Tích hợp với vườn nướng BBQ ngoài trời, khu vui chơi dành riêng cho trẻ em. Là nơi quây quần “thường xuyên” của cư dân, nhất là khi về đêm.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/cong-vien-can-ho-xi-grand-court.jpg" width="920" />
<figcaption><strong><em>Phối cảnh vườn treo trên không</em></strong></figcaption>
</figure>
</div>

<p><span style="font-size:16px;">06 tầng khối đế dành riêng cho các hoạt động thương mại – dịch vụ. Sôi động ở khu mua sắm, cửa hàng tiện lợi, coffee, showroom, khu nhà hàng, ẩm thực,…Với nhiều thương hiệu nổi tiếng, được dàn trải trên diện tích sàn rộng 60.000m2.</span></p>

<p><span style="font-size:16px;">Sảnh đón khách sang trọng, diện tích lớn, 100% hành lang đến các căn hộ ốp đá bên ngoài.  Sử dụng hệ thống thang máy tốc độ cao.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="690" src="${path_name}/upload/filemanager/images/XI-GRAND/sanh-don-khach-du-an-xi-grand-court.jpg" width="920" />
<figcaption><strong>Sảnh đón khách</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="690" src="${path_name}/upload/filemanager/images/XI-GRAND/sanh-thang-may-du-an-xi-grand-court-quan-10.jpg" width="920" />
<figcaption><strong>Hình ảnh thực tế thang máy</strong></figcaption>
</figure>
</div>

<p><span style="font-size:16px;">Trên nóc tầng khối đế là hồ bơi tràn rộng hơn 500m2. Trang bị đầy đủ hồ bơi dành cho trẻ em và người lớn. Tầm view nhìn xa nhờ hạ tầng đô thị xung quanh thấp, đẹp hơn khi quan sát về đêm.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="690" src="${path_name}/upload/filemanager/images/XI-GRAND/tam-view-tu-can-ho-xi-grand-court.jpg" width="920" />
<figcaption><strong><em>Tầm view từ hồ bơi </em></strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="516" src="${path_name}/upload/filemanager/images/XI-GRAND/duong-chay-bo-xi-grand-court(1).png" width="920" />
<figcaption><strong>Đường chạy bộ</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="635" src="${path_name}/upload/filemanager/images/XI-GRAND/ho-bo-du-an-xi-grand-court(1).png" width="920" />
<figcaption><strong>Hồ bơi tràn bờ</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/khu-dao-choi-xi-grand-court(1).png" width="920" />
<figcaption><strong>Khuôn viên dự án</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/quang-truong-noi-khu-xi-grand-co(1).png" width="920" />
<figcaption><strong>Quảng trường nội khu</strong></figcaption>
</figure>
</div>
      </div>
    </div>
  </div>
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TIỆN ÍCH NGOẠI KHU XI GRAND COURT</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <ul>
	<li><span style="font-size:16px;">Nằm gần các ngân hàng lớn như: Saccombank, ABC, Vietcombank, Seabank,…</span></li>
	<li><span style="font-size:16px;">Thuộc khu vực là nơi hội tụ và rất gần các trung tâm thương mại lớn của TPHCM, được kết nối với: siêu thị Coopmart, TTTM Hùng Vương (Parkson Hùng Vương), Lotte Lê Đại Hành tại căn hộ The Everich, Chợ An Đông , chợ Nhật Tảo , chợ Thuận Kiều, chợ Kim Biên, chợ Bình Tây.</span></li>
	<li><span style="font-size:16px;">Gần các trường học quốc tế cấp I, II, III; các trường đại học danh tiếng: Đại học Bách Khoa, Đại học Y Dược, Đại học Kinh Tế TP HCM.</span></li>
	<li><span style="font-size:16px;">Gần các bệnh viện lớn của thành phố: Bệnh viện Chợ Rẩy, Bệnh viện Y Dược, Bệnh viện Nguyễn Tri Phương, …</span></li>
	<li><span style="font-size:16px;">Gần nhà thi đấu Phú Thọ, sân vận động Thống Nhất,…</span></li>
</ul>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="632" src="${path_name}/upload/filemanager/images/XI-GRAND/can-ho-xi-grand-court-tien-ich-ngoai-khu-01.png" width="920" />
<figcaption><strong>Tiện ích xung quanh dự án</strong></figcaption>
</figure>
</div>

<p style="text-align: center;"><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Chân thành cảm ơn Quý khách hàng quan tâm Dự án XI GRAND COURT Quận 10</strong></span></span></p>
      </div>
    </div>
  </div>
  `;
} else if (path.includes("/q7-saigon-riverside")) {
  html_content = `
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TỔNG QUAN KHU CĂN HỘ Q7 SAIGON RIVERSIDE COMPLEX</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <ul>
	<li><span style="font-size:18px;"><strong>Tên chính thức: </strong></span><span style="font-size:16px;">Q7 Saigon Riverside Complex</span></li>
	<li><span style="font-size:18px;"><strong>Vị trí:</strong></span><span style="font-size:16px;"> Số 4, Đường Đào Trí, Phường Phú Thuận, Quận 7, TP.HCM</span></li>
	<li><span style="font-size:18px;"><strong>Chủ đầu tư:</strong></span><span style="font-size:16px;"> Tập đoàn Hưng Thịnh</span></li>
	<li><span style="font-size:18px;"><strong>Nhà thầu xây dựng:</strong></span><span style="font-size:16px;"> Hưng Thịnh Incons</span></li>
	<li><span style="font-size:18px;"><strong>Diện tích dự án:</strong></span><span style="font-size:16px;">75.224,5m2</span></li>
	<li><span style="font-size:18px;"><strong>Mật độ xây dựng:</strong></span><span style="font-size:16px;">38%</span></li>
	<li><span style="font-size:18px;"><strong>Số căn hộ tiêu chuẩn: </strong></span><span style="font-size:16px;">3.580 căn 1PN-3PN, 115 căn Officetel và 53 căn Shophouse.</span>
	<ul>
		<li><span style="font-size:16px;">Căn 1 phòng ngủ (53.20m2 -53.67m2)</span></li>
		<li><span style="font-size:16px;">Căn 2 phòng ngủ (66.66m2 – 73.49m2)</span></li>
		<li><span style="font-size:16px;">Căn hộ 3 phòng ngủ (85.52m2 – 86.69m2)</span></li>
	</ul>
	</li>
	<li><span style="font-size:18px;"><strong>Pháp lý:</strong></span><span style="font-size:16px;"> Sổ Hồng (Người Việt Nam – Lâu Dài), (Người Nước Ngoài – 50 Năm)</span></li>
</ul>

<p><span style="font-size:16px;"><strong>Q7 Saigon Riverside Complex</strong> sở hữu hơn 50 tiện ích đẳng cấp kết hợp cùng ứng dụng công nghệ Smarthome hiện đại, thông minh giúp nâng cao tiện nghi cho cư dân sinh sống tại nơi đây. Các tiện ích được kết hợp hài hòa giữa không gian sống xanh từ thiên nhiên và cuộc sống hiện đại của cư dân.</span></p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">VỊ TRÍ CĂN HỘ Q7 SAIGON RIVERSIDE</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Khu dân cư <strong>Q7 Saigon Riverside</strong> có vị trí đắc địa tại số 04 đường Đào Trí, Phú Thuận, Quận 7, Tp. HCM.Dự án sở hữu tầm nhìn trực tiếp ra sông Sài Gòn mang lại nguồn sinh khí trong lành và điều hòa không khí tự nhiên. Điều này giúp gia đình có sức khỏe thể chất dồi dào, giúp tinh thần luôn thoải mái.</span></p>

<p style="text-align:center"><img alt="" height="431" src="${path_name}/upload/filemanager/images/XI-GRAND/1.PNG" width="920" /></p>

<p> </p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">KẾT NỐI GIAO THÔNG TẠI Q7 SAIGON RIVERSIDE</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Từ khu căn hộ Q7 Riverside rất dễ dàng kết nối đến các vị trí trung tâm trong khu vực như:</span></p>

<ul>
	<li><span style="font-size:16px;">Kết nối Phú Mỹ Hưng trong 5 phút.</span></li>
	<li><span style="font-size:16px;">Kết nối Mũi Đèn Đỏ trong vài bước chân.</span></li>
	<li><span style="font-size:16px;">Kết nối Huỳnh Tấn Phát = > Nguyễn Tất Thành => Quận 1 khoảng 15 phút.</span></li>
	<li><span style="font-size:16px;">Kết nối Cầu Phú Mỹ => Thủ Thiêm trong 15 Phút.</span></li>
</ul>

<p><span style="font-size:16px;">Đặc biệt, vài năm nữa khi cầu Thủ Thiêm 4 xây dựng xong sẽ đến quận 2 và Khu đô thị Sala chỉ trong ít phút đi xe. Vói hạ tầng giao thông thuận tiện, Q7 Saigon Riverside hứa hẹn sẽ là nơi an cư lý tưởng và tuyệt vời cho mọi cư dân.</span></p>

      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">MÔI TRƯỜNG SỐNG, PHONG THỦY TẠI Q7 SAIGON RIVERSIDE</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Chất lượng môi trường sống tại<strong> Q7 Saigon Riverside Complex</strong> không cần phải bàn cãi. Nơi đây thật sự tuyệt bởi liền kề sông Sài Gòn, tiếp diện mặt nước lớn, đón gió và ánh sáng từ sông nên không gian sống tại đây vô cùng xanh mát, trong lành.</span></p>

<p><span style="font-size:16px;">Đứng tại ban công hay qua bất cứ ô cửa nào của căn hộ, cư dân cũng có thể ngắm nhìn dòng sông Sài Gòn thơ mộng, cầu Phú Mỹ đẹp lung linh mang cảm giác thanh bình, yên ả, lấy lại khoảnh khắc cân bằng cho cuộc sống bộn bề tấp nập hàng ngày.</span></p>

<p><span style="font-size:16px;">Thế đất cao – hướng thủy. Nên phong thủy tại dự án được đánh giá khá tốt cho việc thu hút tài lộc, sinh khí cho chủ nhân sở hữu.</span></p>

<p> </p>

<p style="text-align:center"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/Ho-canh-quan-du-an-Q7-Saigon-Riverside-Complex-Hung-Thinh-Quan-7-1.jpg" width="920" /></p>

<p> </p>

<p style="text-align:center"><img alt="" height="515" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/phoi-canh-q7-saigon-riverside.jpg" width="920" /></p>

<p> </p>

<p> </p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TIỆN ÍCH KHU DÂN CƯ Q7 SAIGON RIVERSIDE COMPLEX</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><strong>Q7 Saigon Riverside Complex </strong>được Hưng Thịnh Corp đầu tư hơn 50 tiện ích nội khu hiện đại: Khu thương mại, khu thể thao đa năng, khu vui chơi trẻ em,hồ bơi, quảng trường Symphony, khu sinh hoạt cộng đồng cầu khóa tình yêu, sân vườn trên không, công viên nội khu, hồ cảnh quan, khu BBQ,…</span></p>

<p><span style="font-size:16px;">Ngoài ra, tại khu căn hộ này còn rất nhiều tiện ích vui chơi, giải trí đa dạng khác phù hợp với mọi lứa tuổi, sẽ mang đến một không gian sống đầy đủ tiện nghi, nâng niu và chăm sóc trọn vẹn cho chủ nhân sở hữu.</span></p>

<p style="text-align:center"><img alt="" height="644" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/Khu-thu-gian-tap-Yoga-tai-du-an-Q7-Saigon-Riverside-Complex-Hung-Thinh-Quan-7-qxhp4vjgb1bo2rrzg79wqb7wd9jazm53qenm8swz8o.jpg" width="920" /></p>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/Khu-vui-choi-tre-em-tai-du-an-Q7-Saigon-Riverside-Complex-Hung-Thinh-Quan-7-02.jpg" width="920" />
<figcaption><strong>khu vui chơi trẻ em</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/Khu-vuc-BBQ-du-an-Q7-Saigon-Riverside-Complex-Hung-Thinh-Quan-7-02.jpg" width="920" />
<figcaption><strong>Khu BBQ</strong></figcaption>
</figure>
</div>

<p style="text-align:center"><img alt="" height="644" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/Noi-khu-q7-saigon-riverside-hinh-3-qxhp4tnrxd93fjupr6gnlboz6hskk7xn25cna8zrl4.jpg" width="920" /></p>

<p> </p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">TIỆN ÍCH XUNG QUANH Q7 SAIGON RIVERSIDE COMPLEX</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><strong>Q7 Saigon Riverside Complex </strong>thừa hưởng hàng loạt hạ tầng kinh tế – xã hội và những tiện ích của Khu Nam Sài Gòn, Phú Mỹ Hưng, Quận 7.</span></p>

<p><span style="font-size:16px;">Về thương mại – tài chính:SC VivoCity, The Crescent Mall</span></p>

<p><span style="font-size:16px;">Y tế: Bệnh viện quận 7, bệnh viện FV, Tâm Đức cách dự án không quá 5 phút di chuyển.</span></p>

<p><span style="font-size:16px;">Giáo dục: Sau lưng dự án là hệ thống trường quốc tế Canada, Nhật Bản, Đài Loan… Khu vực Phường Phú Thuận có tất cả trường học liên cấp từ mầm non đến trung học phổ thông.</span></p>

<p><span style="font-size:16px;">Tiện ích công cộng – giải trí – thể thao: Công viên Phú Mỹ Hưng, Sân Gold 36 lỗ, Cầu Ánh Sao, Hồ Bán Nguyệt…</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="670" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/benh-vien-fv-lan-thu-2-dat-chung-nhan-chat-luong-y-te-quoc-te-jci-12-_6816.jpg" width="920" />
<figcaption><strong>Bệnh viện FV</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="512" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/oKaWb6b.jpg" width="920" />
<figcaption><strong>Co.op mart</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="516" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/rmit-university-has-risen-60-places-in-the-2020-times-higher-1662475123.jpg" width="920" />
<figcaption><strong>Đại học RMIT</strong></figcaption>
</figure>
</div>

<p style="text-align:center"><img alt="" height="643" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/1654046130-1312-img_2364.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/ubnd-quan-7-ben-ngoai.jpg" width="920" /></p>

<p> </p>

<p style="text-align:center"><img alt="" height="575" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/image-12.jpg" width="920" /></p>

<p> </p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">MẶT BẰNG CĂN HỘ Q7 SAIGON RIVERSIDE COMPLEX</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Mặt bằng căn hộ được thiết kế rất thông minh và hợp lý. Tất cả căn hộ tại Q7 Riverside đều được thiết kế không gian mở.</span></p>

<p><span style="font-size:16px;">Từng căn hộ đều được chú trọng thiết kế, các căn đều có nhiều hướng nhìn rộng bao quát thành phốnhư trung tâm quận 1, Phú Mỹ Hưng, cầu Phú Mỹ, Sông Sài Gòn,…</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="679" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/mat-bang-dien-hinh-q7-saigon-riv.png" width="920" />
<figcaption><strong>Mặt bằng tổng thể</strong></figcaption>
</figure>
</div>

<p> </p>

<p><span style="font-size:16px;">Nội thất căn hộ Q7 Saigon Riverside lựa chọn màu trắng làm chủ đạo, kết hợp nhẹ nhàng gam xám trắng hiện đại. Sử dụng sàn gỗ sáng kết hợp phân bổ hợp lý hệ đèn trần. Do vậy, mang đến không gian sống ấm cúng, ngập tràn ánh sáng.</span></p>

<p><span style="font-size:16px;">Thiết kế các căn hộ tận dụng được tất cả các góc làm cho các phòng có đầy đủ các tiện ích mà vẫn rộng rãi, đơn giản tạo nên không gian hài hòa</span>.</p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="679" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/mbo1.png" width="920" />
<figcaption><strong>Mặt bằng tầng 1</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="679" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/mb1.png" width="920" />
<figcaption><strong>Mặt bằng tầng 5</strong></figcaption>
</figure>
</div>

<p style="text-align:center"><img alt="" height="845" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block1.png" width="920" /></p>

<p style="text-align:center"><img alt="" height="846" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block3.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="774" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block4.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="1049" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/block2.jpg" width="1200" /></p>

<p style="text-align: center;"> </p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">Nội thất căn hộ Q7 Saigon Riverside</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Căn hộ <em><strong>Q7 Saigon Riverside Complex </strong></em>bàn giao các thiết bị nội thất bàn giao khá cao cấp so với phân khúc, như:</span></p>

<ul>
	<li><span style="font-size:16px;">Cửa gỗ chống cháy và khóa từ 3 lớp</span></li>
	<li><span style="font-size:16px;">Gạch men cao cấp</span></li>
	<li><span style="font-size:16px;">Sàn gỗ chổng thấm tiêu chuẩn châu Âu cho phòng ngủ</span></li>
	<li><span style="font-size:16px;">Ban công với cửa đôi cách âm</span></li>
	<li><span style="font-size:16px;">Thiết bị vệ sinh Toto.</span></li>
	<li><span style="font-size:16px;">Full bộ nội thất bếp Malloca: Bếp từ, máy hút mùi, bồn rửa cao cấp, mặt đá cao cấp Solid Surface, kính cường lực ốp bếp</span></li>
	<li><span style="font-size:16px;">Tủ bếp gỗ cao cấp An Cường: đầy đủ tủ bếp trên, tủ bếp dưới</span></li>
	<li><span style="font-size:16px;">Hệ thống điều khiển thiết bị điện SmartHome điện quang</span></li>
</ul>

<p><span style="font-size:16px;">Đặc biệt, việc đảm bảo an toàn tuyệt đối cho cư dân với hệ thống phòng cháy chữa cháy được vận hành theo quy trình Nhật Bản là điểm cộng của <strong>Q7 Saigon Riverside Complex</strong> mà không phải dự án nào cũng có</span></p>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Nội thất căn hộ mẫu 2 phòng ngủ</strong></span></span></p>

<p style="text-align:center"><img alt="" height="609" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm21ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="1305" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm22ee.jpg" width="920" /></p>

<p> </p>

<p style="text-align:center"><img alt="" height="588" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm23ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm24ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm25ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm26ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="627" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm28ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm27ee.jpg" width="920" /></p>

<p><span style="color:#ff6633;"><span style="font-size:20px;"><strong>Nội thất căn hộ mẫu 3 phòng ngủ</strong></span></span></p>

<p style="text-align:center"><img alt="" height="622" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm31ee.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="458" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/kb7.png" width="920" /></p>

<p style="text-align:center"><img alt="" height="630" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm32ee.jpg" width="920" /></p>

<p style="text-align: center;"> </p>

<p style="text-align:center"><img alt="" height="639" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm39ee.jpg" width="920" /></p>

<p style="text-align: center;"> </p>

<p style="text-align:center"><img alt="" height="626" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm34ee.jpg" width="920" /></p>

<p style="text-align: center;"> </p>

<p style="text-align:center"><img alt="" height="634" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm36ee.jpg" width="920" /></p>

<p style="text-align: center;"> </p>

<p style="text-align:center"><img alt="" height="609" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm37ee.jpg" width="920" /></p>

<p style="text-align: center;"> </p>

<p style="text-align:center"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/nm38ee.jpg" width="920" /></p>

<p style="text-align: center;"> </p>

<p style="text-align: center;"> </p>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">Những yếu tố tăng giá trị đầu tư tại Q7 Saigon Riverside - 4 Đào Trí Quận 7</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Cầu Thủ Thiêm 4 dài 2km với kinh phí đầu tư 5.200 tỷ đồng, nối từ đường Nguyễn Văn Linh (khu Nam, quận 7) đến Khu đô thị mới Thủ Thiêm (khu Đông, quận 2) đã được phê duyệt, tiến thành khởi công vào tháng 10/2019 giúp rút ngắn thời gian di chuyển từ dự án đến KĐT Thủ Thiêm và đại lộ Mai Chí Thọ khoảng 10 phút.</span></p>

<p><span style="font-size:16px;">Các dự án xung quanh Đào Trí:<strong> Sunshine City Sài Gòn, Sky 89, Jamona City, River City, Grand Nest, An Gia Skyline, An Gia Riverside, River Panorama</strong>, đồng loạt sáng đèn cùng thời điểm <strong>Q7 Saigon Riverside Complex </strong>bàn giao.</span></p>

<p><span style="font-size:16px;">Khu vui chơi giải trí lớn nhất <strong>Quận 7–Saigon Peninsula </strong>Mũi Đèn Đỏ. Được Vạn Thịnh Phát liên doanh cùng Pavilion Group và Genting Group triển khai 2016 kinh phí 6 tỷ đô. Khu phức hợp thiết kế tiêu chuẩn 6 sao bao gồm công viên đa chức năng, bến cảng du thuyền quốc tế, văn phòng, khách sạn, khu biệt thự, căn hộ và các khu chức năng khác cùng nhiều hạng mục công trình hạ tầng kỹ thuật đang từng bước hoàn thiện.</span></p>

<p><span style="font-size:16px;">Ngoài ra, hạ tầng đô thị, những dự án đã lên kế hoạch triển khai tại Quận 7 được chính phủ phê duyệt, sẽ khởi công trong thời gian tới như:</span></p>

<p><span style="font-size:16px;">–Tuyến đường sắt Monorail số 2dọc theo đại lộ Nguyễn Văn Linh .</span></p>

<p><span style="font-size:16px;">–Đường trục Bắc Nam TP.HCM với tổng mức đầu tư gần 10.000 tỷ đồng.</span></p>

<p><span style="font-size:16px;">–Hầm chui Nguyễn Văn Linh – Nguyễn Hữu Thọ.</span></p>

<p><span style="font-size:16px;">–Cầu Nguyễn Khoáinối dài từ Quận 4 qua Quận 7.</span></p>

<p><span style="font-size:16px;">–Cầu Phước Khánh nối khu Nam Sài Gòn với Nhơn Trạch (Đồng Nai).</span></p>

<p><span style="font-size:16px;">Tiềm năng tăng giá tại khu vực Đào Trí nói riêng và Quận 7 nói chung khi các yếu tố chờ này hiện hữu. Chúng tôi tin chắc rằng giá trị bất động sản tại đây sẽ còn tăng lên 1 bậc. Việc cho dự án <strong>Q7 Saigon Riverside Complex</strong> để đầu tư trong giai đoạn hiện tại theo chúng tôi rất khả quan.</span></p>

<p><span style="color:#ff6633;"><span style="font-size:22px;"><strong>Chân thành cảm ơn Quý khách hàng quan tâm Dự án  Q7 SAIGON RIVERSIDE COMPLEX</strong></span></span></p>
      </div>
    </div>
  </div>
  `;
} else if (path.includes("/q7-boulevard")) {
  html_content = `
  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">VỊ TRÍ ĐẮT GIÁ TẠI TÂM ĐIỂM QUẬN 7</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><em><strong>Q7 Boulevard</strong></em> vươn mình kiêu hãnh ngay đại lộ Nguyễn Lương Bằng – một trong những trục thương mại, tài chính sầm uất nhất khu Nam và liền kề đô thị kiểu mẫu Phú Mỹ Hưng hiện đại.<em><strong> Q7 Boulevard</strong></em> kiến tạo nên chốn an cư lý tưởng và ngập tràn hơi thở thiên nhiên giữa nhịp sống sôi động của Nam Sài Gòn.</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="712" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/vitri.png" width="920" />
<figcaption><strong>Vị trí dự án Q7 BOULEVARD</strong></figcaption>
</figure>
</div>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">HƯỚNG NHÌN THỰC TẾ TỪ Q7 BOULEVARD</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="437" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/nm1.png" width="920" />
<figcaption><strong>TẦM NHÌN VỀ SÔNG SÀI GÒN</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="437" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/nm2.png" width="920" />
<figcaption><strong>TẦM NHÌN VỀ PHÚ MỸ HƯNG</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="437" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/nm3.png" width="920" />
<figcaption><strong>TẦM NHÌN VỀ NHÀ BÈ</strong></figcaption>
</figure>
</div>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">THIẾT KẾ HIỆN ĐẠI GẦN GŨI THIÊN NHIÊN</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Tại<em><strong> Q7 Boulevard</strong></em>, cuộc sống sẽ trở nên thú vị hơn khi mỗi căn hộ đều được thiết kế và chăm chút đến từng chi tiết, cư dân sẽ có những trải nghiệm hoàn toàn mới trong một không gian sống đầy tiện nghi. Các căn hộ được thiết kế theo phong cách trang nhã phù hợp với lối sống hiện đại, tối đa hóa không gian để đón nhận trọn vẹn ánh sáng tự nhiên và làn gió trời tươi mát.</span></p>

<p style="text-align:center"><img alt="" height="568" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/hn1.png" width="920" /></p>

<p> </p>

      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">ĐẦY ĐỦ TIỆN ÍCH TRỌN VẸN TRẢI NGHIỆM</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;"><em><strong>Q7 Boulevard </strong></em>sở hữu nhiều tiện ích nội khu hoàn chỉnh, hiện đại - nơi bạn và gia đình sẽ đư</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="613" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/ban-can-ho-chung-cu-quan-7-tp-ho-chi-minh-1653643147-nhadat_cafeland_vn.jpg" width="920" />
<figcaption><strong>Hồ bơi dự án</strong></figcaption>
</figure>
</div>

<table border="1" cellpadding="1" cellspacing="1" style="width:920px;">
	<tbody>
		<tr>
		</tr>
	</tbody>
</table>
      </div>
    </div>
  </div>


  <div class="custom-accordion">
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">THỪA HƯỞNG CHUỖI TIỆN ÍCH ĐẲNG CẤP TỪ PHÚ MỸ HƯNG</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <p><span style="font-size:16px;">Chỉ cách khu đô thị Phú Mỹ Hưng vài bước chân, <em><strong>Q7 Boulevard</strong></em> thừa hưởng trọn vẹn những tiện ích đạt tiêu chuẩn quốc tế trong khu vực như các tổ hợp trung tâm thương mại – siêu thị - dịch vụ giải trí, hệ thống y tế, giáo dục hàng đầu…</span></p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/crescent-mall-quan-7-1712070085.jpg" width="920" />
<figcaption><strong>TRUNG TÂM THƯƠNG MẠI CRESCENT</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="593" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/1-cam-nang-mua-sam-vui-choi-tai-vivo-city-quan-7.jpg" width="920" />
<figcaption><strong>TRUNG TÂM THƯƠNG MẠI SC VIVO</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="518" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/pv3.jpg" width="920" />
<figcaption><strong>BỆNH VIỆN FV</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="519" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/Thi%E1%BA%BFt-k%E1%BA%BF-ch%C6%B0a-c%C3%B3-t%C3%AAn-93.png" width="920" />
<figcaption><strong>TRUNG TÂM HỘI CHỢ VÀ TRIỄN LÃM SÀI GÒN (SECC)</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="607" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/truong-quoc-te-canada-quan-7.jpg" width="920" />
<figcaption><strong>TRƯỜNG QUỐC TẾ CANADA</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="575" src="${path_name}/upload/filemanager/images/XI-GRAND/Q7%20BOULEVARD/cau-anh-sao-di-duong-nao.jpg" width="920" />
<figcaption><strong>HỒ BÁN NGUYỆT_ CẦU ÁNH SAO</strong></figcaption>
</figure>
</div>

<p style="text-align: center;"><span style="color:#ff6633;"><span style="font-size:22px;"><strong>Chân thành cảm ơn Quý khách hàng quan tâm Dự án  Q7 BOULEVAR</strong></span></span></p>
      </div>
    </div>
  </div>
  `;
}

container.innerHTML = html_content;

// Chèn vào phần tử có id 'toc-content'
const tocContent = document.getElementById("toc-content");
if (tocContent) {
  tocContent.appendChild(container);
}

// Add JS behavior to toggle accordion
const items = container.querySelectorAll(".custom-accordion-button");

function toggleAccordion() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  // Open this one
  if (!isExpanded) {
    this.setAttribute("aria-expanded", "true");
  } else {
    this.setAttribute("aria-expanded", "false");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
