let M = 2000
let  N = 2025
bagwaa=""
for (i=M;i<=N;i++){
  if(i % 4==0 && i%100 !== 0 || i%400 ==0){
    bagwaa=bagwaa+i+" "
  }
}console.log(bagwaa)