const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]

export function getDate(utcMiliseconds){
    
    const dateObject = new Date(utcMiliseconds*1000)

    return{
        date:dateObject.getDate(),
        month:months[dateObject.getMonth()],
        year:dateObject.getFullYear(),
        hour:dateObject.getHours(),
        minute:dateObject.getMinutes(),
        day:days[dateObject.getDay()]
    }

}