// create references to all my dom elements
// button
const calcBtn = document.querySelector(".calc_button")
// inputs
const boxPrice = document.querySelector(".price_apples")
const boxLength = document.querySelector(".number_apples")
const packetLength = document.querySelector(".packet_apples")
const profitPercentage = document.querySelector(".profit_apples")
// outputs
const outPacketLength = document.querySelector(".calc_packet")
const outApplePrice = document.querySelector(".calc_apple")
const outPacketPrice = document.querySelector(".calc_packet_cost")
const outPacketProfit = document.querySelector(".calc_packet_profit")

// create instance of my factory function
const applePlanner = ApplePlanner()

// this function will set the values from the inputs widget
// and then it will display the output to my output widget
const calculateAndDisplay = () => {
    let condition = true
    let my_values = [boxPrice.value, boxLength.value,packetLength.value].forEach(el => {
        if(el == "" || el <= 0) condition = false
    })
    if(condition){
        // set the values
        applePlanner.setBoxPrice(boxPrice.value-"")
        applePlanner.setNumberOfApples(boxLength.value-"")
        applePlanner.setApplesPerPacket(packetLength.value-"")
        applePlanner.setProfitPercentage(profitPercentage.value-"")
        
        // display the answers
        outPacketLength.value = applePlanner.calculateNumberOfPackets()
        outApplePrice.value = `R${applePlanner.calculatePricePerApple().toFixed(2)}`
        outPacketPrice.value = `R${applePlanner.calculatePricePerPacket().toFixed(2)}`
        outPacketProfit.value = `R${applePlanner.calculateRecommendedPricePerPacket().toFixed(2)}`
    } else {
        const msg = document.querySelector(".msg")
        msg.innerHTML = "Please fill in all the fields correctly"
        setTimeout(()=>msg.innerHTML = "", 2000)
    }
}

// add event listner to the calculate button
calcBtn.addEventListener("click", calculateAndDisplay)