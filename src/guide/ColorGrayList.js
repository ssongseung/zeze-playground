import ColorList from '../data/color.json'

function ColorGrayList() {
  const colorName = "colorGray"
  const coloItem = ColorList.color.filter(item => (
    item.colorName === colorName
  ));

  return (
    <>
      <ul className="color-guide">
        {
          coloItem.map((item) => {
            return (
              <li key={item.id}>
                <div className={'color ' + item.color}></div>
                <div className="desc">
                  <p className="name">{item.name}</p>
                  <p className="code">{item.code}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default ColorGrayList;