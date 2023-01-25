/**
 * 1. 상태와 행동 객체: 상태와 행동을 묶어둔 객체
 *  - 객체 안에서 자기 자신의 속성을 접근하기 위해서는 this 키워드를 사용
 * (이 외 순수 데이터 객체: key와 value를 이용해서 데이터를 묶어둔 객체가 있음)
 */
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name} 🍎`);
  },
};

apple.display();
