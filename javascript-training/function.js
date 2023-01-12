// I want to make a square of n and add 10 to it
// Result of above requirent needs to divide by 45
// If Gte>6 return normal else bad date
function makeSqrAdTen(num){
    const n=num
    const sqr=(n*n)+10
    return sqr
}
function dvdChk(rs){
    const dvd = rs/45
    const sts = (dvd>6)? 'normal data' : 'bad data'
    console.log('Status is :m'+sts)
}
const rsV1 = makeSqrAdTen(7)
dvdChk(rsV1)