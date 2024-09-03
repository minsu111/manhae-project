import React, {
  useContext,
  useState,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { useDrop } from 'react-dnd';
import { LanguageContext } from '../../context/LanguageContext';
import Object from '../../components/medal/Object';
import TTSSpeaker from '../../components/common/speaker/TTSSpeaker';
import TextZoomBar from '../../components/common/buttonBar/textZoom/TextZoomBar';

import ObjectList from '../../data/MedalObjects';

import './makingMedal.scss';

const MakingMedal = () => {
  const [medal, setMedal] = useState(null);
  const [middleRibon, setMiddleRibon] = useState(null);
  const [bottomRibon, setBottomRibon] = useState(null);
  const [extraItems, setExtraItems] = useState([]);
  const baseFontSize = 1;
  const [fontSize, setFontSize] = useState(baseFontSize);
  const maxFontSize = baseFontSize + 0.4;

  const boxRef = useRef();

  // 다국어 처리
  const { language } = useContext(LanguageContext);

  const defaultSubject = useMemo(
    () =>
      language === 'Ko'
        ? '아래 버튼을 눌러 주제를 선택해 주세요.'
        : 'Please press the button below\nto select a topic.',
    [language]
  );

  const handleSubjectBtn = useCallback(
    (e) => {
      setSubject(
        language === 'Ko'
          ? `${e.target.value} 훈장 만들기`
          : `Making '${e.target.value}' Medal`
      );
    },
    [language]
  );

  const [subject, setSubject] = useState(defaultSubject);

  const [, drop] = useDrop(() => ({
    accept: 'image',
    drop: (medalItem, monitor) => addImageToBoard(medalItem, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (medalItem, monitor) => {
    const { id, index } = medalItem;
    const item = ObjectList.find((object) => id === object.id);

    if (!item) return;

    if (item.groupId === 1) {
      setMedal(item);
    } else if (item.groupId === 2) {
      setMiddleRibon(item);
    } else if (item.groupId === 3) {
      setBottomRibon(item);
    } else if (item.groupId === 4) {
      handleExtraItemDrop(item, monitor, id, index);
    }
  };

  const handleExtraItemDrop = (item, monitor, id, index) => {
    const imageboxPos = boxRef.current.getBoundingClientRect();
    const dragStartPos = monitor.getInitialClientOffset();
    const itemPos = monitor.getClientOffset();

    if (imageboxPos.x < dragStartPos.x && imageboxPos.y < dragStartPos.y) {
      updateExtraItemPos(id, index, itemPos, imageboxPos);
    } else {
      addNewExtraItem(item, itemPos, imageboxPos);
    }
  };

  const updateExtraItemPos = (id, index, itemPos, imageboxPos) => {
    setExtraItems((prevItems) =>
      prevItems.map((obj) =>
        id === obj.id && index === obj.index
          ? {
              ...obj,
              left: itemPos.x - imageboxPos.x,
              top: itemPos.y - imageboxPos.y,
            }
          : obj
      )
    );
  };

  const addNewExtraItem = (item, itemPos, imageboxPos) => {
    setExtraItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        index: prevItems.length + 1,
        left: itemPos.x - imageboxPos.x,
        top: itemPos.y - imageboxPos.y,
      },
    ]);
  };

  const renderObjects = useCallback((groupId) => {
    return ObjectList.filter((object) => object.groupId === groupId).map(
      (object) => (
        <div key={object.id} className={`medal_objects_group${groupId}`}>
          <Object medalItem={object} />
        </div>
      )
    );
  }, []);

  const renderObjectInBoard = (object, zIndex) =>
    object && (
      <div
        style={{
          position: 'absolute',
          top: `${object.top}%`,
          left: `${object.left}%`,
          width: `${object.width}vw`,
          zIndex: zIndex || '0',
        }}
      >
        <Object medalItem={object} />
      </div>
    );

  const renderButtons = () => {
    const buttonLabels =
      language === 'Ko'
        ? ['애국심', '건강', '정직', '성실', '효도']
        : ['Patriotism', 'Health', 'Honesty', 'Diligence', 'Filial Piety'];

    return (
      <div className='medal_btn_section'>
        {buttonLabels.map((label) => (
          <input
            key={label}
            type='button'
            className={`${subject.includes(label) && 'double_height'}`}
            value={label}
            onClick={handleSubjectBtn}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className='making_medal_container'
      style={{ fontSize: `${fontSize}vw` }}
    >
      <div className='making_medal_section_wrapper'>
        <div className='left_section'>
          <div className='making_description'>
            <h1>
              {language === 'Ko'
                ? '나만의 훈장 만들기'
                : 'Create Your Own Medal!'}
            </h1>
            <hr />
            <p>
              {language === 'Ko'
                ? '대한민국 훈장과 만해 한용운 선생님의 훈장을 참고하여 나만의 훈장을 만들어볼까요? 오른쪽 네모 박스에 원하는 요소들을 가져와서 나만의 훈장을 완성한 후, 사진을 찍어 가족, 친구들과 공유해보세요!'
                : 'Let’s create our own medals referring to the Orders of the Republic of Korea and the medals of Master Manhae Han Yong-un! Bring the elements you want into the right square box to complete your own medal, then take a picture and share it with your family and friends!'}
            </p>
          </div>
          <div className='objects_wrapper'>
            <div className='objects1'>{renderObjects(1)}</div>
            <hr />
            <div className='objects2'>{renderObjects(2)}</div>
            <div className='objects3'>{renderObjects(3)}</div>
            <hr />
            <div className='objects4'>{renderObjects(4)}</div>
          </div>
        </div>
        {/* board 섹션 */}
        <div className='right_section'>
          <div className='board_top_object'>
            <img
              src={'/assets/medal/medal_board_object.png'}
              alt={'훈장 만들기 보드'}
            />
          </div>
          <div className='boards' id='imagebox' ref={boxRef}>
            <div className='board_title'>
              <p>{subject}</p>
            </div>
            <div className='drop_section' ref={drop}>
              {renderObjectInBoard(medal, 3)}
              {renderObjectInBoard(middleRibon)}
              {renderObjectInBoard(bottomRibon, 2)}

              {extraItems.map((object) => {
                return (
                  <div
                    key={object.id}
                    style={{
                      position: 'absolute',
                      left: `calc(${object.left}px - ${object.width / 2}vw)`,
                      top: `calc(${object.top}px - ${object.width / 2}vw)`,
                      width: `${object.width}vw`,
                      zIndex: '4',
                    }}
                  >
                    <Object medalItem={object} />
                  </div>
                );
              })}
            </div>
            {renderButtons()}
          </div>
          <div
            className='refresh_btn'
            onClick={() => {
              setMedal(null);
              setMiddleRibon(null);
              setBottomRibon(null);
              setExtraItems([]);
            }}
          >
            <img src={'/assets/medal/refresh_btn.png'} alt={'다시 만들기'} />
          </div>
        </div>
      </div>
      <div className='play_btn'>
        <TTSSpeaker />
      </div>
      <TextZoomBar
        textFontSize={fontSize}
        maxFontSize={maxFontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
};

export default MakingMedal;
