class Roller {
  
  constructor(scale) {
    this.scale = scale
  }
  
  arrayOfSize(n) { return Array.from(Array(n).keys()) }
  
  roll({ n }) {
    return this.arrayOfSize(n)
            .map(Math.random)
            .map(num => num * this.scale)
            .map(Math.floor)
  }
}

module.exports = Roller
