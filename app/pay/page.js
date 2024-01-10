import Image from "next/image";
const page = () => {
    return (
        <div className="pt-8">
            <div>
                <div className="flex items-center justify-center gap-12 text-center max-md:flex-col">
                    <div className="border border-pink-500 rounded-xl overflow-hidden">
                        <h2 className="text-xl pb-4 pt-2">Mừng Cô Dâu</h2>
                        <Image
                            src="/codau.jpg"
                            width={250}
                            height={250}
                            alt=""
                        />
                    </div>
                    <div className="border border-pink-500 rounded-xl overflow-hidden">
                        <h2 className="text-xl pb-4 pt-2">Mừng Chú Rể</h2>
                        <Image
                            src="/chure.jpg"
                            width={250}
                            height={250}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
