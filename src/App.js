import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import kronshtein1 from './assets/kronshtein1.jpg';

function App() {
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [fileName, setFileName] = useState('Upload your photo');
  const [kronshteinImg, setKronshteinImg] = useState('');
  const [example1, setExample1] = useState('');
  const [example2, setExample2] = useState('');
  const [example3, setExample3] = useState('');
  const [isRightExample1, setIsRightExample1] = useState(null);
  const [isRightExample2, setIsRightExample2] = useState(null);
  const [isRightExample3, setIsRightExample3] = useState(null);

  const [solutionValueToExample1, setSolutionValueToExample1] = useState(null);
  const [isNeedToShowValueToExample1, setIsNeedToShowValueToExample1] = useState(false);

  const [solutionValueToExample2, setSolutionValueToExample2] = useState(null);
  const [isNeedToShowValueToExample2, setIsNeedToShowValueToExample2] = useState(false);

  const [isNeedToShowValueToExample3, setIsNeedToShowValueToExample3] = useState(false);

  const [buildFiguresRows, setBuildFiguresRows] = useState([
    {
      columns: [
        {
          lines: [
            { className: 'build__line--blue gradus-right-0' },
            { className: 'build__line--blue gradus-right--15' },
            { className: 'build__line--blue gradus-right--30' },
            { className: 'build__line--blue gradus-right--45' },
            { className: 'build__line--blue gradus-right--60' },
            { className: 'build__line--blue gradus-right--75' },
            { className: 'build__line--blue gradus-right--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-right'
            },
            {
              value:75,
              direction:'top-right'
            },
            {
              value:60,
              direction:'top-right'
            },
            {
              value:45,
              direction:'top-right'
            },
            {
              value:30,
              direction:'top-right'
            },
            {
              value:15,
              direction:'top-right'
            },
            {
              value:0,
              direction:'top-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--blue gradus-right-0' },
            { className: 'build__line--blue gradus-right-15' },
            { className: 'build__line--blue gradus-right-30' },
            { className: 'build__line--blue gradus-right-45' },
            { className: 'build__line--blue gradus-right-60' },
            { className: 'build__line--blue gradus-right-75' },
            { className: 'build__line--blue gradus-right-90' },
          ],

          graduses:[
            {
              value:90,
              direction:'bottom-right'
            },
            {
              value:75,
              direction:'bottom-right'
            },
            {
              value:60,
              direction:'bottom-right'
            },
            {
              value:45,
              direction:'bottom-right'
            },
            {
              value:30,
              direction:'bottom-right'
            },
            {
              value:15,
              direction:'bottom-right'
            },
            {
              value:0,
              direction:'bottom-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--blue gradus-left-0' },
            { className: 'build__line--blue gradus-left-15' },
            { className: 'build__line--blue gradus-left-30' },
            { className: 'build__line--blue gradus-left-45' },
            { className: 'build__line--blue gradus-left-60' },
            { className: 'build__line--blue gradus-left-75' },
            { className: 'build__line--blue gradus-left-90' },
          ],

          graduses:[
            {
              value:90,
              direction:'top-left'
            },
            {
              value:75,
              direction:'top-left'
            },
            {
              value:60,
              direction:'top-left'
            },
            {
              value:45,
              direction:'top-left'
            },
            {
              value:30,
              direction:'top-left'
            },
            {
              value:15,
              direction:'top-left'
            },
            {
              value:0,
              direction:'top-left'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--blue gradus-left-0' },
            { className: 'build__line--blue gradus-left--15' },
            { className: 'build__line--blue gradus-left--30' },
            { className: 'build__line--blue gradus-left--45' },
            { className: 'build__line--blue gradus-left--60' },
            { className: 'build__line--blue gradus-left--75' },
            { className: 'build__line--blue gradus-left--90' },
          ],

          graduses:[
            {
              value:90,
              direction:'bottom-left'
            },
            {
              value:75,
              direction:'bottom-left'
            },
            {
              value:60,
              direction:'bottom-left'
            },
            {
              value:45,
              direction:'bottom-left'
            },
            {
              value:30,
              direction:'bottom-left'
            },
            {
              value:15,
              direction:'bottom-left'
            },
            {
              value:0,
              direction:'bottom-left'
            },
          ]
        },
      ],
    },
    {
      columns: [
        {
          lines: [
            { className: 'build__line--red gradus-right-0' },
            { className: 'build__line--red gradus-right--15' },
            { className: 'build__line--red gradus-right--30' },
            { className: 'build__line--red gradus-right--45' },
            { className: 'build__line--red gradus-right--60' },
            { className: 'build__line--red gradus-right--75' },
            { className: 'build__line--red gradus-right--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-right'
            },
            {
              value:75,
              direction:'top-right'
            },
            {
              value:60,
              direction:'top-right'
            },
            {
              value:45,
              direction:'top-right'
            },
            {
              value:30,
              direction:'top-right'
            },
            {
              value:15,
              direction:'top-right'
            },
            {
              value:0,
              direction:'top-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--red gradus-right-0' },
            { className: 'build__line--red gradus-right-15' },
            { className: 'build__line--red gradus-right-30' },
            { className: 'build__line--red gradus-right-45' },
            { className: 'build__line--red gradus-right-60' },
            { className: 'build__line--red gradus-right-75' },
            { className: 'build__line--red gradus-right-90' },
          ],
          graduses:[
            {
              value:90,
              direction:'bottom-right'
            },
            {
              value:75,
              direction:'bottom-right'
            },
            {
              value:60,
              direction:'bottom-right'
            },
            {
              value:45,
              direction:'bottom-right'
            },
            {
              value:30,
              direction:'bottom-right'
            },
            {
              value:15,
              direction:'bottom-right'
            },
            {
              value:0,
              direction:'bottom-right'
            },
          ]
        },
        
        {
          lines: [
            { className: 'build__line--red gradus-left-0' },
            { className: 'build__line--red gradus-left-15' },
            { className: 'build__line--red gradus-left-30' },
            { className: 'build__line--red gradus-left-45' },
            { className: 'build__line--red gradus-left-60' },
            { className: 'build__line--red gradus-left-75' },
            { className: 'build__line--red gradus-left-90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-left'
            },
            {
              value:75,
              direction:'top-left'
            },
            {
              value:60,
              direction:'top-left'
            },
            {
              value:45,
              direction:'top-left'
            },
            {
              value:30,
              direction:'top-left'
            },
            {
              value:15,
              direction:'top-left'
            },
            {
              value:0,
              direction:'top-left'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--red gradus-left-0' },
            { className: 'build__line--red gradus-left--15' },
            { className: 'build__line--red gradus-left--30' },
            { className: 'build__line--red gradus-left--45' },
            { className: 'build__line--red gradus-left--60' },
            { className: 'build__line--red gradus-left--75' },
            { className: 'build__line--red gradus-left--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'bottom-left'
            },
            {
              value:75,
              direction:'bottom-left'
            },
            {
              value:60,
              direction:'bottom-left'
            },
            {
              value:45,
              direction:'bottom-left'
            },
            {
              value:30,
              direction:'bottom-left'
            },
            {
              value:15,
              direction:'bottom-left'
            },
            {
              value:0,
              direction:'bottom-left'
            },
          ]
        },
      ],
    },
    {
      columns: [
        {
          lines: [
            { className: 'build__line--green build__line--green-gradus gradus-right-0' },
            { className: 'build__line--green build__line--green-gradus gradus-right--15' },
            { className: 'build__line--green build__line--green-gradus gradus-right--30' },
            { className: 'build__line--green build__line--green-gradus gradus-right--45' },
            { className: 'build__line--green build__line--green-gradus gradus-right--60' },
            { className: 'build__line--green build__line--green-gradus gradus-right--75' },
            { className: 'build__line--green build__line--green-gradus gradus-right--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-right'
            },
            {
              value:75,
              direction:'top-right'
            },
            {
              value:60,
              direction:'top-right'
            },
            {
              value:45,
              direction:'top-right'
            },
            {
              value:30,
              direction:'top-right'
            },
            {
              value:15,
              direction:'top-right'
            },
            {
              value:0,
              direction:'top-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--green build__line--green-gradus gradus-right-0' },
            { className: 'build__line--green build__line--green-gradus gradus-right-15' },
            { className: 'build__line--green build__line--green-gradus gradus-right-30' },
            { className: 'build__line--green build__line--green-gradus gradus-right-45' },
            { className: 'build__line--green build__line--green-gradus gradus-right-60' },
            { className: 'build__line--green build__line--green-gradus gradus-right-75' },
            { className: 'build__line--green build__line--green-gradus gradus-right-90' },
          ],
          graduses:[
            {
              value:90,
              direction:'bottom-right'
            },
            {
              value:75,
              direction:'bottom-right'
            },
            {
              value:60,
              direction:'bottom-right'
            },
            {
              value:45,
              direction:'bottom-right'
            },
            {
              value:30,
              direction:'bottom-right'
            },
            {
              value:15,
              direction:'bottom-right'
            },
            {
              value:0,
              direction:'bottom-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--green build__line--green-gradus gradus-left-0' },
            { className: 'build__line--green build__line--green-gradus gradus-left-15' },
            { className: 'build__line--green build__line--green-gradus gradus-left-30' },
            { className: 'build__line--green build__line--green-gradus gradus-left-45' },
            { className: 'build__line--green build__line--green-gradus gradus-left-60' },
            { className: 'build__line--green build__line--green-gradus gradus-left-75' },
            { className: 'build__line--green build__line--green-gradus gradus-left-90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-left'
            },
            {
              value:75,
              direction:'top-left'
            },
            {
              value:60,
              direction:'top-left'
            },
            {
              value:45,
              direction:'top-left'
            },
            {
              value:30,
              direction:'top-left'
            },
            {
              value:15,
              direction:'top-left'
            },
            {
              value:0,
              direction:'top-left'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--green build__line--green-gradus gradus-left-0' },
            { className: 'build__line--green build__line--green-gradus gradus-left--15' },
            { className: 'build__line--green build__line--green-gradus gradus-left--30' },
            { className: 'build__line--green build__line--green-gradus gradus-left--45' },
            { className: 'build__line--green build__line--green-gradus gradus-left--60' },
            { className: 'build__line--green build__line--green-gradus gradus-left--75' },
            { className: 'build__line--green build__line--green-gradus gradus-left--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'bottom-left'
            },
            {
              value:75,
              direction:'bottom-left'
            },
            {
              value:60,
              direction:'bottom-left'
            },
            {
              value:45,
              direction:'bottom-left'
            },
            {
              value:30,
              direction:'bottom-left'
            },
            {
              value:15,
              direction:'bottom-left'
            },
            {
              value:0,
              direction:'bottom-left'
            },
          ]
        },
      ],
    },
    {
      columns: [
        {
          lines: [
            { className: 'build__line--orange build__line--orange-gradus gradus-right-0' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right--15' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right--30' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right--45' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right--60' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right--75' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-right'
            },
            {
              value:75,
              direction:'top-right'
            },
            {
              value:60,
              direction:'top-right'
            },
            {
              value:45,
              direction:'top-right'
            },
            {
              value:30,
              direction:'top-right'
            },
            {
              value:15,
              direction:'top-right'
            },
            {
              value:0,
              direction:'top-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--orange build__line--orange-gradus gradus-right-0' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right-15' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right-30' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right-45' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right-60' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right-75' },
            { className: 'build__line--orange build__line--orange-gradus gradus-right-90' },
          ],
          graduses:[
            {
              value:90,
              direction:'bottom-right'
            },
            {
              value:75,
              direction:'bottom-right'
            },
            {
              value:60,
              direction:'bottom-right'
            },
            {
              value:45,
              direction:'bottom-right'
            },
            {
              value:30,
              direction:'bottom-right'
            },
            {
              value:15,
              direction:'bottom-right'
            },
            {
              value:0,
              direction:'bottom-right'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--orange build__line--orange-gradus gradus-left-0' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left-15' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left-30' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left-45' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left-60' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left-75' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left-90' },
          ],
          graduses:[
            {
              value:90,
              direction:'top-left'
            },
            {
              value:75,
              direction:'top-left'
            },
            {
              value:60,
              direction:'top-left'
            },
            {
              value:45,
              direction:'top-left'
            },
            {
              value:30,
              direction:'top-left'
            },
            {
              value:15,
              direction:'top-left'
            },
            {
              value:0,
              direction:'top-left'
            },
          ]
        },
        {
          lines: [
            { className: 'build__line--orange build__line--orange-gradus gradus-left-0' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left--15' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left--30' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left--45' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left--60' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left--75' },
            { className: 'build__line--orange build__line--orange-gradus gradus-left--90' },
          ],
          graduses:[
            {
              value:90,
              direction:'bottom-left'
            },
            {
              value:75,
              direction:'bottom-left'
            },
            {
              value:60,
              direction:'bottom-left'
            },
            {
              value:45,
              direction:'bottom-left'
            },
            {
              value:30,
              direction:'bottom-left'
            },
            {
              value:15,
              direction:'bottom-left'
            },
            {
              value:0,
              direction:'bottom-left'
            },
          ]
        },
      ],
    },
  ]);
  const [buildAreaFigures, setBuildAreaFigures] = useState([]);
  const [buildAreaInputs, setBuildAreaInputs] = useState([]);

  console.log(buildAreaInputs);

  const buildAreRef = useRef(null);

  const changeFile = (e) => {
    if (!e.target.files) {
      return;
    }

    setFileName(e.target.files[0]?.name ? e.target.files[0].name : 'Upload your photo');
    setKronshteinImg(fileName);
    console.log(fileName);
  };

  const addFigureToAreaFigures = (className) => {
    setBuildAreaFigures((prev) => [...prev, { className }]);
  };

  const deleteFigureToAreaFigures = (className) => {
    setBuildAreaFigures((prev) => prev.filter((el) => el.className !== className));
  };

  const solveExample1 = () => {
    if (fileName === 'kronshtein1.jpg' && example1 === 'F2 - Rab - Rac * cos60 = 0') {
      setIsRightExample1(true);
      setSolutionValueToExample1(10.767)
    } else{
      setIsRightExample1(false);
    }
  };

  const solveExample2 = () => {
    if (fileName === 'kronshtein1.jpg' && example2 === '-Rac * cos30 - F1 = 0') {
      setIsRightExample2(true);
      setIsNeedToShowValueToExample1(true)
      setSolutionValueToExample2(-11.534)
      setIsNeedToShowValueToExample2(true)
    }else{
      setIsRightExample2(false);
    }
  };

  const solveExample3 = () => {
    if (
      fileName === 'kronshtein1.jpg' &&
      example3 === 'F2 * cos30 - F1 * cos30 - Rac - Rab * cos60 = 0'
    ) {
      setIsRightExample3(true);

      if (isNeedToShowValueToExample1 && isNeedToShowValueToExample2) {
        setIsNeedToShowValueToExample3(true)
      }
    }else{
      setIsRightExample3(false);
    }
  };

  const createAreaInput = (e) => {
    const areaPaddingLeft = 200;
    const cursorPositionX = e.pageX - areaPaddingLeft;
    const cursorPositionY =
      e.pageY - buildAreRef.current.getBoundingClientRect().top - window.scrollY;

    setBuildAreaInputs((prev) => [...prev, { left: cursorPositionX, top: cursorPositionY }]);
  };

  const deleteAreaInput = (top, left) => {
    setBuildAreaInputs((prev) =>
      prev.map((el) => {
        if (el?.left !== left && el?.top !== top) {
          return el;
        } else {
          return null;
        }
      }),
    );
  };

  return (
    <div className="App">
      <div className="build">
        <div className="build__area" onClick={createAreaInput} ref={buildAreRef}>
          <div className='build__area-top'>
            <div className="build__area-row">
              <div className="build__area-column" onClick={(e) => e.stopPropagation()}>
                <p>Дано</p>
                <p>
                  F1 = <input type="text" value={f1} onChange={(e) => setF1(e.target.value)} />
                </p>
                <p>
                  F2 = <input type="text" value={f2} onChange={(e) => setF2(e.target.value)} />
                </p>
                <p>Rab - {solutionValueToExample1 && isNeedToShowValueToExample1 ? solutionValueToExample1 : '?'}, Rac - {solutionValueToExample2 && isNeedToShowValueToExample2 ? solutionValueToExample2 : '?'}</p>
              </div>
              <div className="build__area-column" onClick={(e) => e.stopPropagation()}>
                <div>
                  <img src={kronshteinImg ? kronshtein1 : ''} alt="" />
                </div>
                <input type="file" id="input__file" onInput={changeFile} />
                <span>{fileName}</span>
              </div>
            </div>
            <div className="examples" onClick={(e) => e.stopPropagation()}>
              <p>
                (1), ΣFi<sub>x</sub> = 0
              </p>
              <input
                type="text"
                placeholder="Складаємо рівняння рівноваги"
                value={example1}
                onChange={(e) => {
                  setExample1(e.target.value);
                }}
              />
              <button onClick={solveExample1}>Вирішити</button>
              <div>
                {
                  isRightExample1 === null ?
                    ''
                    :
                    isRightExample1 ?  <span className='right'>Все правильно</span> : <span className='unright'>Не правильно</span>  
                }</div>
              Rab - {solutionValueToExample1 && isNeedToShowValueToExample1 ? solutionValueToExample1 + 'kH' : '?'}
              <p>
                (2), ΣFi<sub>y</sub> = 0
              </p>
              <input
                type="text"
                placeholder="Складаємо рівняння рівноваги"
                value={example2}
                onChange={(e) => {
                  setExample2(e.target.value);
                }}
              />
              <button onClick={solveExample2}>Вирішити</button>
              <div>
                {
                  isRightExample2 === null ?
                    ''
                    :
                    isRightExample2 ?  <span className='right'>Все правильно</span> : <span className='unright'>Не правильно</span>  
                }
              </div>
              Rac - {solutionValueToExample2 && isNeedToShowValueToExample2 + 'kH' ? solutionValueToExample2 + 'kH' : '?'}
              <p>
                (3), ΣFi<sub>x'</sub> = 0
              </p>
              <input
                type="text"
                placeholder="Складаємо перевірочне рівняння рівноваги"
                value={example3}
                onChange={(e) => {
                  setExample3(e.target.value);
                }}
              />
              <button onClick={solveExample3}>Вирішити</button>
              <div>
                {
                  isRightExample3 === null ?
                    ''
                    :
                    isRightExample3 ?  <span className='right'>Все правильно</span> : <span className='unright'>Не правильно</span>  
                }

              </div>
              {
                isNeedToShowValueToExample3 ?
                  `Відповідь: Rab = ${solutionValueToExample1}kH, RAС = ${solutionValueToExample2}kH`
                  :
                  ''
              }
            </div>
          </div>
          {buildAreaInputs.map((input) => {
            if (input) {
              console.log(input);

              return (
                <input
                  style={{ top: input.top, left: input.left }}
                  autoFocus={true}
                  className='build__area-input'
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteAreaInput(input.top, input.left);
                  }}
                />
              );
            } else {
              return <input style={{ display: 'none' }} />;
            }
          })}
          {buildAreaFigures.map((el) => {
            return (
              <div
                className={'build__line' + ' ' + el.className}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFigureToAreaFigures(el.className);
                }}></div>
            );
          })}
        </div>
        {buildFiguresRows.map((row) => {
          return (
            <div className="build__figures-row">
              {row.columns.map((column) => {
                return (
                  <div className="build__figures-column">
                    {
                      column?.graduses?.map((gradus)=>{
                        return <div className={`gradus-point gradus-point-${gradus.value}-${gradus.direction}`}>{gradus.value}</div> 
                      })
                    }
              
                    {column.lines.map((line) => {
                      return (
                        <div
                          className={'build__line' + ' ' + line.className}
                          onClick={() => addFigureToAreaFigures(line.className)}></div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
