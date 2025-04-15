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
if (path.includes("/du-an-d-homme-q6")) {
  const container = document.createElement("div");
  container.className = "custom-container";
  container.innerHTML = `
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

<p><span style="font-size:16px;"><img alt="" height="94" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/DientichDat-280x120.png" width="220" /><img alt="" height="94" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/MatDoXayDung-280x120.png" width="220" /><img alt="" height="94" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/QuyMoCongTrinh-280x120-2.png" width="220" /><img alt="" height="94" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/TuVanThietKe-280x120.png" width="220" /></span></p>

<p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-1.jpg" width="920" /></p>


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
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-2.jpg" width="920" />
<figcaption><strong>Vị trí D-HOMME Quận 6</strong></figcaption>
</figure>
</div>

<p><span style="font-size:16px;">Hệ thống tuyến Metro số 6 dài 6,8 km (Bà Quẹo – Vòng xoay Phú Lâm) kết nối với tuyến Metro số 2 và số 3, tạo diện mạo mới cho khu vực.</span></p>

<p> </p>

<p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-3.jpg" width="920" /></p>


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
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-5.jpg" width="920" />
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
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-4.jpg" width="920" />
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
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-6.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 1,2</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-7.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 3,4</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-8.jpg" width="920" />
<figcaption><strong>Mặt bầng tầng  5, 6-12</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-9.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 12A, 12B-16,20-22,25-28</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-10.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 17, 18</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-11.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng 19, 23</strong></figcaption>
</figure>
</div>

<p> </p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-12.jpg" width="920" />
<figcaption><strong>Mặt bằng tầng23A, 29</strong></figcaption>
</figure>
</div>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-13.jpg" width="920" />
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

<p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-14.jpg" width="920" /></p>

<p> </p>
      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">MẶT BẰNG CĂN HỘ</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
      <p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-15.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-16.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-17.jpg" width="920" /></p>

<p style="text-align:center"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-18.jpg" width="920" /></p>

      </div>
    </div>
    <div class="custom-accordion-item">
      <button class="custom-accordion-button" aria-expanded="false">
        <span class="custom-accordion-title">6 LÍ DO ĐỂ SỞ HỮU CĂN HỘ D-HOMME</span>
        <span class="custom-icon" aria-hidden="true">+</span>
      </button>
      <div class="custom-accordion-content">
        <div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="" height="560" src="http://demo80.ninavietnam.org/2025/thang-3/ctytnhhautubatongsancao_0304725/upload/filemanager/images/XI-GRAND/Q7%20RIVERSIDE/D-HOMME/(C%C5%A9)%20D-Homme%20mini%20brochure-h%C3%ACnh%20%E1%BA%A3nh-19.jpg" width="920" />
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
}
