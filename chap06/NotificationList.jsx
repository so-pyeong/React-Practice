import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
    message: "점심식사 시간입니다.",
    },
    {
    message: "이제 곧 미팅이 시작됩니다.",
    },
    {
    message: "오늘은 5시 조기퇴근날입니다.",
    }
];
var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {notifications: []};
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
        if (notifications.length < reservedNotifications.length) {
            const index = notifications.length;
            notifications.push(reservedNotifications[index]);

            this.setState({ //state 데이터 업데이트를 위한 setState() 함수 정의
            notifications: notifications,
            });
        } else {
            clearInterval(timer);
            }  
        }, 1000);
    }

    componentDidUpdate() {}

    componentWillUnmount() {
        if(timer) {
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notifications) => {
                    return <Notification message={notifications.message} />;
                })}
            </div>
        )
    }
    
    
}

export default NotificationList;