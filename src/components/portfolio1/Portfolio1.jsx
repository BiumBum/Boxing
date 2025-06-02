import { useRef } from "react";
import "./portfolio1.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Lịch tập",
    img: "/lich.jpg",
    desc: "Lịch tập luyện boxing được thiết kế để nâng cao thể lực, kỹ thuật và phản xạ của võ sĩ thông qua sự kết hợp giữa các bài tập cardio, rèn thể lực, kỹ thuật đánh và chiến thuật thi đấu. Mỗi buổi tập thường bao gồm khởi động, luyện kỹ thuật cơ bản.",
  },
  {
    id: 2,
    title: "Bảng giá các lớp nhóm",
    img: "/lich3.jpg",
    desc: "Các lớp nhóm do HLV Hùng hướng dẫn nổi bật với phương pháp huấn luyện nghiêm túc và bài bản. Anh đặc biệt chú trọng vào nền tảng kỹ thuật và khả năng phòng thủ, giúp học viên nắm vững từng bước di chuyển và ra đòn chính xác ngay từ buổi đầu."
  },
  {
    id: 2,
    title: "Bảng giá các lớp trẻ em",
    img: "/lich4.jpg",
    desc: "Các lớp nhóm do HLV Hùng hướng dẫn nổi bật với phương pháp huấn luyện nghiêm túc và bài bản. Anh đặc biệt chú trọng vào nền tảng kỹ thuật và khả năng phòng thủ, giúp học viên nắm vững từng bước di chuyển và ra đòn chính xác ngay từ buổi đầu."
  },
  {
    id: 3,
    title: "Bảng giá các gói tập luyện PT ( HLV cá nhân )",
    img: "/lich1.jpg",
    desc: "HLV Hoà mang đến những buổi tập cá nhân đầy năng lượng, sáng tạo và hiệu quả. Phong cách giảng dạy trực quan, sinh động cùng sự tận tâm của anh giúp mỗi buổi tập trở thành một trải nghiệm truyền cảm hứng, phù hợp với mọi trình độ."
  }
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Xem thêm</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio1 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Thông báo</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio1;
