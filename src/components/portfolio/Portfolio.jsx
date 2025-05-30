import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nguyễn Việt Hùng",
    img: "/q1.jpg",
    desc: "HLV Hùng nổi tiếng với sự kỷ luật và kỹ thuật chuẩn chỉnh. Anh đặc biệt chú trọng nền tảng căn bản và khả năng phòng thủ – học với anh, bạn sẽ nắm chắc từng bước di chuyển và cú đấm không lệch một ly.",
  },
  {
    id: 2,
    title: "Nguyễn Văn Hoà",
    img: "/q2.jpg",
    desc: "Với lối dạy đầy năng lượng và sáng tạo, HLV Hoà truyền cảm hứng cho mọi học viên nhờ phong cách huấn luyện trực quan và vui nhộn. Mỗi buổi tập với anh là một trải nghiệm thú vị và đầy động lực.",
  },
  {
    id: 3,
    title: "Nguyễn Văn Đoàn",
    img: "/q3.jpg",
    desc: "Thầy Đoàn là chuyên gia về thể lực và tốc độ. Dưới sự hướng dẫn của anh, bạn sẽ đốt cháy giới hạn bản thân qua các bài tập cường độ cao, tăng sức bền và phản xạ cực nhanh – rất phù hợp cho các bạn trẻ mê thử thách.",
  },
  {
    id: 4,
    title: "Lương Trung Nguyên",
    img: "/q4.jpg",
    desc: "HLV Nguyên sở hữu lối đánh chiến thuật và khả năng đọc trận cực tốt. Anh không chỉ dạy kỹ thuật mà còn giúp bạn hiểu rõ 'tư duy boxing' – biết ra đòn đúng lúc, tránh đòn hiệu quả và giữ được cái đầu lạnh trong mọi tình huống.",
  },
  {
    id: 5,
    title: "Nguyễn Hoàng Thắng",
    img: "/q5.jpg",
    desc: "Với bề dày thi đấu thực chiến, HLV Thắng luôn mang đến trải nghiệm tập luyện như một võ sĩ thật sự. Anh đặc biệt phù hợp cho những ai có định hướng thi đấu hoặc muốn nâng boxing lên tầm chuyên nghiệp.",
  },
  {
    id: 6,
    title: "Vũ Duy Tiệp",
    img: "/q6.jpg",
    desc: "Huấn luyện viên Tiệp mang tinh thần 'chơi mà học' – giúp học viên thoải mái tiếp cận boxing từ con số 0. Anh kiên nhẫn, thân thiện và đặc biệt phù hợp với người mới bắt đầu hoặc trẻ nhỏ.",
  },
  {
    id: 7,
    title: "Cấn Minh Thái",
    img: "/q7.jpg",
    desc: "HLV Thái là người truyền cảm hứng mạnh mẽ với tinh thần thép. Anh từng vượt qua nhiều chấn thương và khó khăn để trở thành võ sĩ. Tập cùng anh, bạn không chỉ học boxing mà còn học cách kiên cường trong cuộc sống.",
  },
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

const Portfolio = () => {
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
        <h1>HLV nổi bật</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
