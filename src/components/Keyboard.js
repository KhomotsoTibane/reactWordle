import React from 'react'

export default function Keyboard({usedKeys, handleKeyUp }) {

    const letters =  [{"key": "q"},{"key": "w"}, {"key": "e"}, {"key": "r"},{"key": "t"},{"key": "y"}, {"key": "u"}, {"key": "i"},{"key": "o"}, {"key": "p"},
    {"key": "a"},{"key": "s"}, {"key": "d"},  {"key": "f"}, {"key": "g"}, {"key": "h"}, {"key": "j"}, {"key": "k"}, {"key": "l"},
    {"key":"Del"}, {"key": "z"},{"key": "x"},{"key": "c"},{"key": "v"},  {"key": "b"},{"key": "n"},   {"key": "m"}, {"key":"Enter"}]

    return (
      <div className="keyboard" >
        {letters && letters.map(letter => {
            const color = usedKeys[letter.key]
          return (
            <div key={letter.key} className={color} onClick={()=>handleKeyUp(letter)}> {letter.key} </div>
          )
        })}
      </div>
  )
}
