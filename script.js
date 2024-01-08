const popup = document.querySelector(".popup"),
wifiIcon= document.querySelector(".icon i "),
popupTitle = document.querySelector(".popup .title"),
popupDesc = document.querySelector(".desc");
let isOnline = true, setIntervalId, timer =10 ;

const checkConnection = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
        console.log(response);

    } catch (error) {
        isOnline = false;
    }
    timer=10;
    clearInterval(intervalId)
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    if (status) {
        wifiIcon.className=  "uil uil-wifi"
        popupTitle.innerText="Restored Connection";
        popupDesc.innerHTML= "Your devicec is now successfully connected to the internet";
        popup.classList.add("online");
        return setTimeout(() => popup.classList.remove("show",),2000);
    }
    wifiIcon.className=  "uil uil-wifi-slash"
    popupTitle.innerText="Restored Connection";
    popupDesc.innerHTML= "Your devicec is now successfully connected to the internet";
        popup.className= "popup show ";

        intervalId = setIntervalId(() => {
            timer--;
            if (timer===0) checkConnection();
            popup.querySelector(".desc b").innerText = timer;
    },1000 )
}



setInterval(() => isOnline && checkConnection, 3000);
