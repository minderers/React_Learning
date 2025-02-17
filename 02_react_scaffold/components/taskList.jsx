import React from "react";

class TaskList extends React.Component {
  render() {
    const taskList = [
      {
        id: 1,
        name: "吃饭",
        completed: true,
      },
      {
        id: 2,
        name: "睡觉",
        completed: false,
      },
      {
        id: 3,
        name: "敲代码",
        completed: false,
      },
    ];
    const red = { color: "red" };
    const green = { color: "green" };
    const incompleteTasks = taskList.filter((task) => !task.completed).length;
    return (
      <div>
        <h2>当前未完成任务数：{incompleteTasks}</h2>
        <div className="item">
          {taskList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <h2>id：{item.id}</h2>
                <div>
                  {item.completed ? (
                    <h2 style={green}>{item.name}</h2>
                  ) : (
                    <h2 style={red}>{item.name}</h2>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default TaskList;
