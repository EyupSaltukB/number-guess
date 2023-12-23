/* 
 * YÖNERGE: 
 * Min. ve max. değerler arası sayı tahmin edilmeli
 * Belirli bir tahmin hakkı
 * Kazanma durumunu bildir
 * Kaybederse tekrar deneme seçeneği

*/

// arayüz elemanları
const game = document.querySelector("#game"),
guessBtn = document.querySelector("#guess-btn"),
guessInput = document.querySelector("#guess-input"),
message = document.querySelector(".message"),
minNum = document.querySelector(".min-num"),
maxNum = document.querySelector(".max-num");
// console.log(game, guessBtn, guessInput, message)

let min = 1;
let max = 10;
winningNumber = getRandomNumber(min,max),
guessesLeft = 3;

// min ve max değerlerini arayüze gönderme
minNum.textContent = min;
maxNum.textContent = max;

// tahmini izleme
guessBtn.addEventListener("click", () => {
    // inputun içindeki veriyi al sayıya çevirs
    let guess = parseInt(guessInput.value);
    
    // kazanma durumunu kontrol et
    if(guess === winningNumber){
        // Oyunu kazandı
        gameOver(true, `Tebrikler! Doğru bildin.`)
    } else {// Yanlış tahmin
        guessesLeft --;
        if(guessesLeft === 0){
            // oyunu kaybetti
            gameOver(false,`Üzgünüm! Doğru tahmin ${winningNumber}'idi.`) 
        }else{
            // kalan hak 0'dan fazla ise
            // yanlış tahmin edilirse input kızarır
            guessInput.style.borderColor = "red";
            // input temizle
            guessInput.value = "";
            // inputa odaklan
            guessInput.focus();
            // kaç hakkı olduğunu göster
            setMessage(`${guess} doğru değil, ${guessesLeft} hakkın kaldı.`)
        }
    }
})

// oyunu bitirme
function gameOver(won,msg){
    let color = won ? "green" : "red"
    // inputu iptal et
    guessInput.disabled = true;

    // çerçevesini değiştir
    guessInput.borderColor = color;
    
    // kullanıcıyı bilgilendir
    setMessage(msg)
}

// kullanıcıya mesaj verme
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}

// rastgele sayı bulma işlemleri
function getRandomNumber(min, max){
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}