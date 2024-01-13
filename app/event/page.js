"use client";
import { Dancing_Script, Patrick_Hand } from "next/font/google";
import Countdown from "../components/Countdown";

const inter = Dancing_Script({ subsets: ["latin"] });
const inter2 = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });
const page = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <div className={inter.className}>
                        <div className="title text-center max-md:pt-4">
                            <h2 className="text-5xl font-semibold pb-2 max-md:text-3xl">
                                Sự Kiện Cưới
                            </h2>
                            <p className="text-3xl max-md:text-2xl">
                                Mời bạn tới chung vui cùng gia đình chúng tôi.
                                Sự hiện diện của bạn là làm cho ngày vui của
                                chúng tôi được nhân lên bội phần. Hân hạnh được
                                đón tiếp
                            </p>
                            {/* <Countdown /> */}
                        </div>
                    </div>
                    <div className={inter2.className}>
                        <div className="pt-8">
                            <div className="flex items-center justify-around max-md:flex-col max-md:gap-8 max-md:p-1">
                                <div>
                                    <div className="w-[500px] max-md:w-auto border border-pink-500 rounded-xl p-4 max-md:p-2">
                                        <h2 className="text-3xl text-center pb-2">
                                            Tiệc cưới nhà gái
                                        </h2>
                                        <h2 className="text-2xl">Lễ ăn hỏi:</h2>
                                        <p className="text-xl pl-4">
                                            15:00 PM 04-02-2024 - ( 25/12/2023
                                            ÂL )
                                        </p>
                                        <h2 className="text-2xl pb-2 pt-2">
                                            Lễ cưới:{" "}
                                        </h2>
                                        <p className="text-xl pl-4">
                                            13:00 PM 05-02-2024 - ( 26/12/2023
                                            ÂL )
                                        </p>
                                        <h2 className="text-2xl pb-2 pt-2">
                                            Tiệc:{" "}
                                        </h2>
                                        <p className="text-xl pl-4">
                                            16:00 PM 04-02-2024 - ( 25/12/2023
                                            ÂL )
                                        </p>
                                        <p className="text-xl pt-4">
                                            Địa chỉ: Đội 2, Thôn Hổ Sơn, Xã Liên
                                            Minh, Huyện Vụ Bản, Nam Định
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-[500px] max-md:w-auto min-h-[362px] border border-pink-500 rounded-xl p-4 max-md:p-2">
                                        <h2 className="text-3xl text-center pb-2">
                                            Tiệc cưới nhà Trai
                                        </h2>

                                        <h2 className="text-2xl pb-2 pt-2">
                                            Lễ cưới:{" "}
                                        </h2>
                                        <p className="text-xl pl-4">
                                            15:00 PM 05-02-2024 - ( 26/12/2023
                                            ÂL )
                                        </p>
                                        <h2 className="text-2xl pb-2 pt-2">
                                            Tiệc:{" "}
                                        </h2>
                                        <p className="text-xl pl-4">
                                            17:00 PM 04-02-2024 - ( 25/12/2023
                                            ÂL )
                                        </p>
                                        <p className="text-xl pt-4">
                                            Địa chỉ: Thôn Cổ Trang, Xã Nam Hải,
                                            Huyện Nam Trực, Tỉnh Nam Định
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

// Thông tin:
// Nhà gái:
// Cô Dâu: Nguyễn Thúy Hằng
// Bố: Nguyễn Phú Xuân
// Mẹ: Trần Thị Duyên

// Nhà Trai:
// Chú Rể: Vũ Quang Khánh
// Bố: Vũ Quang Điệp
// Mẹ: Trương Thị Lan
// Địa chỉ: Thôn Cổ Trang, Xã Nam Hải, Huyện Nam Trực, Tỉnh Nam Định
