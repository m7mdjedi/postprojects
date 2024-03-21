


export const nameHanlder = (name)=>{ 
    const arName=name.split(' ');
    const arFirstLetter= arName.map(ele=>ele[0]);
    const finalRes=arFirstLetter.join("");
    return finalRes;
    
  }