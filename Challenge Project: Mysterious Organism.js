// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
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

 const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      let ranPick = dna[Math.floor(Math.random()*14)]
      let index = dna.indexOf(ranPick);
      let mBase = dna[index];
      let newBase = returnRandBase();
      while(newBase === mBase){
        newBase = returnRandBase();
      }
      return this.dna[index] = newBase;
    },
    compareDNA(pAequor){
      for(let x = 0; x < this.dna.length; x++){
        if(this.dna[x]===pAequor.dna[x]){
          counter++;
        }
        return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${(counter / 15)*100}% DNA in common`
      }
    },
    willLikelySurvive(){
      let matched = this.dna.filter((z) => z === 'C' || z === 'G');
      console.log(matched.length);
      return (matched.length/this.dna.length) >=0.60 ? true : false;
      }
    }
  };

// const test1 = pAequorFactory(Math.floor(Math.random()*25), mockUpStrand());
// const test2 = pAequorFactory(Math.floor(Math.random()*25), mockUpStrand());

// console.log(test1.willLikelySurvive());

let samples = [];

const collectSamples = () => {
  for(let d = 0; d < 31; d++){
    samples.push(pAequorFactory(x+1, mockUpStrand()))
  }
}



