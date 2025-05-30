import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          BẠN LÀ NGƯỜI MỚI VỚI BOXING
          <br /> KHÔNG SAO HẾT, CÓ CHÚNG TÔI LO !
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVzspm1SH1lnxDi7HNak3cYIyX-rm9nrPPw&s" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Linh hoạt với</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Thời gian của bạn</motion.b> .
          </h1>
          <button>Chúng ta sẽ làm gì?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Boxing căn bản</h2>
          <p>
            <ul>
              <li>
                Làm quen với 6 kỹ thuật đấm cơ bản.
              </li>
              <li>
                Thành thạo 8 bước di chuyển căn bản, kiểm soát không gian.
              </li>
              <li>
                Hướng dẫn phương pháp hít thở đúng cách, giữ nhịp thở ổn định.
              </li>
              <li>
                Các bài tập tăng cường thể lực, tốc độ và sức bền 
              </li>
            </ul>
          </p>
          <button>Linh hoạt</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Boxing tăng cường</h2>
          <p>
            <ul>
              <li>
                Bài tập đa dạng, cường độ cao hơn, thời gian nghỉ ngắn.
              </li>
              <li>
                Tập trung xây dựng sức mạnh cơ bắp và thể chất toàn diện.
              </li>
              <li>
                Rèn luyện kỹ năng tự vệ thực tế, tăng khả năng phản ứng nhanh.
              </li>
              <li>
                Luyện tập đấm bao chuyên sâu, cải thiện lực đấm và độ chính xác qua từng cú đánh.
              </li>
            </ul>
          </p>
          <button>T3/5/7</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Boxing chuyên sâu</h2>
          <p>
            <ul>
              <li>
                Phân tích kỹ thuật đòn đánh chuyên sâu, tối ưu hóa cú đấm qua từng góc độ
              </li>
              <li>
                Tập luyện phản xạ và tình huống thực chiến (sparring có kiểm soát)
              </li>
              <li>
                Kỹ năng kiểm soát nhịp độ trận đấu và đọc vị đối thủ
              </li>
              <li>
                Giáo án nâng cao về tốc độ, độ bền tinh thần và chiến thuật thi đấu
              </li>
            </ul>
          </p>
          <button>T2/4/6</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Boxing thi đấu & chuyên nghiệp</h2>
          <p>
            <ul>
              <li>
                Huấn luyện mô phỏng trận đấu thật, nâng cao khả năng thi đấu dưới áp lực
              </li>
              <li>
                Coaching 1:1 cùng huấn luyện viên giàu kinh nghiệm từng thi đấu chuyên nghiệp
              </li>
              <li>
                Điều chỉnh chế độ dinh dưỡng, hồi phục và chăm sóc cơ thể như vận động viên chuyên nghiệp
              </li>
              <li>
                Cơ hội được tham gia giải đấu boxing bán chuyên và chuyên nghiệp nếu đạt yêu cầu
              </li>
            </ul>
          </p>
          <button>Linh hoạt</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
