let inputName = prompt("!!!Lütfen adınızı yazınız!!!"); //prompt ile kullanıcıdan isim bilgisi alınıp inputName isimli değişkene atandı
const isim= document.querySelector("#myName");//id'si myName olan html tag'ına ulaşıp bu bilgi isim adlı değişkende tutuluyor
isim.innerHTML = `${inputName}` ; //önceden ulaştığımız html tagı içersine girilen isim değerini ekledik

showTime();//fonksiyon çağrıldı

function showTime(){ //function start
    let tarih = new Date(); // anlık tarih bilgisi tarih isimli değişkene atıldı
    let hour = tarih.getHours();//tarih bilgisi genel olduğu için içersinden saat,
    let minute = tarih.getMinutes();//dakika
    let second = tarih.getSeconds() ;// saniye
    let day = tarih.getDay();//ve gün bilgileri değişkenlere atandı
    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
//getDay() gün bilgisini interger olarak döndürdüğü için days isimli array oluşturuldu bu array bize getDay() metodundan dönen integer değerin gün karşılığını alabilmemizi sağlıcak
    if (minute < 10){//eğer dakika 10'dan küçükse başına "0" ekliyoruz görüntü kirliliği oluşmaması için
        minute = "0" + minute
    }
    if (second < 10){//eğer saniye 10'dan küçükse başına "0" ekliyoruz görüntü kirliliği oluşmaması için
        second = "0" + second
    }

    const date = document.querySelector("#myClock");//id'si myClock olan html tag'ına ulaşıp bu bilgi date adlı değişkende tutuluyor
    date.innerHTML = `${hour}:${minute}:${second} ${days[day]}` ;//önceden ulaştığımız html tagı içersine anlık zaman bilgilerini ekledik
    setTimeout(showTime,1000);//zamanın anlık olarak akmasını sağlamak için setTimeout metodundan faydalanıldı..
}// ve function end....

 