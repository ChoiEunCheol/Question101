// 6. if문을 사용하여 어떤 변수가 짝수인지 홀수인지 판별하는 코드를 작성하세요.
function a(number){
    if(number%2 === 1){
        console.log(`${number}은(는) 홀수입니다.`);
    } else {
        console.log(`${number}은(는) 짝수입니다.`);
    }
};

a(10);
a(11);