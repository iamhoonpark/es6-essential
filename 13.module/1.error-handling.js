/**
 * 에러처리(Error-Handling)
 * - try~catch를 잡아두면 app이 crashed되지 않고 개발자가 에러를 어떻게 처리할 것인지 기회를 가질 수 있다.
 */

function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없습니다.');
  return '파일의내용';
}

function processFile(path) {
  let content;
  try {
    // Error를 던질 수 있는 함수라면
    // try로 시도를 해본 다음에
    // 만약에 error가 발생한다면
    // catch 구문에서 적절한 처리를 진행
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본내용';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음');
  }
  const result = 'hi' + content;
  return result;
}

const result = processFile('경로');
console.log(result);
