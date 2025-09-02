import * as z from "zod";

const phoneSchema = z.string()
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .max(13, "Số điện thoại phải có nhiều nhất 13 số")
    .startsWith("0", "Số điện thoại phải bắt đầu bằng 0")
    .regex(/^0(3|5|7|8|9)\d{8}$/, {
        message: "Số điện thoại không hợp lệ (phải có 10 chữ số và đúng đầu số)",
    });


export { phoneSchema };