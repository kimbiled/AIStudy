import Video from "../components/Video";
import styles from "../style";
import { Footer } from "../components";
const VideoPractice = () => {
	return (
		<>
			<section className="pb-[150px] pt-[40px]">
				<div className={` ${styles.paddingX} font-lato font-bold mx-auto`}>
					<h2 className="text-center shadow1 text-smrtBlack leading-[105%] pb-[20px]">Video Practice</h2>
					<h3 className="text-center text-primary text-[30px] leading-[110%] mb-[30px]">Учебные материалы</h3>
					<div className="flex text-smrtBlack mb-[30px] ">
						<div className=" p-4 font-medium">
							Экзамен:{" "}
							<span className="font-lato border rounded-lg pl-4 pr-20 py-2 text-transDesc">IELTS</span>
						</div>
						<div className=" p-4 font-medium">
							Уроки:{" "}
							<span className="font-lato border rounded-lg pl-4 pr-20 py-2 text-transDesc">
								Writing №1
							</span>
						</div>
					</div>
					<div className=" p-4 font-medium">
						Введите название видео:{" "}
						<span className="font-lato border rounded-lg pl-4 pr-20 py-2 block max-w-[380px] mt-[12px] text-transDesc">
							IELTS
						</span>
					</div>
					<Video></Video>
				</div>
			</section>
		</>
	);
};

export default VideoPractice;
