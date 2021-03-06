// trang array obj data list
// copy lên mock API
// link mock API : https://mockapi.io/projects/6268162901dab900f1c9969c

const HotelList = [
    { 
        "id": "H-01",
        "city":"Đà Lạt",
        "name": "Swiss-Belresort Tuyen Lam Dalat",
        "address": "Hồ Tuyền Lâm,Đà Lạt",
        "averagePrice": "2 026 706",
        "totalRating": "8.5",
        "star": "5",
        "introduce": "View phòng ngủ là sân golf nằm giữa thung lũng, núi bao quanh rất đẹp phòng rộng rãi, sạch sẽ và khá tiện nghi. Nếu may mắn các bạn có thể thức dậy buổi sáng với cảnh sương mù bao phủ cả thung lũng và khách sạn, hệt như ở Sapa. Buffet sáng ngon và thức ăn đa dạng, vừa ăn sắng cafe và ngắm cảnh thung lũng rất thú vị. Bữa tối rất ngon và giá hợp lý so với chuẩn 4*. Khách sạn có xe đưa đón về trung tâm Đà Lạt theo các khung giờ cố định và xe đưa đón sân bay 2 chiều rất tiện lợi, chỉ cần đặt trước với tiếp tân là sẽ được sắp xếp chu đáo. Rất hài lòng với resort này và sẽ quay lại lần sau.",
        "addressDetail" : "Phân khu chức năng 7&8, Khu du lịch hồ Tuyền Lâm, Phường 3, Tp. Đà Lạt, Tỉnh Lâm Đồng, Hồ Tuyền Lâm, Đà Lạt, Việt Nam",
        "summary": "Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Hồ Tuyền Lâm của Đà Lạt, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Crazy House nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-01-1.jpg",
        "img2": "./Hotel-Images/H-01-2.jpg",
        "img3": "./Hotel-Images/H-01-3.jpg",
        "img4": "./Hotel-Images/H-01-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Bữa sáng', 'Wifi miễn phí']",
        "room1Name": "Phòng Deluxe hướng núi giường King",
        "room1Img": "./Hotel-Images/H-01-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"1 187 104",
        "room2Name": "Twin Deluxe Golf View",
        "room2Img": "./Hotel-Images/H-01-R2.jpg",
        "room2Capacity": "4",
        "room2Price":"2 566 894",
        "suggest" : "true"
    },
    { 
        "id": "H-02",
        "city":"Đà Lạt",
        "name": "Đà Lạt Wonder Resort (Dalat Wonder Resort)",
        "address": "Hồ Tuyền Lâm,Đà Lạt",
        "averagePrice": "1 966 899",
        "totalRating": "7.7",
        "star": "4",
        "introduce": "KS có view hồ Tuyền Lâm khá đẹp, khung cảnh xung quanh villa cũng rất đẹp. Tuy nhiên, khách sạn mới hoàn thiện và vẫn còn đang xây dựng nên nhiều vị trí vẫn còn bề bộn nhưng vẫn chấm 5* cho cảnh quan của resort, khi hoàn thiện toàn bộ có lẽ sẽ là 1 nơi vô cùng lý tưởng để nghỉ dưỡng. Và vì KS còn mới nên dịch vụ chưa được chuyên nghiệp, vd như hành lý của khách gửi không có nhân viên đem lên tận phòng mà khách phải tự mang, KS có xe điện chở từ sảnh chính đến villa và ngược lại nhưng chỉ phục vụ lúc check in & out, hôm chúng tôi ở phải đi bộ ra sảnh để dùng bữa sáng nhưng vì khung cảnh đẹp và villa tôi ở cũng gần nên cũng không vấn đề gì. KS có xe trung chuyển vào Đà Lạt, không biết là do đông khách nên NV không phục vụ được tốt hay như nào, tôi đã gọi điện thoại đặt xe từ chiều cho chuyến tối vào TP nhưng khi đi bộ ra sảnh để đón xe thì lễ tân thông báo là đã full chỗ !?! Tuy nhiên, lễ tân cũng đã hỗ trợ chúng tôi check in sớm.",
        "addressDetail" : "Số 19, đường Hoa Hồng, hồ Tuyền Lâm, phường 4, thành phố Đà Lạt, Lâm Đồng, Hồ Tuyền Lâm, Đà Lạt, Việt Nam",
        "summary": "Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Hồ Tuyền Lâm của Đà Lạt, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Crazy House nổi tiếng. Được xếp hạng 4 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-02-1.jpg",
        "img2": "./Hotel-Images/H-02-2.jpg",
        "img3": "./Hotel-Images/H-02-3.jpg",
        "img4": "./Hotel-Images/H-02-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Dọn phòng hằng ngày', 'Wifi miễn phí']",
        "room1Name": "Deluxe giường đôi hướng hồ (Deluxe Double Lake View)",
        "room1Img": "./Hotel-Images/H-02-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"1 287 007",
        "room2Name": "Phòng Hai Giường Đơn Thủ Tướng (Premier Twin Room)",
        "room2Img": "./Hotel-Images/H-02-R2.jpg",
        "room2Capacity": "4",
        "room2Price":"2 766 800",
        "suggest" : "false"
    },
    {   
        "id": "H-03",
        "city":"Đà Lạt",
        "name": "Khách sạn Du Parc Đà Lạt (Du Parc Novotel Hotel Dalat)",
        "address": "Trung tâm Đà Lạt,Đà Lạt",
        "averagePrice": "1 458 809",
        "totalRating": "8",
        "star": "4",
        "introduce": "Ở khách sạn Novotel Dalat ăn sáng tại nhà hàng Bưu Điện đối diện bên đường rất tuyệt, nhất là ở Đà Lạt để tìm được 1 quán ăn ngon, sạch, ưng ý, gần khách sạn là không dễ với du khách.",
        "addressDetail" : "15 Trần Phú, Trung tâm Đà Lạt, Đà Lạt, Việt Nam",
        "summary": "Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Trung tâm Đà Lạt của Đà Lạt, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Crazy House nổi tiếng. Được xếp hạng 4 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng mát-xa, xông khô và spa ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-03-1.jpg",
        "img2": "./Hotel-Images/H-03-2.jpg",
        "img3": "./Hotel-Images/H-03-3.jpg",
        "img4": "./Hotel-Images/H-03-4.jpg",
        "convenient": "['Gần phương tiện công cộng', 'Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Bữa sáng', 'Wifi miễn phí']",
        "room1Name": "Phòng Suite (Suite Room)",
        "room1Img": "./Hotel-Images/H-03-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"1 287 006",
        "room2Name": "Phòng Superior 2 giường đơn (Superior Room Twin)",
        "room2Img": "./Hotel-Images/H-03-R2.jpg",
        "room2Capacity": "2",
        "room2Price":"1 466 994",
        "suggest" : "false"
    },
    {   
        "id": "H-04",
        "city":"Nha Trang",
        "name": "Muong Thanh Luxury Khanh Hoa",
        "address": "Xương Huân,Nha Trang",
        "averagePrice": "952 159",
        "totalRating": "8.9",
        "star": "5",
        "introduce": "Cảm ơn toàn thể nhân viên khách sạn đã hỗ trợ mình trong suốt quá trình lưu trú, đặc biệt cảm ơn ban Mỹ Anh và Chi lễ tân rất nhiệt tình ,thân thiện . Phòng mình có thể thấy 2 view, hướng biển và hướng mặt đường Trần Phú rất lý tưởng khi ngắm cảnh về ban đêm và ban ngày. Rất hài lòng, mình sẽ quay lại nếu có cơ hội đến với Nha Trang.",
        "addressDetail" : "Khu 01, Khu Dân cư cồn Tân Lập, Phường Xương Huân, Xương Huân, Nha Trang, Việt Nam",
        "summary": "Nằm ở vị trí trung tâm tại Xương Huân của Nha Trang, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Hãy nhớ dành một chút thời gian để thăm thú Vinpearl Land Nha Trang cũng như Biển Nha Trang gần đó. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-04-1.jpg",
        "img2": "./Hotel-Images/H-04-2.jpg",
        "img3": "./Hotel-Images/H-04-3.jpg",
        "img4": "./Hotel-Images/H-04-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đáng tiền nhất', 'Bữa sáng', 'Wifi miễn phí']",
        "room1Name": "Deluxe giường King Hướng biển (Deluxe King Ocean View)",
        "room1Img": "./Hotel-Images/H-04-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"787 104",
        "room2Name": "Phòng Deluxe 3 Người Nhìn Ra Biển (Deluxe Triple Room with Sea View)",
        "room2Img": "./Hotel-Images/H-04-R2.jpg",
        "room2Capacity": "3",
        "room2Price":"1 266 894",
        "suggest" : "true"
    },
    {   
        "id": "H-05",
        "city":"Nha Trang",
        "name": "Khách sạn Sunrise Nha Trang Beach Hotel & Spa (Sunrise Nha Trang Beach Hotel & Spa)",
        "address": "Xương Huân,Nha Trang",
        "averagePrice": "2 210 225",
        "totalRating": "8.7",
        "star": "5",
        "introduce": "Resort có một vị trí rất tuyệt vời đối với chúng tôi vì tôi vừa muốn yên tĩnh vừa muốn được ở gần các khu phố trung tâm để có thể đi bộ và tìm hiểu địa phương. So với giá phòng thì mọi thứ đều tương xứng, nhất là buffet sáng rất phong phú. Các món ăn ở nhà hàng Imperial cũng rất ngon, đặc biệt tôi rất thích món salad cá hồi vì nó khá lạ và ngon miệng so với những nhà hàng nổi tiếng khác mà tôi đã ăn món này. Tôi cũng rất thích mùi thơm tho sạch sẽ của khách sạn, từ phòng ngủ đến hành lang và thang máy đều có mùi thơm dễ chịu đặc biệt là buổi sáng khi có thêm mùi cafe và bánh mì mới. Bạn có thể ngâm mình trong bồn tắm ngoài ban công, gọi một đĩa hoa quả và bật nhạc lên và nằm thưởng thức cảnh hoàng hôn và bình mình với một khung cảnh tuyệt đẹp.",
        "addressDetail" : "12 Trần Phú, Xương Huân, Nha Trang, Việt Nam",
        "summary": "Nằm ở vị trí trung tâm tại Xương Huân của Nha Trang, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Hãy nhớ dành một chút thời gian để thăm thú Vinpearl Land Nha Trang cũng như Biển Nha Trang gần đó. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-05-1.jpg",
        "img2": "./Hotel-Images/H-05-2.jpg",
        "img3": "./Hotel-Images/H-05-3.jpg",
        "img4": "./Hotel-Images/H-05-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Bữa sáng', 'Wifi miễn phí', 'Mới sửa sang']",
        "room1Name": "Phòng Premium Deluxe Giường Đôi Nhìn Ra Đại Dương (Premium Deluxe Double Ocean View)",
        "room1Img": "./Hotel-Images/H-05-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"1 587 104",
        "room2Name": "Premium Deluxe Twin Ocean View",
        "room2Img": "./Hotel-Images/H-05-R2.jpg",
        "room2Capacity": "4",
        "room2Price":"2 766 894",
        "suggest" : "true"
    },
    {   
        "id": "H-06",
        "city":"Nha Trang",
        "name": "Khu nghỉ dưỡng Amiana Nha Trang (Amiana Resort Nha Trang)",
        "address": "Vĩnh Hòa, Nha Trang",
        "averagePrice": "2 560 000",
        "totalRating": "8",
        "star": "5",
        "introduce": "",
        "addressDetail" : "Nha Trang Bay, Phạm Văn Đồng , Vĩnh Hòa, Nha Trang, Việt Nam",
        "summary": "Nằm ở vị trí trung tâm tại Vĩnh Hòa của Nha Trang, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Vinpearl Land Nha Trang nổi tiếng.",
        "img1": "./Hotel-Images/H-06-1.jpg",
        "img2": "./Hotel-Images/H-06-2.jpg",
        "img3": "./Hotel-Images/H-06-3.jpg",
        "img4": "./Hotel-Images/H-06-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Bữa sáng', 'Wifi miễn phí']",
        "room1Name": "Phòng Deluxe King (Deluxe King Room)",
        "room1Img": "./Hotel-Images/H-06-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"2 287 104",
        "room2Name": "Biệt thự 3 Phòng ngủ Nhìn ra Biển có Hồ bơi Riêng (Three-Bedroom Ocean Villa with Private Pool)",
        "room2Img": "./Hotel-Images/H-06-R2.jpg",
        "room2Capacity": "6",
        "room2Price":"13 566 894",
        "suggest" : "true"
    },
    {   
        "id": "H-07",
        "city":"Hội An",
        "name": "La Siesta Hoi An Resort & Spa",
        "address": "Thanh Hà,Hội An",
        "averagePrice": "2 566 899",
        "totalRating": "9.2",
        "star": "5",
        "introduce": "KS gần phố cổ, đi xe đạp chỉ vài phút là tới. Nhân viên khách sạn đặc biệt thân thiện. Khách sạn có vẻ xây dựng lâu nhưng sạch sẽ, có nét rất Hội An, nhà mình đi chơi đêm về còn có người dọn phòng và để trà hoa giúp ngủ ngon trên giường, dịch vụ rất tốt. Nhược điểm nhỏ duy nhất đó là bữa sáng chưa phong phú nhưng vẫn chấp nhận được. Chắc chắn lần sau quay lại mình sẽ vẫn chọn ks này.",
        "addressDetail" : "134 Hùng Vương, Thanh Hà, Hội An, Việt Nam",
        "summary": "Nằm ở vị trí chiến lược tại Thanh Hà, cho phép quý khách lui tới và gần với các điểm thu hút và tham quan địa phương. Đừng rời đi trước khi ghé thăm Phố cổ Hội An nổi tiếng.",
        "img1": "./Hotel-Images/H-07-1.jpg",
        "img2": "./Hotel-Images/H-07-2.jpg",
        "img3": "./Hotel-Images/H-07-3.jpg",
        "img4": "./Hotel-Images/H-07-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Gần phương tiện công cộng', 'Đáng tiền nhất', 'Wifi miễn phí']",
        "room1Name": "Khu Club cao cấp Suite có ban công (Club Wing Premium Suite with Terrace)",
        "room1Img": "./Hotel-Images/H-07-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"2 087 104",
        "room2Name": "Khu Cổ điển Phòng Gia đình (Classic Wing Family Room)",
        "room2Img": "./Hotel-Images/H-07-R2.jpg",
        "room2Capacity": "4",
        "room2Price":"3 166 894",
        "suggest" : "false"
    },
    {   
        "id": "H-08",
        "city":"Hội An",
        "name": "Khách sạn Gem Riverside Hội An (Gem Riverside Hotel Hoi An)",
        "address": "Cẩm Nam,Hội An",
        "averagePrice": "1 126 899",
        "totalRating": "9",
        "star": "3.5",
        "introduce": "Khách sạn đẹp, nhân viên nhiệt tình, phòng chúng tôi sạch và xinh xắn. Kỳ nghỉ gia đình tuyệt vời, rất gần các điểm tham quan , đặc biệt gần với Ký ức Hội an. Cảm ơn khách sạn và sẽ giới thiệu cho gia đình và bạn bè",
        "addressDetail" : "14 Luong Nhu Bich, Cam Nam, Hoi An, Cẩm Nam, Hội An, Việt Nam",
        "summary": "Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các phòng. Nằm ở vị trí trung tâm tại Cẩm Nam của Hội An, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Phố cổ Hội An nổi tiếng. Được xếp hạng 3.5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng mát-xa, bồn tắm nước nóng và phòng xông ướt ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-08-1.jpg",
        "img2": "./Hotel-Images/H-08-2.jpg",
        "img3": "./Hotel-Images/H-08-3.jpg",
        "img4": "./Hotel-Images/H-08-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Đáng tiền nhất', 'Wifi miễn phí']",
        "room1Name": "Superior giường đôi (Superior Double)",
        "room1Img": "./Hotel-Images/H-08-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"1 187 104",
        "room2Name": "Cozy, Guest room, 2 Queen",
        "room2Img": "./Hotel-Images/H-08-R2.jpg",
        "room2Capacity": "4",
        "room2Price":"2 566 894",
        "suggest" : "true"
    },
    {   
        "id": "H-09",
        "city":"Hội An",
        "name": "Vinpearl Resort & Spa Hội An (Vinpearl Resort & Spa Hoi An)",
        "address": "Cửa Đại,Hội An",
        "averagePrice": "2 550 899",
        "totalRating": "8.4",
        "star": "5",
        "introduce": "",
        "addressDetail" : "Cửa Đại, Hội An, Quảng Nam, Việt Nam",
        "summary": "Nằm ở vị trí trung tâm tại Cửa Đại của Hội An, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Phố cổ Hội An nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-09-1.jpg",
        "img2": "./Hotel-Images/H-09-2.jpg",
        "img3": "./Hotel-Images/H-09-3.jpg",
        "img4": "./Hotel-Images/H-09-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Dọn phòng hằng ngày', 'Wifi miễn phí']",
        "room1Name": "Phòng hướng biển 3 phòng ngủ (3-Bedroom Ocean View)",
        "room1Img": "./Hotel-Images/H-09-R1.jpg",
        "room1Capacity": "6",
        "room1Price":"13 187 104",
        "room2Name": "Phòng Deluxe với Giường cỡ King (Deluxe Room King Bed)",
        "room2Img": "./Hotel-Images/H-09-R2.jpg",
        "room2Capacity": "2",
        "room2Price":"2 566 894",
        "suggest" : "false"
    },
    {   
        "id": "H-10",
        "city":"Phú Quốc",
        "name": "Vinoasis Phu Quoc (Unlimited Access to Water Park)",
        "address": "Gành Dầu,Đảo Phú Quốc",
        "averagePrice": "3 554 899",
        "totalRating": "8.4",
        "star": "5",
        "introduce": "May mắn là Phú Quốc không những Vinpearl mà còn có cả Vinsafari.",
        "addressDetail" : "Bãi Dài, Gành Dầu, Phú Quốc, Việt Nam, Gành Dầu, Đảo Phú Quốc, Việt Nam",
        "summary": "Nằm ở vị trí trung tâm tại Gành Dầu của Đảo Phú Quốc, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Sao Beach nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-10-1.jpg",
        "img2": "./Hotel-Images/H-10-2.jpg",
        "img3": "./Hotel-Images/H-10-3.jpg",
        "img4": "./Hotel-Images/H-10-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Bãi biển riêng', 'Bữa sáng', 'Wifi miễn phí']",
        "room1Name": "Junior Suite - VinWonders and Safari Ticket Included",
        "room1Img": "./Hotel-Images/H-10-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"1 887 104",
        "room2Name": "Standard Twin Room",
        "room2Img": "./Hotel-Images/H-10-R2.jpg",
        "room2Capacity": "2",
        "room2Price":"1 866 894",
        "suggest" : "true"
    },
    {   
        "id": "H-11",
        "city":"Phú Quốc",
        "name": "Khu nghỉ dưỡng Dusit Princess Moonrise (Dusit Princess Moonrise Beach Resort)",
        "address": "Cửa Lấp, Đảo Phú Quốc",
        "averagePrice": "2 585 527",
        "totalRating": "9.1",
        "star": "5",
        "introduce": "Khách sạn sạch đẹp và buffer sáng phong phú ngon miệng ,người quản lí rất nhiệt tình.nhân viên rất trung thực vì mình để quên dt trên phòng khi ra về nhưng vẫn được NV khách sạn trả lại. Điều này mình rất cám ơn. Có điều vẫn mong muốn KS khắc phục khi có du khách lưu trú tại phòng kế bên thì hạn chế ko nên tiến hành các công trình phụ hoặc sữa chữa gây tiếng ồn. Lúc minh ở có vấn đề này.Mình có phản ánh và KS cũng đã khắc phục ngay. Nếu có dịp mình vẫn sẽ quay lại.",
        "addressDetail" : "Tran Hung Dao Street, Group 2, Cua Lap Village, Duong To Commune, Phu Quoc Island, Cửa Lấp, Đảo Phú Quốc, Việt Nam ",
        "summary": "Ngoài tiêu chuẩn Dusit Care, tất cả khách đều được truy cập Wi-Fi miễn phí trong tất cả các phòng và đỗ xe miễn phí nếu đến bằng ô tô. Nằm ở vị trí trung tâm tại Cửa Lấp của Đảo Phú Quốc, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Sao Beach nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, mát-xa và bể bơi ngoài trời ngay trong khuôn viên",
        "img1": "./Hotel-Images/H-11-1.jpg",
        "img2": "./Hotel-Images/H-11-2.jpg",
        "img3": "./Hotel-Images/H-11-3.jpg",
        "img4": "./Hotel-Images/H-11-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Đáng tiền nhất', 'Wifi miễn phí']",
        "room1Name": "Phòng Cao cấp Deluxe hướng biển giường King (Premium Deluxe Ocean View King Room)",
        "room1Img": "./Hotel-Images/H-11-R1.jpg",
        "room1Capacity": "2",
        "room1Price":"2 487 104",
        "room2Name": "Suite Moonrise (Moonrise Suite)",
        "room2Img": "./Hotel-Images/H-11-R2.jpg",
        "room2Capacity": "4",
        "room2Price":"3 766 894",
        "suggest" : "true"
    },
    {   
        "id": "H-12",
        "city":"Phú Quốc",
        "name": "Khu nghỉ dưỡng bãi biển Pullman Phú Quốc (Pullman Phu Quoc Beach Resort)",
        "address": "Dương Tô,Đảo Phú Quốc",
        "averagePrice": "4 111 111",
        "totalRating": "8.9",
        "star": "5",
        "introduce": "Gần sân bay, bãi biển đẹp - Đồ ăn ngon, nhiều nhà hàng để lựa chọn. Bể bơi siêu to. - Khách sạn mới xây, hiện đại, sạch đẹp. Nhân viên rất thân thiện. Chính sách giá của agoda rất tốt. Góp ý nhỏ là nhà hàng sát biển hơi nhiều muỗi vào buổi chiều tối. Ngồi ngắm hoàng hôn ở nhà hàng này tuyệt vời",
        "addressDetail" : "Group 6, Ban Quy Hamlet, Duong Bao, Dương Tô, Đảo Phú Quốc, Việt Nam",
        "summary": "Hãy thực hiện hành trình tuyệt vời nhất của quý khách tới Đảo Phú Quốc với tiêu chuẩn ALLSAFE đã cam kết và tận hưởng Wi-Fi miễn phí trong tất cả các phòng. Nằm ở vị trí trung tâm tại Dương Tô của Đảo Phú Quốc, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Sao Beach nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi trong nhà, bể bơi ngoài trời và xông khô ngay trong khuôn viên.",
        "img1": "./Hotel-Images/H-12-1.jpg",
        "img2": "./Hotel-Images/H-12-2.jpg",
        "img3": "./Hotel-Images/H-12-3.jpg",
        "img4": "./Hotel-Images/H-12-4.jpg",
        "convenient": "['Nhận phòng 24 giờ', 'Đưa đón sân bay', 'Mới xây dựng', 'Bãi biển riêng', 'Wifi miễn phí']",
        "room1Name": "Premium Family Room 2 Bedrooms Resort View",
        "room1Img": "./Hotel-Images/H-12-R1.jpg",
        "room1Capacity": "4",
        "room1Price":"8 187 104",
        "room2Name": "Suite Lounge Access 1 King Size Bed Ocean View",
        "room2Img": "./Hotel-Images/H-12-R2.jpg",
        "room2Capacity": "2",
        "room2Price":"4 166 894",
        "suggest" : "true"
    }
]


