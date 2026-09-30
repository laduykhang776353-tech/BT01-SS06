let choice;
let orderId = "";
let validOrder = false;

do {

    // MENU
    let menu =
        "========================================\n" +
        "       QUẢN LÝ BÁN PHỤ KIỆN GYM\n" +
        "========================================\n" +
        "1. Nhập và chuẩn hóa mã đơn hàng.\n" +
        "2. Tính tiền và in hóa đơn.\n" +
        "3. Thoát chương trình.\n" +
        "========================================\n" +
        "Nhập lựa chọn của bạn:";

    choice = prompt(menu);

    switch (choice) {
        case "1":

            orderId = prompt("Nhập mã đơn hàng:");

            // Xóa khoảng trắng
            orderId = orderId.trim();

            // Chuyển thành chữ in hoa
            orderId = orderId.toUpperCase();

            // Kiểm tra độ dài
            if (orderId.length < 8) {

                alert("Mã đơn hàng phải có ít nhất 8 ký tự.");

                validOrder = false;

            } 
            // Kiểm tra mã bắt đầu bằng DH
            else if (!orderId.startsWith("DH")) {

                alert("Mã đơn hàng phải bắt đầu bằng DH.");

                validOrder = false;

            } 
            else {

                validOrder = true;

                alert(
                    "Mã đơn hàng hợp lệ!\n" +
                    "Mã đơn hàng: " + orderId
                );
            }

            break;

        case "2":

            // Kiểm tra mã đơn hàng
            if (!validOrder) {

                alert(
                    "Chưa có mã đơn hàng hợp lệ!\n" +
                    "Vui lòng chọn chức năng 1 trước."
                );

                break;
            }

            let products = prompt(
                "Nhập sản phẩm:\n" +
                "SHAKER - 120.000 VNĐ\n" +
                "GLOVES - 180.000 VNĐ\n" +
                "STRAP - 150.000 VNĐ\n\n" +
                "Ví dụ: SHAKER GLOVES STRAP"
            );

            products = products.trim();
            products = products.toUpperCase();

            let total = 0;

            // Duyệt chuỗi sản phẩm
            for (let i = 0; i < products.length; i++) {

                // Bỏ qua khoảng trắng
                if (products[i] === " ") {
                    continue;
                }

                // SHAKER
                if (products.startsWith("SHAKER", i)) {

                    total += 120000;

                    i += 5;

                }

                // GLOVES
                else if (products.startsWith("GLOVES", i)) {

                    total += 180000;

                    i += 5;

                }

                // STRAP
                else if (products.startsWith("STRAP", i)) {

                    total += 150000;

                    i += 4;
                }
            }


            // Hỏi thẻ VIP
            let vip = prompt(
                "Khách có thẻ VIP không?\n" +
                "Nhập Y nếu có, N nếu không:"
            );

            vip = vip.trim();
            vip = vip.toUpperCase();

            let discount = 0;

            if (vip === "Y") {

                discount = total * 0.1;
            }

            let finalPrice = total - discount;

            console.log("");
            console.log("-".repeat(40));
            console.log("          HÓA ĐƠN GYM");
            console.log("-".repeat(40));

            console.log("Mã đơn hàng : " + orderId);

            console.log("-".repeat(40));

            console.log(
                "Tổng tiền   : " +
                total.toLocaleString("vi-VN").padStart(12) +
                " VNĐ"
            );

            console.log(
                "Giảm giá VIP: " +
                discount.toLocaleString("vi-VN").padStart(12) +
                " VNĐ"
            );

            console.log("-".repeat(40));

            console.log(
                "Thanh toán  : " +
                finalPrice.toLocaleString("vi-VN").padStart(12) +
                " VNĐ"
            );

            console.log("-".repeat(40));

            break;

        case "3":

            alert("Đã thoát chương trình.");

            break;

        default:

            alert(
                "Lựa chọn không hợp lệ!\n" +
                "Vui lòng chọn 1, 2 hoặc 3."
            );

            break;
    }

} while (choice !== "3");