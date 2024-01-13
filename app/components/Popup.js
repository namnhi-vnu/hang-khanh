import { Dancing_Script, Patrick_Hand } from "next/font/google";

const inter2 = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });
const Popup = () => {
    return (
        <div className={inter2.className}>
            <div className="popups">
                <div className="text-center">
                    <div>
                        <h2 className="text-3xl pb-4">
                            Giới Thiệu Thiệp Online
                        </h2>
                        <p className="text-xl">
                            Xin chào mọi người!! Vợ chồng mình có làm thiếp
                            online này với mục đích gửi lời mời {'"'}Trân trọng
                            nhất{'"'} tới các bạn ở xa, khi chúng mình chưa trực
                            tiếp gửi thiệp tới tận tay mọi người... <br />
                            Chân thành cảm ơn mọi người có thể sắp xếp thời gian
                            tham dự lễ cưới của chúng mình!!!
                        </p>
                        <button>Tắt thông báo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
