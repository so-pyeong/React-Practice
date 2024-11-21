import React from 'react'

function ListItem1() {
    const numbers = [1,2,3,4,5];
    
    //key가 정의되지 않을 경우에는 경고(warning) 발생한다.
    //map()함수 이용한 배열요소 렌더링을 할 경우 배열 인덱스를 key 요소로 지정한다.
    const listItem = numbers.map((number, index)=> <li key={index}>{number}</li> );  //map함수:반복문 처리
    //console.log(listItem)

  return (
    <div>
        <ul>
            {listItem}
        </ul>
    </div>
  )
}

export default ListItem1