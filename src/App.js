/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    " 남자 니트 추천",
    "남자 단화 추천",
  ]); //state 변경 시 html 자동으로 재렌더링.
  let [thumbsUpCount, setThumbsUpCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [value, setValue] = useState(0);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let changeTitle = () => {
    let copyTitle = [...title];
    copyTitle[0] = "여자 코트 추천";
    setTitle(copyTitle);
  };

  let sortKorean = () => {
    let copyTitle = [...title];
    copyTitle.sort();
    setTitle(copyTitle);
  };

  let showModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  let addTitle = () => {
    let copyTitle = [...title];
    copyTitle = [value, ...copyTitle];
    setTitle(copyTitle);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Dong's Blog</h4>
      </div>
      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                showModal();
                setModalTitle(i);
              }}
            >
              {title[i]}
            </h4>
            <button onClick={sortKorean}> 정렬 </button>
            <button
              onClick={() => {
                let copyThumbsUp = [...thumbsUpCount];
                copyThumbsUp[i] = copyThumbsUp[i] + 1;
                setThumbsUpCount(copyThumbsUp);
              }}
            >
              👍
            </button>
            {thumbsUpCount[i]}
            <button
              onClick={() => {
                let copyTitle = [...title];
                copyTitle.splice(i, 1);
                setTitle(copyTitle);
              }}
            >
              삭제
            </button>

            <p>{`${year}년${month}월${date}일`}</p>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="ex) 여자 코트 추천"
      />
      <button onClick={addTitle}>추가</button>

      {modal === false ? null : (
        <Modal
          title={title}
          modalTitle={modalTitle}
          year={year}
          month={month}
          date={date}
        />
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>{`${props.year}년${props.month}월${props.date}일`}</p>
      <p>상세내용</p>
      <button>제목변경</button>
    </div>
  ); //컴포넌트 만들면 좋을때
  //1.반복적인 html 축약할때.
  //2.큰 페이지들.
  //3.자주변경되는 것들.
}

export default App;
