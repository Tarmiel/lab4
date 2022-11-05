class Lab4 {
  constructor(text) {
    this.text = text;
  }

  charsCount(content = this.text) {
    return [...content].reduce((acc, char) => {
      acc[char] = acc[char] ? acc[char] + 1 : 1;
      return acc;
    }, {});
  }

  bigramCount(content = this.text) {
    let res = {};
    content = content.length % 2 === 0 ? content : content + "_";
    for (let i = 0; i < content.length; i += 2) {
      let str = content.slice(i, i + 2);
      res[str] = res[str] ? res[str] + 1 : 1;
    }
    return res;
  }

  trigramCount(content = this.text) {
    let res = {};
    let con = content.length % 3;
    content = con === 0 ? content : con === 1 ? content + "__" : content + "_";
    for (let i = 0; i < content.length; i += 3) {
      let str = content.slice(i, i + 3);
      res[str] = res[str] ? res[str] + 1 : 1;
    }
    return res;
  }

  charsProbabilities(content = this.text) {
    return Object.fromEntries(
      Object.entries(this.charsCount(content)).map(([key, value]) => [key, value / content.length])
    );
  }

  bigramProbabilities(content = this.text) {
    content = content.length % 2 === 0 ? content : content + "_";
    return Object.fromEntries(
      Object.entries(this.bigramCount(content)).map(([key, value]) => [key, value / (content.length / 2)])
    );
  }

  trigramProbabilities(content = this.text) {
    let con = content.length % 3;
    content = con === 0 ? content : con === 1 ? content + "__" : content + "_";
    return Object.fromEntries(
      Object.entries(this.trigramCount(content)).map(([key, value]) => [key, value / (content.length / 3)])
    );
  }
}

module.exports = Lab4;
