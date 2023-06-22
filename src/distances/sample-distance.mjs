
import distance from '../distance.mjs'
export const sampleDistance = distance((r1, g1, b1, r2, g2, b2)=>{
    return (Math.abs(r1-r2)+Math.abs(g1-g2)+Math.abs(b1-b2)+
        Math.abs(Math.max(r1, g1, b1)-Math.max(r2, g2, b2))/2
    )/3 + Math.abs(Math.max(r1, g1, b1)-Math.max(r2, g2, b2))/2;
});
export default sampleDistance;