// Bubbling up, Propagating
// 에러가 전파되는 특징을 이용해서 적합하게 처리할 수 있는 곳에서 에러를 처리

function a() {
  throw new Error('error!');
}

function b() {
  // 제일 근접한 단위에서 try~catch를 잡아도 됨
  try {
    a();
  } catch (error) {
    console.log(
      '생각해보니깐 이 에러는 내가 핸들링할 수 없을 것 같군 다시 throw해서 상위로 보내자!'
    );
    throw error;
  }
}

function c() {
  b();
}

try {
  // 에러는 버블링(전파)이 되기 때문에 호출 시 try~catch를 잡아도 됨
  c();
} catch (error) {
  console.log('Catched!');
}

console.log('Done!');
