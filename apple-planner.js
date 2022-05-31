const ApplePlanner = () => {
    // initialise my variable
    let theBoxPrice = 0
    let theNumberOfApples = 0
    let applesPerPacket = 0
    let theProfitPercentage = 0

    // setting and getting the values
    // price of the box
    const setBoxPrice = price => theBoxPrice = price > 0 ? price : 0
    const getBoxPrice = () => theBoxPrice

    // number of apples in box
    const setNumberOfApples = apples => theNumberOfApples = apples > 0 ? apples : 0
    const getNumberOfApples = () => theNumberOfApples

     // number of apples in packets
     const setApplesPerPacket = apples => applesPerPacket = apples > 0 ? apples : 0
     const getApplesPerPacket = () => applesPerPacket

    // profit percentage
    const setProfitPercentage = percentage => theProfitPercentage = percentage > 0 ? percentage : 0
    const getProfitPercentage = () => theProfitPercentage

    // using the values
    // calculate the number of packets that can be made
    const calculateNumberOfPackets = () => {
        let packets = 0
        let n = getNumberOfApples()
        while(n >= getApplesPerPacket()){
            packets++
            n -= getApplesPerPacket()
        }
        return packets
    }

    // calculate the cost price of each apple
    const calculatePricePerApple = () => getBoxPrice() / getNumberOfApples()

    // calculate the cost price of each packet of apples
    const calculatePricePerPacket = () => calculatePricePerApple() * getApplesPerPacket()

    // calculate the recommened price per packet to get profit
    const calculateRecommendedPricePerPacket = () => {
        return calculatePricePerPacket()+(calculatePricePerPacket()*(getProfitPercentage()/100))
    }

    return {
        setBoxPrice, getBoxPrice,
        setNumberOfApples, getNumberOfApples,
        setApplesPerPacket, getApplesPerPacket,
        setProfitPercentage, getProfitPercentage,

        calculateNumberOfPackets, calculatePricePerApple,
        calculatePricePerPacket, calculateRecommendedPricePerPacket
    }
}