var signalRHubProxy;

function SignalRHelper() {
    var self = {
        signalRUrl: "",
        userName: "",
        roomID: 1,
        CurrentPeriod: "",
        seat: "",
        status: false,
    };

    // 連線
    self.Connection = function() {
        return $.getScript(self.signalRUrl + "/hubs", function() {
            $.connection.hub.url = self.signalRUrl;

            // Declare a proxy to reference the hub.
            //signalRHubProxy = $.connection.simpleHub;
            signalRHubProxy = $.connection.signalRHub;

            //Reigster to the "AddMessage" callback method of the hub
            //This method is invoked by the hub
            //接收訊息
            signalRHubProxy.client.addMessage = function(obj, message) {
                //writeToLog("SignalR addMessage.", message);
                // console.log("SignalRHelper addMessage==>", obj, message);
                const room = JSON.parse(localStorage.getItem("WebLocatingHelper"));
                if (room.RoomID == obj && message) {
                    self.ReceiveMsg(message);
                } else if (message.indexOf('DealCards') >= 0) {
                    self.ReceiveMsg(message);
                } else if (
                    signalRHubProxy.client.addMessage.arguments &&
                    signalRHubProxy.client.addMessage.arguments.length > 1
                ) {
                    if (room.RoomID == signalRHubProxy.client.addMessage.arguments[0])
                        self.ReceiveMsg(signalRHubProxy.client.addMessage.arguments[1]);
                }
                //writeToLog(name + ":" + message);
            };

            //Connect to hub
            //writeToLog("SignalR will Connected.");
            $.connection.hub.start().done(function() {
                writeToLog("Web SignalR Connected.");
                signalRHubProxy.server.setUserName(self.userName);
            });
        });
    };

    self.HubProxy = function() {
        //Reigster to the "AddMessage" callback method of the hub
        //This method is invoked by the hub
        //接收訊息
        signalRHubProxy.client.addMessage = function(obj, message) {
            //writeToLog("SignalR addMessage.", message);
            if (
                signalRHubProxy.client.addMessage.arguments &&
                signalRHubProxy.client.addMessage.arguments.length > 1
            ) {
                //self.ReceiveMsg(signalRHubProxy.client.addMessage.arguments);
            }
            //writeToLog(name + ":" + message);
        };
    };

    // 斷線
    self.Disconnection = function() {
        if (signalRHubProxy != null) {
            $.connection.hub.stop(function() {
                signalRHubProxy = null;
                writeToLog("Disconnected.");
            });
            //$.connection.hub.stop().done(function () {
            //    signalRHubProxy = null;
            //    writeToLog("Disconnected.");
            //});
        }
    };

    // 發送訊息
    self.SendMsg = function(msg) {
        if (signalRHubProxy != null) {
            signalRHubProxy.server.send(msg, self.roomID);
        }
    };

    // 接收訊息
    self.ReceiveMsg = function(msg) {
        // return msg;
        //writeToLog(JSON.parse(msg[1]));
        //window['CurGame'].ReceivedMsg(JSON.parse(msg[1])[0]);
        //window['CurGame'].ReceivedMsg(msg[1]);
        try {
            let oLottery = {};
            oLottery = JSON.parse(msg);
            // console.log('Angular msg ==> ', msg);

            if (msg.indexOf('DealCards') >= 0) {
                let openLottery = JSON.parse(msg);
                // console.log('Angular Result ==> ', openLottery.Result);
                if (openLottery.Result >= 0) {
                    // console.log('Angular RouletteFileName ==> ', 'Roulette_0_' + openLottery.Result + '.mp4');
                    localStorage.setItem('RouletteFileName', 'Roulette_0_' + openLottery.Result + '.mp4');
                    localStorage.setItem(
                        "IsShowVideo",
                        true
                    );
                }
            } else if (oLottery && oLottery.length > 0 && oLottery[0].MemberID) {
                let memberInfo = JSON.parse(localStorage.getItem("UserInfo"));
                let sendData = oLottery.filter((obj) => {
                    return obj.MemberID === memberInfo.MemberID;
                });
                console.log('Angular-', msg, sendData);
                localStorage.setItem(
                    "ShowMemberInfo",
                    JSON.stringify(sendData)
                );
            }
        } catch (ex) {
            console.log(ex);
        }
    };

    self.GetReceiveMsg = function(msg) {
        // return msg;
        //writeToLog(JSON.parse(msg[1]));
        //window['CurGame'].ReceivedMsg(JSON.parse(msg[1])[0]);
        //window['CurGame'].ReceivedMsg(msg[1]);
        try {
            return msg;
        } catch (ex) {
            console.log(ex);
        }
    };

    // 建立房間
    self.JoinGroup = function() {
        if (signalRHubProxy != null) {
            signalRHubProxy.server.joinRoomAndSeat(self.roomID);
        }
    };

    // 離開房間
    self.LeaveRoom = function() {
        if (signalRHubProxy != null) {
            signalRHubProxy.server.leaveRoom(self.roomID);
        }
    };

    //Write given text to log area
    function writeToLog(log) {
        console.log(log);
    }

    return self;
};
