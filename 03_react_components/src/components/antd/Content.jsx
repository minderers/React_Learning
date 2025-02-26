import { Carousel } from "antd";
import Card from "./Card";
import "./antd.css";

const Content = () => {
  return (
    <div>
      <div className="swiper">
        <Carousel autoplay arrows infinite={false}>
          <div>
            <img
              src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E6%9D%A5%E7%9C%8B%E7%9C%8BUP%E4%B8%BB%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%87%E5%B9%B4%E8%B4%A7%E7%9A%84_.jpg"
              alt=""
              className="carousel"
            />
          </div>
          <div>
            <img
              src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E5%85%A8%E6%96%B03.0%E7%89%88%E6%9C%AC%E7%8E%B0%E5%B7%B2%E6%8E%A8%E5%87%BA.jpg"
              alt=""
              className="carousel"
            />
          </div>
          <div>
            <img
              src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E5%BC%A0%E6%9D%B0%E9%82%80%E4%BD%A0%E4%B8%80%E8%B5%B7%E5%85%B1%E8%B5%B4%E5%8D%81%E5%A4%A7%E5%8F%A4%E5%9F%8E%E5%A5%87%E5%B9%BB%E4%B9%8B%E6%97%85%EF%BC%81.jpg"
              alt=""
              className="carousel"
            />
          </div>
        </Carousel>
        ;
      </div>
      <div className="List">
        <div className="item">
          <Card
            coverSlot={
              <img src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E5%BC%A0%E6%9D%B0%E9%82%80%E4%BD%A0%E4%B8%80%E8%B5%B7%E5%85%B1%E8%B5%B4%E5%8D%81%E5%A4%A7%E5%8F%A4%E5%9F%8E%E5%A5%87%E5%B9%BB%E4%B9%8B%E6%97%85%EF%BC%81.jpg" />
            }
            avatarSlot={
              <img src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E5%BC%A0%E6%9D%B0%E9%82%80%E4%BD%A0%E4%B8%80%E8%B5%B7%E5%85%B1%E8%B5%B4%E5%8D%81%E5%A4%A7%E5%8F%A4%E5%9F%8E%E5%A5%87%E5%B9%BB%E4%B9%8B%E6%97%85%EF%BC%81.jpg" />
            }
            titleSlot={<div>张杰邀请你一起共赴十大古城奇幻之旅！</div>}
            descSlot={<p>张杰邀请你一起共赴十大古城奇幻之旅！</p>}
          />
          <Card
            coverSlot={
              <img src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E6%9D%A5%E7%9C%8B%E7%9C%8BUP%E4%B8%BB%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%87%E5%B9%B4%E8%B4%A7%E7%9A%84_.jpg" />
            }
            avatarSlot={
              <img src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E6%9D%A5%E7%9C%8B%E7%9C%8BUP%E4%B8%BB%E6%98%AF%E6%80%8E%E4%B9%88%E5%A4%87%E5%B9%B4%E8%B4%A7%E7%9A%84_.jpg" />
            }
            titleSlot={<div>来看看UP主是怎么备年货的</div>}
            descSlot={<p>来看看UP主是怎么备年货的</p>}
          />
          <Card
            coverSlot={
              <img src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E5%85%A8%E6%96%B03.0%E7%89%88%E6%9C%AC%E7%8E%B0%E5%B7%B2%E6%8E%A8%E5%87%BA.jpg" />
            }
            avatarSlot={
              <img src="https://bilibili-app.oss-cn-hangzhou.aliyuncs.com/swiper/%E5%85%A8%E6%96%B03.0%E7%89%88%E6%9C%AC%E7%8E%B0%E5%B7%B2%E6%8E%A8%E5%87%BA.jpg" />
            }
            titleSlot={<div>全新3.0版本现已推出</div>}
            descSlot={<p>全新3.0版本现已推出</p>}
          />
        </div>
      </div>
    </div>
  );
};
export default Content;
