import { decorate, observable, action } from 'mobx';

class CareerStore {
    name = '강주원';
    comments = [
      { who:"저는 제로웹 애자일 코치 조엘입니다.", comment:'주원님 덕분에 데이터 그래프를 쉽게 그릴수 있엇어요!'},
      { who:"저는 제로웹 마케터 헤일리입니다.", comment:'저는 제로웹의 해일리 입니다. 주원님이 만들어준 sql 도구로 마케팅에 성과를 빠르게 확인할수 있었습니다.'},
    ];

    add( c ) {
      this.comments.push(c);
    }
}

decorate(CareerStore, {
  name: observable,
  comments: observable,
  add: action,
})

export default CareerStore