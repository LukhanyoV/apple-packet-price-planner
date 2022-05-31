describe('Testing for my ApplePlanner factory function', () => {
    describe("setting and getting the values", () => {
        it("should be able to set and get the price of box of apples", () => {
            const planner = ApplePlanner()
    
            // setting a valid box price
            planner.setBoxPrice(200)
            assert.equal(200,planner.getBoxPrice())
    
            // changing the box price
            planner.setBoxPrice(150)
            assert.equal(150, planner.getBoxPrice())
    
            // setting invalid box price
            planner.setBoxPrice(-100)
            assert.equal(0, planner.getBoxPrice())
        })
    
        it("should be able to set and get the number of apples in the box", () => {
            const planner = ApplePlanner()
    
            // setting a valid number of apples
            planner.setNumberOfApples(100)
            assert.equal(100, planner.getNumberOfApples())
    
            // changing the number of apples in the box
            planner.setNumberOfApples(120)
            assert.equal(120, planner.getNumberOfApples())
    
            // setting invalid number of apples
            planner.setNumberOfApples(-233)
            assert.equal(0, planner.getNumberOfApples())
        })
    
        it("should be able to set and get the number of apples per packet", () => {
            const planner = ApplePlanner()
    
            // setting a valid number of apples per packet
            planner.setApplesPerPacket(10)
            assert.equal(10, planner.getApplesPerPacket())
    
            // changing the number of apples in packet
            planner.setApplesPerPacket(120)
            assert.equal(120, planner.getApplesPerPacket())
    
            // setting invalid number of apples
            planner.setApplesPerPacket(-10)
            assert.equal(0, planner.getApplesPerPacket())
        })
    
        it("should be able to set and get the profit percentage", () => {
            const planner = ApplePlanner()
    
            // setting the valid percentage profit
            planner.setProfitPercentage(15)
            assert.equal(15, planner.getProfitPercentage())
    
            // changing the profit percentage
            planner.setProfitPercentage(20)
            assert.equal(20, planner.getProfitPercentage())
    
            // setting an invalid percentage
            planner.setProfitPercentage(-200)
            assert.equal(0, planner.getProfitPercentage())
        })
    })

    describe("using the values", () => {
        it("should be able to calculate the number of packets that can be made", () => {
            const planner = ApplePlanner()

            // set the number of apples available
            planner.setNumberOfApples(200)

            // set the number of appples per packet
            planner.setApplesPerPacket(10)

            // how many packets can be made
            assert.equal(20, planner.calculateNumberOfPackets())
        })

        it("should be able to calculate the cost price of each apple", () => {
            const planner = ApplePlanner()

            // set price for box of apples
            planner.setBoxPrice(150)

            // set the number of apples available
            planner.setNumberOfApples(200)

            // how much does each apple cost
            assert.equal(0.75, planner.calculatePricePerApple())
        })

        it("should be able to calculate the cost price of each packet", () => {
            const planner = ApplePlanner()

            // set price for box of apples
            planner.setBoxPrice(150)

            // set the number of apples available
            planner.setNumberOfApples(200)

            // set the number of appples per packet
            planner.setApplesPerPacket(10)

            // how much each packet of apples cost
            assert.equal(7.50, planner.calculatePricePerPacket())
        })

        it("should calculate the recommended selling price for each packet to get the profit", () => {
            const planner = ApplePlanner()

            // set price for box of apples
            planner.setBoxPrice(100)

            // set the number of apples available
            planner.setNumberOfApples(100)

            // set the number of appples per packet
            planner.setApplesPerPacket(10)

            // set the profit percentage
            planner.setProfitPercentage(50)

            // how much is the recommended selling price for each packet
            assert.equal(15.00, planner.calculateRecommendedPricePerPacket())
        })
    })
})