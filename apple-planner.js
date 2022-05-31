const ApplePlanner = () => {
    // initialise my variable
    let theBoxPrice = 0
    let theNumberOfApples = 0
    let applesPerPacket = 0
    let theProfitPercentage = 0

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

    return {
        setBoxPrice, getBoxPrice,
        setNumberOfApples, getNumberOfApples,
        setApplesPerPacket, getApplesPerPacket,
        setProfitPercentage, getProfitPercentage
    }
}