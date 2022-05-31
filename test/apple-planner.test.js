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
})