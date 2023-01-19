// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//Creates a sample from the factory
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    // mutates a random base dna
    mutate() {
      let ranPick = dna[Math.floor(Math.random() * 14)];
      let index = dna.indexOf(ranPick);
      let mBase = dna[index];
      let newBase = returnRandBase();
      while (newBase === mBase) {
        newBase = returnRandBase();
      }
      return (this.dna[index] = newBase);
    },
    //compares this sample against another to find the % a like
    compareDNA(pAequor) {
      for (let x = 0; x < this.dna.length; x++) {
        if (this.dna[x] === pAequor.dna[x]) {
          counter++;
        }
      }
      return `specimen #${this.specimenNum} and specimen #${
        pAequor.specimenNum
      } have ${(counter / 15) * 100}% DNA in common`;
    },
    // checks the dna to see if 60% or more is made of C or G
    willLikelySurvive() {
      let matched = this.dna.filter((z) => z === "C" || z === "G");
      return (this.likelySurvive =
        matched.length / this.dna.length >= 0.6 ? true : false);
    }
  };
};


let samples = [];
//Function t ocreate 30 samples with the factory 
const cSamples = () => {
  for (let d = 0; d < 30; d++) {
    samples.push(pAequorFactory(d + 1, mockUpStrand()));
    samples[d].willLikelySurvive();
  }
};

cSamples();

console.log(samples);
