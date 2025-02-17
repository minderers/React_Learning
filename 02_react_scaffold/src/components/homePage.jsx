import React from "react";
import styles from "./css/homePage.module.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          name: "John",
          age: 20,
          gender: "male",
          isActive: true,
          fanCount: 1000,
          isFan: true,
          url: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/jpg/Routine.jpg",
        },
        {
          name: "Jane",
          age: 25,
          gender: "female",
          isActive: false,
          fanCount: 500,
          isFan: false,
          url: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/jpg/coconut.jpg",
        },
        {
          name: "Bob",
          age: 30,
          gender: "male",
          isActive: true,
          fanCount: 2000,
          isFan: false,
          url: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/jpg/ghost.jpg",
        },
      ],
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(index) {
    const updatedUserList = this.state.userList.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          isFan: !item.isFan,
          fanCount: item.isFan ? item.fanCount - 1 : item.fanCount + 1,
        };
      }
      return item;
    });
    this.setState({ userList: updatedUserList });
  }

  render() {
    return (
      <div>
        <div className={styles.whole}>
          <div className={styles.userList}>
            {this.state.userList.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.desc}>
                    <img src={item.url} className={styles.img} />
                    <h1 className={styles.name}>{item.name}</h1>
                    <div className={styles.status}>
                      {item.isActive ? (
                        <div className={styles.online}>在线</div>
                      ) : (
                        <div className={styles.offline}>不在线</div>
                      )}
                    </div>
                  </div>
                  <div className={styles.fan}>
                    <div className={styles.fanCount}>
                      粉丝数：{item.fanCount}
                    </div>
                    <div className={styles.btn}>
                      {item.isFan ? (
                        <div
                          className={styles.attented}
                          onClick={() => this.btnClick(index)}
                        >
                          已关注
                        </div>
                      ) : (
                        <div
                          className={styles.attent}
                          onClick={() => this.btnClick(index)}
                        >
                          +关注
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
